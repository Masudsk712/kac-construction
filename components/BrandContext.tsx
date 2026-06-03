"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { DomainKey } from "@/lib/domain";
import { getClientConfig, type BrandConfig } from "@/lib/content";
import { kacgroupsConfig } from "@/src/content/kacgroups/config";

// ─── Context ────────────────────────────────────────────────────────

interface BrandContextValue {
  domain: DomainKey;
  config: BrandConfig;
}

const BrandContext = createContext<BrandContextValue>({
  domain: "kacgroups",
  config: kacgroupsConfig as unknown as BrandConfig,
});

// ─── Provider ───────────────────────────────────────────────────────

export function BrandProvider({
  domain,
  children,
}: {
  domain: DomainKey;
  children: ReactNode;
}) {
  const config = getClientConfig(domain);

  return (
    <BrandContext.Provider value={{ domain, config }}>
      {children}
    </BrandContext.Provider>
  );
}

// ─── Hook ──────────────────────────────────────────────────────────

export function useBrand(): BrandContextValue {
  return useContext(BrandContext);
}