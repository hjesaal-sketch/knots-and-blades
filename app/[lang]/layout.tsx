// app/[lang]/layout.tsx
"use client";

import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { SUPPORTED_LANGS, type SupportedLang } from "@/config/books";
import LanguageSwitcher from "./language-switcher";

export const dynamicParams = false;

const footerCopy: Record<
  SupportedLang,
  {
    navigation: string;
    social: string;
    legal: string;
    rights: string;
    builtBy: string;
    home: string;
    shop: string;
    crowdfunding: string;
    about: string;
    description: string;
  }
> = {
  en: {
    navigation: "Navigation",
    social: "Social",
    legal: "Legal",
    rights: "All rights reserved.",
    builtBy: "Built by",
    home: "Home",
    shop: "Shop",
    crowdfunding: "Crowdfunding",
    about: "About",
    description:
      "Knots & Blades is the central universe for novels, future releases, campaign support, and collectible experiences.",
  },
  es: {
    navigation: "Navegación",
    social: "Redes",
    legal: "Legal",
    rights: "Todos los derechos reservados.",
    builtBy: "Desarrollado por",
    home: "Inicio",
    shop: "Tienda",
    crowdfunding: "Crowdfunding",
    about: "Acerca de",
    description:
      "Knots & Blades es el universo central para novelas, próximos lanzamientos, apoyo a campañas y experiencias coleccionables.",
  },
  de: {
    navigation: "Navigation",
    social: "Soziale Netzwerke",
    legal: "Rechtliches",
    rights: "Alle Rechte vorbehalten.",
    builtBy: "Entwickelt von",
    home: "Start",
    shop: "Shop",
    crowdfunding: "Crowdfunding",
    about: "Über uns",
    description:
      "Knots & Blades ist das zentrale Universum für Romane, zukünftige Veröffentlichungen, Kampagnenunterstützung und Sammler-Erlebnisse.",
  },
  it: {
    navigation: "Navigazione",
    social: "Social",
    legal: "Note legali",
    rights: "Tutti i diritti riservati.",
    builtBy: "Sviluppato da",
    home: "Home",
    shop: "Shop",
    crowdfunding: "Crowdfunding",
    about: "Chi siamo",
    description:
      "Knots & Blades è l'universo centrale per romanzi, uscite future, supporto alle campagne ed esperienze da collezione.",
  },
};

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@KnotsandBlades",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>
    ),
  },
  {
    label: "Patreon",
    href: "https://www.patreon.com/cw/knotsandblades?utm_source=search&vanity=knotsandblades",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M14 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14ZM3 4h4v17H3V4Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/knotsnblades/",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/knotsandblades",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M10.7 8.2a4.7 4.7 0 0 1 8.8 2 3.2 3.2 0 1 1 .8 6.2H6.2A2.7 2.7 0 0 1 6 11a4.7 4.7 0 0 1 4.7-2.8Z" />
        <path d="M3.2 10.4h1v6.1h-1zM5 9.7h1v6.8H5zM6.8 9.2h1v7.3h-1zM8.6 8.9h1v7.6h-1z" />
      </svg>
    ),
  },
];

function LayoutContent({ children }: { children: ReactNode }) {
  const params = useParams();
  const lang = params.lang as string;
  const validLang = SUPPORTED_LANGS.includes(lang as SupportedLang) 
    ? (lang as SupportedLang) 
    : "en";
  const copy = footerCopy[validLang];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [params]);

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <header className="border-b border-zinc-800 bg-black/70 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-5">
          {/* Logo */}
          <Link href={`/${validLang}`} className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo/knots-and-blades-logo.png"
              alt="Knots & Blades logo"
              width={180}
              height={45}
              className="h-9 w-auto md:h-12"
              priority
            />
          </Link>

          {/* Botón hamburguesa - Solo en móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/10 md:hidden"
            aria-label="Menú"
          >
            <div className="relative h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "top-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "top-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>

          {/* Menú desktop */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link href={`/${validLang}/home`} className="text-sm hover:text-red-300">
              {copy.home}
            </Link>
            <Link href={`/${validLang}/shop`} className="text-sm hover:text-red-300">
              {copy.shop}
            </Link>
            <Link href={`/${validLang}/crowdfunding`} className="text-sm hover:text-red-300">
              {copy.crowdfunding}
            </Link>
            <Link href={`/${validLang}/about`} className="text-sm hover:text-red-300">
              {copy.about}
            </Link>
            <Suspense fallback={<div className="h-8 w-24 animate-pulse rounded-full bg-zinc-800" />}>
              <LanguageSwitcher lang={validLang} supportedLangs={SUPPORTED_LANGS} />
            </Suspense>
          </nav>

          {/* Menú móvil desplegable */}
          <div
            className={`fixed inset-0 top-[57px] z-40 bg-black/95 backdrop-blur-lg transition-transform duration-300 md:hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <nav className="flex flex-col items-center gap-6 pt-12">
              <Link href={`/${validLang}/home`} className="text-lg hover:text-red-300">
                {copy.home}
              </Link>
              <Link href={`/${validLang}/shop`} className="text-lg hover:text-red-300">
                {copy.shop}
              </Link>
              <Link href={`/${validLang}/crowdfunding`} className="text-lg hover:text-red-300">
                {copy.crowdfunding}
              </Link>
              <Link href={`/${validLang}/about`} className="text-lg hover:text-red-300">
                {copy.about}
              </Link>
              <div className="mt-4">
                <Suspense fallback={<div className="h-10 w-28 animate-pulse rounded-full bg-zinc-800" />}>
                  <LanguageSwitcher lang={validLang} supportedLangs={SUPPORTED_LANGS} />
                </Suspense>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="min-h-screen pt-0">{children}</main>

      <footer className="border-t border-white/10 bg-[#07080c]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <Link href={`/${validLang}`} className="inline-flex items-center gap-3">
                <Image
                  src="/images/logo/knots-and-blades-logo.png"
                  alt="Knots & Blades logo"
                  width={180}
                  height={45}
                  className="h-9 w-auto md:h-12"
                />
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
                {copy.description}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">
                {copy.navigation}
              </h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
                <Link href={`/${validLang}/home`} className="transition hover:text-red-300">
                  {copy.home}
                </Link>
                <Link href={`/${validLang}/shop`} className="transition hover:text-red-300">
                  {copy.shop}
                </Link>
                <Link
                  href={`/${validLang}/crowdfunding`}
                  className="transition hover:text-red-300"
                >
                  {copy.crowdfunding}
                </Link>
                <Link href={`/${validLang}/about`} className="transition hover:text-red-300">
                  {copy.about}
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">
                {copy.social}
              </h3>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/75">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">
                {copy.legal}
              </h3>
              <div className="mt-4 space-y-3 text-sm text-white/60">
                <p>© 2026 Knots & Blades. {copy.rights}</p>
                <p>
                  {copy.builtBy}{" "}
                  <a
                    href="https://eosconnecting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white transition hover:text-red-300"
                  >
                    Eos Connecting
                  </a>{" "}
                  — dev. Henry Esaá
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function LangLayout({ children }: { children: ReactNode }) {
  return <LayoutContent>{children}</LayoutContent>;
}