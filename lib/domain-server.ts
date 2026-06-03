import "server-only";
import { headers } from "next/headers";
import { getDomainFromHost, type DomainKey } from "@/lib/domain";

/**
 * SERVER-SIDE ONLY
 * Detects the active brand domain from the request host header.
 * Falls back to 'kacgroups' as default for localhost or unknown hosts.
 */
export async function getDomain(): Promise<DomainKey> {
  try {
    const headersList = await headers();
    const host =
      headersList.get("host") ||
      headersList.get("x-forwarded-host") ||
      "";

    return getDomainFromHost(host);
  } catch {
    return "kacgroups";
  }
}