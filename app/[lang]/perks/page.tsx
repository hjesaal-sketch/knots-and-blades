//app/[lang]/perks/page.tsx
import Link from "next/link";
import type { SupportedLang } from "@/config/books";
import PerkSection from "../../components/perks/perk-section";
import { getPerksByLang } from "../../data/perks";

type PerksPageProps = {
  params: Promise<{ lang: SupportedLang }>;
};

const pageCopy: Record<
  SupportedLang,
  {
    badge: string;
    heroTitle: string;
    heroText: string;
    supportCta: string;
    backCta: string;
    introTitle: string;
    introText: string;
    listTitle: string;
    listText: string;
    finalTitle: string;
    finalText: string;
  }
> = {
  en: {
    badge: "Exclusive perks",
    heroTitle: "Choose your reward",
    heroText:
      "Explore the support tiers created for Knots & Blades and find the perk that matches the way you want to back this saga.",
    supportCta: "Support us",
    backCta: "Back to crowdfunding",
    introTitle: "Support with purpose",
    introText:
      "Each perk is designed to give visibility, exclusivity, and a stronger sense of connection to the literary universe behind Knots & Blades.",
    listTitle: "Available perks",
    listText:
      "From entry-level support to premium signature tiers, each option offers a different visual presence and level of contribution.",
    finalTitle: "Be part of the saga",
    finalText:
      "Choose your perk, support the campaign, and help turn Knots & Blades into the literary experience it is meant to become.",
  },
  es: {
    badge: "Recompensas exclusivas",
    heroTitle: "Elige tu recompensa",
    heroText:
      "Explora los niveles de apoyo creados para Knots & Blades y encuentra el perk que mejor encaja con la forma en que quieres respaldar esta saga.",
    supportCta: "Apóyanos",
    backCta: "Volver al crowdfunding",
    introTitle: "Apoya con intención",
    introText:
      "Cada perk está diseñado para aportar visibilidad, exclusividad y una sensación más fuerte de vínculo con el universo literario de Knots & Blades.",
    listTitle: "Perks disponibles",
    listText:
      "Desde apoyos de entrada hasta tiers premium de firma, cada opción ofrece una presencia visual distinta y un nivel diferente de contribución.",
    finalTitle: "Forma parte de la saga",
    finalText:
      "Elige tu perk, apoya la campaña y ayuda a convertir Knots & Blades en la experiencia literaria que está destinada a ser.",
  },
  de: {
    badge: "Exklusive Belohnungen",
    heroTitle: "Wähle deine Belohnung",
    heroText:
      "Entdecke die Unterstützungsstufen für Knots & Blades und finde den Perk, der am besten dazu passt, wie du diese Saga unterstützen möchtest.",
    supportCta: "Jetzt unterstützen",
    backCta: "Zurück zum Crowdfunding",
    introTitle: "Mit Bedeutung unterstützen",
    introText:
      "Jeder Perk wurde so gestaltet, dass er Sichtbarkeit, Exklusivität und eine stärkere Verbindung zum literarischen Universum von Knots & Blades bietet.",
    listTitle: "Verfügbare Perks",
    listText:
      "Von Einstiegsoptionen bis zu exklusiven Premium-Tiers bietet jede Wahl eine eigene visuelle Präsenz und ein anderes Unterstützungsniveau.",
    finalTitle: "Werde Teil der Saga",
    finalText:
      "Wähle deinen Perk, unterstütze die Kampagne und hilf dabei, Knots & Blades zu dem literarischen Erlebnis zu machen, das es sein soll.",
  },
  it: {
    badge: "Ricompense esclusive",
    heroTitle: "Scegli la tua ricompensa",
    heroText:
      "Esplora i livelli di supporto creati per Knots & Blades e trova il perk che meglio rappresenta il tuo modo di sostenere questa saga.",
    supportCta: "Sostienici",
    backCta: "Torna al crowdfunding",
    introTitle: "Sostieni con intenzione",
    introText:
      "Ogni perk è pensato per offrire visibilità, esclusività e un legame più forte con l'universo letterario di Knots & Blades.",
    listTitle: "Perk disponibili",
    listText:
      "Dai livelli iniziali ai tier premium esclusivi, ogni opzione offre una presenza visiva diversa e un diverso livello di contributo.",
    finalTitle: "Fai parte della saga",
    finalText:
      "Scegli il tuo perk, sostieni la campagna e aiuta Knots & Blades a diventare l'esperienza letteraria che è destinata a essere.",
  },
};

export default async function PerksPage({ params }: PerksPageProps) {
  const { lang } = await params;
  const copy = pageCopy[lang];
  const perks = getPerksByLang(lang);

  return (
    <div className="bg-[#05060a] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.22),transparent_45%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-200">
            {copy.badge}
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {copy.heroTitle}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            {copy.heroText}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.paypal.com/ncp/payment/VS9UW2Z3ANBCS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              {copy.supportCta}
            </a>

            <Link
              href={`/${lang}/crowdfunding`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-400/40 hover:text-red-200"
            >
              {copy.backCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-red-300/80">
              {copy.introTitle}
            </p>
            <p className="mt-5 text-base leading-8 text-white/72">{copy.introText}</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-red-950/20 to-white/[0.02] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-red-300/80">
              {copy.listTitle}
            </p>
            <p className="mt-5 text-base leading-8 text-white/72">{copy.listText}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:pb-20">
        <div className="space-y-8">
          {perks.map((perk) => (
            <PerkSection key={perk.slug} perk={perk} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-20">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {copy.finalTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/68">
            {copy.finalText}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.paypal.com/ncp/payment/VS9UW2Z3ANBCS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              {copy.supportCta}
            </a>

            <Link
              href={`/${lang}/crowdfunding`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-400/40 hover:text-red-200"
            >
              {copy.backCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}