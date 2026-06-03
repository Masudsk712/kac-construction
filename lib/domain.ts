// ─── Domain Configuration ────────────────────────────────────────
// ⚠️ CLIENT-SAFE: No server-only imports (next/headers)

export const DOMAINS = {
  kacgroups: {
    key: "kacgroups" as const,
    brandName: "kacgroups",
    hostnames: ["kacgroups.com", "www.kacgroups.com"],
    default: true,
  },
  kcpltl: {
    key: "kcpltl" as const,
    brandName: "kcpltl",
    hostnames: ["kcpltl.com", "www.kcpltl.com"],
    default: false,
  },
} as const;

export type DomainKey = keyof typeof DOMAINS;

// ─── Client-Safe Domain Detection ─────────────────────────────────

/**
 * Determines the brand domain from a host string.
 * Can be used in client components by reading window.location.hostname.
 */
export function getDomainFromHost(host: string | undefined): DomainKey {
  if (!host) return "kacgroups";

  const cleanHost = host.split(":")[0].toLowerCase();

  for (const [key, config] of Object.entries(DOMAINS)) {
    if (config.hostnames.some((h) => cleanHost === h || cleanHost.endsWith(`.${h}`))) {
      return key as DomainKey;
    }
  }

  return "kacgroups";
}

// ─── Domain Information ───────────────────────────────────────────

export function getDomainUrl(domain: DomainKey): string {
  switch (domain) {
    case "kacgroups":
      return "https://www.kacgroups.com";
    case "kcpltl":
      return "https://www.kcpltl.com";
    default:
      return "https://www.kacgroups.com";
  }
}

export function getPrimaryHostname(domain: DomainKey): string {
  switch (domain) {
    case "kacgroups":
      return "kacgroups.com";
    case "kcpltl":
      return "kcpltl.com";
    default:
      return "kacgroups.com";
  }
}