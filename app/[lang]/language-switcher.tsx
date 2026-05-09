//app/[lang]/language-switcher.tsx
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { SupportedLang } from "@/config/books";

type LanguageSwitcherProps = {
  lang: SupportedLang;
  supportedLangs: readonly SupportedLang[];
};

export default function LanguageSwitcher({
  lang,
  supportedLangs,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function changeLanguage(nextLang: SupportedLang) {
    if (!pathname) return;

    const segments = pathname.split("/");

    if (segments.length > 1 && segments[1]) {
      segments[1] = nextLang;
    } else {
      segments.splice(1, 0, nextLang);
    }

    const nextPath = segments.join("/") || `/${nextLang}`;
    const query = searchParams.toString();
    router.push(query ? `${nextPath}?${query}` : nextPath);
  }

  return (
    <div className="ml-4 flex gap-1 rounded-full bg-zinc-900 px-1 py-1 text-xs">
      {supportedLangs.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => changeLanguage(code)}
          className={`rounded-full px-2 py-1 transition ${
            code === lang
              ? "bg-purple-600 text-white"
              : "text-zinc-400 hover:text-white"
          }`}
          aria-pressed={code === lang}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}