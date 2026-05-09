//app/[lang]/page.tsx

"use client";

import { use, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { SupportedLang } from "@/config/books";

type LandingPageProps = {
  params: Promise<{ lang: SupportedLang }>;
};

const copyByLang: Record<
  SupportedLang,
  { title: string; subtitle: string; cta: string; formTitle: string }
> = {
  es: {
    title: "Kleithros: Encarcelamiento y Redención",
    subtitle: "Comienza el viaje épico de verdad y descubrimiento.",
    cta: "Consigue tu Capítulo 1 gratis",
    formTitle: "Quiero recibir actualizaciones sobre la saga.",
  },
  en: {
    title: "Kleithros: Imprisonment and Redemption",
    subtitle: "Join the epic journey of truth and discovery.",
    cta: "Get your free Chapter 1",
    formTitle: "I want to receive saga updates.",
  },
  de: {
    title: "Kleithros: Gefangenschaft und Erlösung",
    subtitle: "Begleite die epische Reise von Wahrheit und Erkenntnis.",
    cta: "Hol dir Kapitel 1 kostenlos",
    formTitle: "Ich möchte Neuigkeiten zur Saga erhalten.",
  },
  it: {
    title: "Kleithros: Prigionia e Redenzione",
    subtitle: "Unisciti all’epico viaggio di verità e scoperta.",
    cta: "Ottieni il Capitolo 1 gratis",
    formTitle: "Voglio ricevere aggiornamenti sulla saga.",
  },
};

export default function LandingPage({ params }: LandingPageProps) {
  const { lang } = use(params);
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const trimmedName = name.trim();
      const trimmedEmail = email.trim();

      if (!trimmedEmail) {
        throw new Error("El correo es obligatorio.");
      }

      void trimmedName;
      void trimmedEmail;

      router.push(`/${lang}/thank-you`);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Ocurrió un error inesperado."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const copy = copyByLang[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#05060a] to-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-24 pt-16 lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-400">
            Knots & Blades Saga
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl">
            {copy.title}
          </h1>

          <p className="mb-8 max-w-xl text-lg text-zinc-300">
            {copy.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-red-700/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
              New dark fantasy universe
            </span>
          </div>
        </div>

        <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-2xl">
          <h2 className="mb-2 text-xl font-semibold text-zinc-50">
            {copy.cta}
          </h2>

          <p className="mb-6 text-sm text-zinc-400">{copy.formTitle}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-zinc-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-zinc-300" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-md border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@ejemplo.com"
                autoComplete="email"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:bg-purple-900"
            >
              {isSubmitting ? "Enviando..." : copy.cta}
            </button>

            {error ? <p className="mt-2 text-sm text-red-400">{error}</p> : null}

            <p className="mt-3 text-xs text-zinc-500">
              No hacemos spam. Podrás darte de baja en cualquier momento.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}