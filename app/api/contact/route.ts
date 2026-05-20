import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
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
    /* 5. Send email via Resend          */
    /* --------------------------------- */

    const resend = new Resend(process.env.RESEND_API_KEY);

    const contactEmail =
      process.env.CONTACT_EMAIL ?? "immasudskz0712@gmail.com";

    const { data, error } = await resend.emails.send({
      from: `Kuddus Ali Construction <onboarding@resend.dev>`,
      // ⚠️ Replace 'onboarding@resend.dev' with your verified domain
      // once you add and verify a domain in Resend dashboard.
      // Example: from: "Kuddus Ali Construction <contact@kac-construction.com>",
      // Current placeholder: <onboarding@resend.dev> is the default Resend sandbox.
      // Once you verify a domain (e.g. kacgroups.com), change to:
      // from: "Kuddus Ali Construction <noreply@kacgroups.com>",
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

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        {
          success: false,
          error:
            "Failed to send message. Please try again later.",
        },
        { status: 500 }
      );
    }

    /* --------------------------------- */
    /* 6. Return success                 */
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