import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Allow `any` types for generic utility code
      "@typescript-eslint/no-explicit-any": "warn",
      // Allow unescaped entities like apostrophes in text content
      "react/no-unescaped-entities": "off",
      // Allow require() in config files
      "@typescript-eslint/no-require-imports": "off",
      // Allow <img> element where Next.js Image component isn't practical
      "@next/next/no-img-element": "warn",
    },
  },
]);

export default eslintConfig;