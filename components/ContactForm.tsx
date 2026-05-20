"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  User,
  Mail,
  Phone,
  Building2,
  FileText,
  MessageSquare,
} from "lucide-react";
import toast from "react-hot-toast";
import { contactFormSchema, ContactFormData } from "@/lib/validation";

/* ============================== */
/* 🔥 FORM FIELD DEFINITIONS     */
/* ============================== */

interface FieldConfig {
  name: keyof ContactFormData;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
  icon: React.ElementType;
  required: boolean;
  colSpan?: "full";
}

const fields: FieldConfig[] = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
    icon: User,
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "your@email.com",
    type: "email",
    icon: Mail,
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number (optional)",
    placeholder: "+91 98765 43210",
    type: "tel",
    icon: Phone,
    required: false,
  },
  {
    name: "company",
    label: "Company Name (optional)",
    placeholder: "Your company name",
    type: "text",
    icon: Building2,
    required: false,
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "e.g. Transmission Line Enquiry",
    type: "text",
    icon: FileText,
    required: true,
    colSpan: "full",
  },
  {
    name: "message",
    label: "Message",
    placeholder:
      "Tell us about your project requirements, timeline, and specifications...",
    type: "textarea",
    icon: MessageSquare,
    required: true,
    colSpan: "full",
  },
];

/* ============================== */
/* 🚀 CONTACT FORM COMPONENT     */
/* ============================== */

export default function ContactForm() {
  const [formData, setFormData] = useState<
    Record<string, string>
  >({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    website: "", // honeypot – hidden from real users
  });

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  /* --------------------------------- */
  /* Handle input changes              */
  /* --------------------------------- */

  function handleChange(
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  }

  /* --------------------------------- */
  /* Handle form submission            */
  /* --------------------------------- */

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const loadingToast = toast.loading(
      "Sending your message..."
    );

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Field-level validation errors
        if (result.fieldErrors) {
          const fieldErrorMap: Record<
            string,
            string
          > = {};

          for (const [key, msgs] of Object.entries(
            result.fieldErrors
          )) {
            if (
              Array.isArray(msgs) &&
              msgs.length > 0
            ) {
              fieldErrorMap[key] = msgs[0];
            }
          }

          setErrors(fieldErrorMap);
        }

        toast.error(result.error || "Something went wrong.", {
          id: loadingToast,
        });
        return;
      }

      // Success
      toast.success(result.message, {
        id: loadingToast,
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch (err) {
      toast.error(
        "Network error. Please check your connection and try again.",
        { id: loadingToast }
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  /* --------------------------------- */
  /* Render form                       */
  /* --------------------------------- */

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border border-[var(--border)]
        bg-[var(--card)]
        backdrop-blur-3xl
        p-8 md:p-10
      "
    >
      {/* Background glow */}
      <div
        className="
          absolute -top-40 -right-40
          w-[300px] h-[300px]
          bg-cyan-500/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />
      <div
        className="
          absolute -bottom-40 -left-40
          w-[300px] h-[300px]
          bg-blue-500/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="relative z-10">
        {/* FORM HEADER */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-black text-[var(--text)]">
            Send Us a Message
          </h3>
          <p className="text-[var(--text-soft)] mt-2 text-sm leading-relaxed">
            Fill out the form below and our team will get
            back to you within 24 hours.
          </p>
        </div>

        {/* HONEYPOT – invisible to real users */}
        <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* FIELDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {fields.map((field) => {
            const Icon = field.icon;
            const fieldError = errors[field.name];
            const isTextarea =
              field.type === "textarea";

            return (
              <div
                key={field.name}
                className={
                  field.colSpan === "full"
                    ? "md:col-span-2"
                    : ""
                }
              >
                <label
                  htmlFor={field.name}
                  className="
                    block text-sm font-semibold
                    text-[var(--text)]
                    mb-2
                  "
                >
                  {field.label}
                  {field.required && (
                    <span className="text-red-400 ml-1">
                      *
                    </span>
                  )}
                </label>

                <div className="relative">
                  {/* ICON */}
                  <div
                    className="
                      absolute left-4 top-1/2
                      -translate-y-1/2
                      text-[var(--text-soft)]
                      pointer-events-none
                    "
                  >
                    <Icon
                      size={16}
                      className={
                        fieldError
                          ? "text-red-400"
                          : ""
                      }
                    />
                  </div>

                  {/* INPUT / TEXTAREA */}
                  {isTextarea ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={
                        formData[field.name] ?? ""
                      }
                      onChange={handleChange}
                      placeholder={
                        field.placeholder
                      }
                      rows={5}
                      disabled={isSubmitting}
                      className="
                        w-full
                        pl-11 pr-4 py-3.5
                        rounded-2xl
                        border
                        bg-[var(--card)]
                        text-[var(--text)]
                        placeholder:text-[var(--text-soft)]
                        placeholder:text-sm
                        resize-y
                        min-h-[120px]
                        transition-all duration-300
                        outline-none
                        focus:ring-2
                        focus:ring-cyan-400/30
                        focus:border-cyan-400/50
                      "
                      style={{
                        borderColor: fieldError
                          ? "rgba(248,113,113,0.5)"
                          : "var(--border)",
                      }}
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={
                        formData[field.name] ?? ""
                      }
                      onChange={handleChange}
                      placeholder={
                        field.placeholder
                      }
                      disabled={isSubmitting}
                      className="
                        w-full
                        h-[52px]
                        pl-11 pr-4
                        rounded-2xl
                        border
                        bg-[var(--card)]
                        text-[var(--text)]
                        placeholder:text-[var(--text-soft)]
                        placeholder:text-sm
                        transition-all duration-300
                        outline-none
                        focus:ring-2
                        focus:ring-cyan-400/30
                        focus:border-cyan-400/50
                      "
                      style={{
                        borderColor: fieldError
                          ? "rgba(248,113,113,0.5)"
                          : "var(--border)",
                      }}
                    />
                  )}
                </div>

                {/* FIELD ERROR */}
                {fieldError && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -4,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                      flex items-center gap-1.5
                      mt-1.5 text-xs
                      text-red-400
                    "
                  >
                    <AlertCircle size={12} />
                    {fieldError}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>

        {/* SUBMIT BUTTON */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={
            isSubmitting ? {} : { scale: 1.02 }
          }
          whileTap={
            isSubmitting ? {} : { scale: 0.98 }
          }
          className="
            mt-8
            w-full
            inline-flex items-center
            justify-center
            gap-3
            px-8 py-4
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            text-black
            font-bold
            text-base
            shadow-[0_0_40px_rgba(34,211,238,0.25)]
            hover:shadow-[0_0_60px_rgba(34,211,238,0.4)]
            transition-all duration-500
            disabled:opacity-60
            disabled:cursor-not-allowed
            disabled:hover:scale-100
          "
        >
          {isSubmitting ? (
            <>
              <Loader2
                size={20}
                className="animate-spin"
              />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </motion.button>

        {/* TRUST INDICATOR */}
        <div
          className="
            mt-6
            flex items-center
            justify-center
            gap-2
            text-xs
            text-[var(--text-soft)]
          "
        >
          <CheckCircle size={14} className="text-cyan-400" />
          <span>
            Your information is secure and will not be shared.
          </span>
        </div>
      </div>
    </motion.form>
  );
}