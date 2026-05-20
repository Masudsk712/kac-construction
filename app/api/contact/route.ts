import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";
import {
  contactFormSchema,
  honeypotSchema,
} from "@/lib/validation";
import { ContactEmailTemplate } from "@/lib/email-template";

/* ============================== */
/* 🔐 RATE LIMITING (in-memory) */
/* ============================== */

const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // 3 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];

  // Keep only timestamps within the current window
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  // Record this request
  recent.push(now);
  rateLimitMap.set(ip, recent);

  return false;
}

/* ============================== */
/* 📁 FILE-BASED FALLBACK STORE */
/* ============================== */

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  submittedAt: string;
  ip: string;
  source: "resend" | "local";
}

const DATA_DIR = path.join(process.cwd(), "data");
const SUBMISSIONS_FILE = path.join(DATA_DIR, "contact-submissions.json");

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function saveSubmissionLocally(submission: ContactSubmission): void {
  ensureDataDir();

  let submissions: ContactSubmission[] = [];
  if (fs.existsSync(SUBMISSIONS_FILE)) {
    try {
      const raw = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
      submissions = JSON.parse(raw);
    } catch {
      // If file is corrupted, start fresh
      submissions = [];
    }
  }

  submissions.push(submission);
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf-8");
  console.log(`📁 Contact submission saved locally: ${submission.id}`);
}

/* ============================== */
/* 🚀 POST HANDLER */
/* ============================== */

export async function POST(request: NextRequest) {
  try {
    /* --------------------------------- */
    /* 1. Rate limiting                  */
    /* --------------------------------- */

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many requests. Please wait a minute before submitting again.",
        },
        { status: 429 }
      );
    }

    /* --------------------------------- */
    /* 2. Parse request body             */
    /* --------------------------------- */

    const body = await request.json();

    /* --------------------------------- */
    /* 3. Honeypot spam check            */
    /* --------------------------------- */

    const honeypotResult = honeypotSchema.safeParse(body);
    if (!honeypotResult.success) {
      // Bot detected – return fake success to avoid alerting the bot
      return NextResponse.json({
        success: true,
        message:
          "Thank you for your message. We'll get back to you shortly.",
      });
    }

    /* --------------------------------- */
    /* 4. Validate form data             */
    /* --------------------------------- */

    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;

      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please check your inputs.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, company, subject, message } =
      validationResult.data;

    /* --------------------------------- */
    /* 5. Build submission object        */
    /* --------------------------------- */

    const submission: ContactSubmission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      name,
      email,
      phone: phone || undefined,
      company: company || undefined,
      subject,
      message,
      submittedAt: new Date().toISOString(),
      ip,
      source: "local",
    };

    /* --------------------------------- */
    /* 6. Try Resend first               */
    /* --------------------------------- */

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      try {
        const resend = new Resend(RESEND_API_KEY);

        const contactEmail =
          process.env.CONTACT_EMAIL ?? "immasudskz0712@gmail.com";

        const fromEmail =
          process.env.FROM_EMAIL ??
          "Kuddus Ali Construction <onboarding@resend.dev>";

        const { error: resendError } = await resend.emails.send({
          from: fromEmail,
          to: [contactEmail],
          replyTo: email,
          subject: `Contact Inquiry: ${subject}`,
          react: ContactEmailTemplate({
            name,
            email,
            phone: phone || undefined,
            company: company || undefined,
            subject,
            message,
          }),
        });

        if (!resendError) {
          submission.source = "resend";
          console.log(`✉️ Email sent via Resend for submission ${submission.id}`);
          // Also save a copy locally for backup
          saveSubmissionLocally(submission);
        } else {
          console.warn("⚠️ Resend failed, saving locally:", resendError.message);
          saveSubmissionLocally(submission);
        }
      } catch (resendErr: any) {
        console.warn("⚠️ Resend exception, saving locally:", resendErr?.message ?? resendErr);
        saveSubmissionLocally(submission);
      }
    } else {
      console.warn("⚠️ RESEND_API_KEY not set, saving locally only.");
      saveSubmissionLocally(submission);
    }

    /* --------------------------------- */
    /* 7. Always return success to user  */
    /* --------------------------------- */

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your message! We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
