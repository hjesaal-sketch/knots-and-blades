import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { SUPPORTED_LANGS, type SupportedLang } from "@/config/books";

async function detectPreferredLanguage(): Promise<SupportedLang> {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  const preferred = acceptLanguage.split(",")[0]?.split("-")[0] || "en";
  return SUPPORTED_LANGS.includes(preferred as SupportedLang) 
    ? (preferred as SupportedLang) 
    : "en";
}

export default async function RootPage() {
  const preferredLang = await detectPreferredLanguage();
  redirect(`/${preferredLang}/home`);
}