import "server-only";
import { getDomain } from "@/lib/domain-server";
import { getConfigForDomain, type BrandConfig } from "@/lib/content";

/**
 * SERVER-SIDE ONLY
 * Retrieves the full brand config based on the request domain.
 */
export async function getBrandConfig(): Promise<BrandConfig> {
  const domain = await getDomain();
  return getConfigForDomain(domain);
}