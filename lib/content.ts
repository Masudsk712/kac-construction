import { type DomainKey } from "@/lib/domain";
import { kacgroupsConfig } from "@/src/content/kacgroups/config";
import { kcpltlConfig } from "@/src/content/kcpltl/config";

// ─── Brand Config Type (derived from kacgroupsConfig) ────────────
export type BrandConfig = typeof kacgroupsConfig;

// ─── Client-Safe Content Loading ─────────────────────────────────

/**
 * Synchronous — used in client components with a known domain key.
 */
export function getConfigForDomain(domain: DomainKey): BrandConfig {
  switch (domain) {
    case "kacgroups":
      return kacgroupsConfig as unknown as BrandConfig;
    case "kcpltl":
      return kcpltlConfig as unknown as BrandConfig;
    default:
      return kacgroupsConfig as unknown as BrandConfig;
  }
}

/**
 * Alias for getConfigForDomain — used in client components.
 */
export function getClientConfig(domain: DomainKey): BrandConfig {
  return getConfigForDomain(domain);
}