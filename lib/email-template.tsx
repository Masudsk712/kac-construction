/**
 * Professional HTML email template for contact form inquiries.
 * Rendered via Resend's React email support.
 */

interface EmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export function ContactEmailTemplate({
  name,
  email,
  phone,
  company,
  subject,
  message,
}: EmailTemplateProps) {
  const year = new Date().getFullYear();

  return (
    <div
      style={{
        fontFamily:
          "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
        backgroundColor: "#f4f6f9",
        padding: "40px 20px",
      }}
    >
      <table
        align="center"
        width="100%"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow:
            "0 4px 24px rgba(0, 0, 0, 0.08)",
        }}
        cellPadding="0"
        cellSpacing="0"
      >
        {/* HEADER */}
        <thead>
          <tr>
            <td
              style={{
                background:
                  "linear-gradient(135deg, #06b6d4, #3b82f6)",
                padding: "32px 40px 28px",
                textAlign: "center" as const,
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.3px",
                }}
              >
                New Contact Inquiry
              </h1>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Kuddus Ali Construction
              </p>
            </td>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          <tr>
            <td style={{ padding: "32px 40px" }}>
              {/* SUBJECT */}
              <div
                style={{
                  backgroundColor: "#f0f9ff",
                  borderRadius: "10px",
                  padding: "16px 20px",
                  marginBottom: "24px",
                  border: "1px solid #bae6fd",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    textTransform: "uppercase" as const,
                    letterSpacing: "1px",
                    color: "#0284c7",
                    fontWeight: 600,
                  }}
                >
                  Subject
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#0f172a",
                  }}
                >
                  {subject}
                </p>
              </div>

              {/* SENDER DETAILS */}
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ marginBottom: "24px" }}
              >
                <tr>
                  <td
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#64748b",
                      paddingBottom: "8px",
                      textTransform: "uppercase" as const,
                      letterSpacing: "1px",
                    }}
                    colSpan={2}
                  >
                    Sender Details
                  </td>
                </tr>
                <DetailRow
                  label="Name"
                  value={name}
                />
                <DetailRow
                  label="Email"
                  value={email}
                />
                {phone && (
                  <DetailRow
                    label="Phone"
                    value={phone}
                  />
                )}
                {company && (
                  <DetailRow
                    label="Company"
                    value={company}
                  />
                )}
              </table>

              {/* MESSAGE */}
              <div
                style={{
                  borderTop: "1px solid #e2e8f0",
                  paddingTop: "20px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 12px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#64748b",
                    textTransform: "uppercase" as const,
                    letterSpacing: "1px",
                  }}
                >
                  Message
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "#334155",
                    whiteSpace: "pre-wrap" as const,
                  }}
                >
                  {message}
                </p>
              </div>
            </td>
          </tr>
        </tbody>

        {/* FOOTER */}
        <tfoot>
          <tr>
            <td
              style={{
                backgroundColor: "#f8fafc",
                padding: "20px 40px",
                borderTop: "1px solid #e2e8f0",
                textAlign: "center" as const,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  color: "#94a3b8",
                }}
              >
                &copy; {year} Kuddus Ali Construction &mdash;
                Transmission Line & EPC Infrastructure Company
              </p>
              <p
                style={{
                  margin: "6px 0 0",
                  fontSize: "11px",
                  color: "#94a3b8",
                }}
              >
                This inquiry was sent from the contact form on
                your website.
              </p>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

/* ---------- Helper ---------- */

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <tr>
      <td
        style={{
          padding: "8px 0",
          fontSize: "13px",
          fontWeight: 600,
          color: "#475569",
          width: "100px",
          verticalAlign: "top",
        }}
      >
        {label}
      </td>
      <td
        style={{
          padding: "8px 0",
          fontSize: "14px",
          color: "#0f172a",
        }}
      >
        {value}
      </td>
    </tr>
  );
}