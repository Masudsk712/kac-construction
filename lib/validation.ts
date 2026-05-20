import { z } from "zod";

/**
 * Contact form validation schema.
 * - Sanitizes inputs by trimming whitespace
 * - Validates email format
 * - Enforces minimum/maximum lengths to prevent abuse
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name contains invalid characters"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(320, "Email is too long"),

  phone: z
    .string()
    .trim()
    .min(7, "Phone number must be at least 7 digits")
    .max(20, "Phone number is too long")
    .regex(/^[+]?[\d\s()-]+$/, "Phone number contains invalid characters")
    .optional()
    .or(z.literal("")),

  company: z
    .string()
    .trim()
    .max(200, "Company name is too long")
    .optional()
    .or(z.literal("")),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject is too long"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Honeypot field validation – must be empty to pass (spam bots fill it).
 */
export const honeypotSchema = z.object({
  website: z.string().max(0, "Bot detected").optional(),
});