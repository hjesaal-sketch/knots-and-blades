//app/[lang]/thank-you/page.tsx

import Link from "next/link";
import { chapterOneLinks, type SupportedLang } from "@/config/books";

const copyByLang: Record<
  SupportedLang,
  { title: string; body: string; button: string }
> = {
  es: {
    title: "¡Gracias por unirte a la saga!",
    body: "Tu viaje por el mundo de Knots & Blades comienza ahora. Haz clic en el botón para descargar el Capítulo 1 de Kleithros en español.",
    button: "Descargar Capítulo 1 (ES)",
  },
  en: {
    title: "Welcome to the saga!",
    body: "Your journey through the world of Knots & Blades begins now. Click the button to download Chapter 1 of Kleithros in English.",
    button: "Download Chapter 1 (EN)",
  },
  de: {
    title: "Willkommen in der Saga!",
    body: "Deine Reise durch die Welt von Knots & Blades beginnt jetzt. Klicke auf den Button, um Kapitel 1 von Kleithros auf Deutsch herunterzuladen.",
    button: "Kapitel 1 herunterladen (DE)",
  },
  it: {
    title: "Benvenuto nella saga!",
    body: "Il tuo viaggio nel mondo di Knots & Blades inizia ora. Clicca sul pulsante per scaricare il Capitolo 1 di Kleithros in italiano.",
    button: "Scarica Capitolo 1 (IT)",
  },
};

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) {
  const { lang } = await params;
  const copy = copyByLang[lang];
  const downloadUrl = chapterOneLinks[lang];

  return (
    <section className="bg-gradient-to-b from-black via-[#05060a] to-black">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center">
        <p className="mb-3 text-xs tracking-[0.3em] uppercase text-zinc-500">
          Knots & Blades Saga
        </p>
        <h1 className="mb-4 text-3xl font-bold text-zinc-50 md:text-4xl">
          {copy.title}
        </h1>
        <p className="mb-8 max-w-xl text-sm text-zinc-300">{copy.body}</p>

        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 hover:bg-purple-500"
        >
          {copy.button}
        </a>

        <p className="mt-6 text-xs text-zinc-500">
          Si tienes problemas con la descarga, intenta abrir el enlace en una
          nueva pestaña.
        </p>

        <Link
          href={`/${lang}/shop`}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 hover:text-red-300"
        >
          Explorar la saga completa
        </Link>
      </div>
    </section>
  );
}