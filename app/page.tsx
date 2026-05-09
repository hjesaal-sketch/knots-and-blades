// app/page.tsx
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { SUPPORTED_LANGS, type SupportedLang } from "@/config/books";

function detectPreferredLanguage(): SupportedLang {
  const acceptLanguage = headers().get("accept-language") || "";
  const preferred = acceptLanguage.split(",")[0]?.split("-")[0] || "en";
  return SUPPORTED_LANGS.includes(preferred as SupportedLang) 
    ? (preferred as SupportedLang) 
    : "en";
}

export default async function RootPage() {
  const preferredLang = detectPreferredLanguage();
  redirect(`/${preferredLang}/home`);
}