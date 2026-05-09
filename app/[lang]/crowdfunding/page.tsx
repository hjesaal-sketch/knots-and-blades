//app/[lang]/crowdfunding/page.tsx
import Link from "next/link";
import type { SupportedLang } from "@/config/books";

type CrowdfundingPageProps = {
  params: Promise<{ lang: SupportedLang }>;
};

const pageCopy: Record<
  SupportedLang,
  {
    badge: string;
    heroTitle: string;
    heroText: string;
    supportCta: string;
    perksCta: string;
    goalLabel: string;
    goalValue: string;
    durationLabel: string;
    durationValue: string;
    booksLabel: string;
    booksValue: string;
    sectionStory: string;
    storyLead: string;
    sagaTitle: string;
    sagaIntro: string;
    books: string[];
    sagaBody: string;
    sectionFunding: string;
    fundingIntro: string;
    allocation: { label: string; value: string }[];
    rewardsTitle: string;
    rewardsIntro: string;
    rewards: string[];
    fallback: string;
    impactTitle: string;
    impactIntro: string;
    impactPoints: string[];
    riskTitle: string;
    riskText: string;
    helpTitle: string;
    helpText: string;
    planTitle: string;
    planText: string;
    planPoints: string[];
    finalTitle: string;
    finalText: string;
  }
> = {
  en: {
    badge: "Crowdfunding",
    heroTitle: "Support Knots & Blades",
    heroText:
      "Help bring this literary saga to life and become part of a story built around mystery, suspense, geopolitics, and the search for truth.",
    supportCta: "Support us",
    perksCta: "View perks",
    goalLabel: "Funding goal",
    goalValue: "30,000 USD",
    durationLabel: "Campaign duration",
    durationValue: "3 months",
    booksLabel: "Saga scope",
    booksValue: "4 books",
    sectionStory: "A literary journey awaits",
    storyLead:
      "Knots & Blades is more than a book series. It is a narrative universe designed to explore oppression, truth, power, consciousness, and the hidden forces shaping history.",
    sagaTitle: "About the saga",
    sagaIntro: "The saga consists of four books:",
    books: ["Kleithros", "Dark Labyrinths", "Whispers of Chaos", "Revelations"],
    sagaBody:
      "Each installment weaves suspense, action, and existential conflict through the story of Alexander Nasir Levy, who faces a tyrannical regime, his own internal demons, and the enigmatic Mr. Arthur Shearer.",
    sectionFunding: "What we need",
    fundingIntro:
      "To develop and complete this monumental saga, the campaign seeks 30,000 USD distributed across the following priorities:",
    allocation: [
      { label: "Development and editing of the books", value: "20,000 USD" },
      { label: "Cover design and layout", value: "5,000 USD" },
      { label: "Marketing and promotion", value: "5,000 USD" },
    ],
    rewardsTitle: "What you will get",
    rewardsIntro: "Supporters receive exclusive rewards tied to the campaign.",
    rewards: [
      "Early access and exclusive previews.",
      "Signed books and luxury editions.",
      "Online conferences with the author and creative team.",
      "Acknowledgment on the website and credits in physical books.",
      "Exclusive revelation of the identity behind Gregori H. Orlov.",
    ],
    fallback:
      "Even if the full goal is not reached, the funds raised will be used to ensure production of the next book in the saga.",
    impactTitle: "Why it matters",
    impactIntro:
      "Your contribution supports a project built around themes that go beyond entertainment.",
    impactPoints: [
      "The fight for freedom against oppression.",
      "The search for truth in a world of lies.",
      "The exploration of reality, time, and human consciousness.",
    ],
    riskTitle: "Risks and challenges",
    riskText:
      "The campaign acknowledges that independent literary production faces creative, editorial, and promotional challenges, but commits to regular updates and consistent work throughout the process.",
    helpTitle: "Other ways to help",
    helpText:
      "If you cannot contribute financially, you can still help by sharing the campaign, recommending it to friends, and following project updates on social media.",
    planTitle: "Promotion plan",
    planText: "During the three-month campaign, the project plans to support visibility with:",
    planPoints: [
      "Active promotion on social media.",
      "Collaborations with influencers related to the genre and themes of the saga.",
      "Constant updates to keep supporters engaged.",
    ],
    finalTitle: "Join the next chapter",
    finalText:
      "Help write the next chapter of Knots & Blades and support a saga destined to challenge imagination and question reality.",
  },
  es: {
    badge: "Crowdfunding",
    heroTitle: "Apoya a Knots & Blades",
    heroText:
      "Ayuda a dar vida a esta saga literaria y forma parte de una historia construida sobre misterio, suspenso, geopolítica y la búsqueda de la verdad.",
    supportCta: "Apóyanos",
    perksCta: "Ver recompensas",
    goalLabel: "Meta de recaudación",
    goalValue: "30.000 USD",
    durationLabel: "Duración de campaña",
    durationValue: "3 meses",
    booksLabel: "Alcance de la saga",
    booksValue: "4 libros",
    sectionStory: "Te espera un viaje literario",
    storyLead:
      "Knots & Blades es mucho más que una serie de libros. Es un universo narrativo diseñado para explorar opresión, verdad, poder, conciencia y las fuerzas ocultas que moldean la historia.",
    sagaTitle: "Sobre la saga",
    sagaIntro: "La saga está compuesta por cuatro libros:",
    books: ["Kleithros", "Dark Labyrinths", "Whispers of Chaos", "Revelations"],
    sagaBody:
      "Cada entrega entrelaza suspenso, acción y conflicto existencial a través de la historia de Alexander Nasir Levy, quien se enfrenta a un régimen tiránico, a sus propios demonios internos y al enigmático Mr. Arthur Shearer.",
    sectionFunding: "Qué necesitamos",
    fundingIntro:
      "Para desarrollar y completar esta saga monumental, la campaña busca 30.000 USD distribuidos en las siguientes prioridades:",
    allocation: [
      { label: "Desarrollo y edición de los libros", value: "20.000 USD" },
      { label: "Diseño de portadas y maquetación", value: "5.000 USD" },
      { label: "Marketing y promoción", value: "5.000 USD" },
    ],
    rewardsTitle: "Lo que recibirás",
    rewardsIntro: "Quienes apoyen la campaña obtendrán recompensas exclusivas.",
    rewards: [
      "Acceso anticipado y avances exclusivos.",
      "Libros firmados y ediciones de lujo.",
      "Conferencias online con el autor y el equipo creativo.",
      "Agradecimientos en la web y créditos en libros físicos.",
      "Revelación exclusiva de la identidad detrás de Gregori H. Orlov.",
    ],
    fallback:
      "Incluso si no se alcanza la meta completa, los fondos recaudados se usarán para asegurar la producción del próximo libro de la saga.",
    impactTitle: "Por qué importa",
    impactIntro:
      "Tu aporte impulsa un proyecto construido sobre temas que van más allá del entretenimiento.",
    impactPoints: [
      "La lucha por la libertad frente a la opresión.",
      "La búsqueda de la verdad en un mundo de mentiras.",
      "La exploración de la realidad, el tiempo y la conciencia humana.",
    ],
    riskTitle: "Riesgos y desafíos",
    riskText:
      "La campaña reconoce que una producción literaria independiente enfrenta retos creativos, editoriales y de promoción, pero se compromete a mantener actualizaciones regulares y trabajo constante durante todo el proceso.",
    helpTitle: "Otras formas de ayudar",
    helpText:
      "Si no puedes aportar dinero, también puedes ayudar compartiendo la campaña, recomendándola a otras personas y siguiendo las actualizaciones del proyecto en redes sociales.",
    planTitle: "Plan de promoción",
    planText: "Durante los tres meses de campaña, el proyecto planea sostener su visibilidad con:",
    planPoints: [
      "Promoción activa en redes sociales.",
      "Colaboraciones con influencers relacionados con el género y los temas de la saga.",
      "Actualizaciones constantes para mantener involucrados a los patrocinadores.",
    ],
    finalTitle: "Únete al próximo capítulo",
    finalText:
      "Ayuda a escribir el próximo capítulo de Knots & Blades y apoya una saga destinada a desafiar la imaginación y cuestionar la realidad.",
  },
  de: {
    badge: "Crowdfunding",
    heroTitle: "Unterstütze Knots & Blades",
    heroText:
      "Hilf dabei, diese literarische Saga zum Leben zu erwecken, und werde Teil einer Geschichte über Mysterium, Spannung, Geopolitik und die Suche nach Wahrheit.",
    supportCta: "Jetzt unterstützen",
    perksCta: "Belohnungen ansehen",
    goalLabel: "Finanzierungsziel",
    goalValue: "30.000 USD",
    durationLabel: "Kampagnendauer",
    durationValue: "3 Monate",
    booksLabel: "Umfang der Saga",
    booksValue: "4 Bücher",
    sectionStory: "Eine literarische Reise wartet",
    storyLead:
      "Knots & Blades ist weit mehr als eine Buchreihe. Es ist ein erzählerisches Universum über Unterdrückung, Wahrheit, Macht, Bewusstsein und die verborgenen Kräfte hinter der Geschichte.",
    sagaTitle: "Über die Saga",
    sagaIntro: "Die Saga besteht aus vier Büchern:",
    books: ["Kleithros", "Dark Labyrinths", "Whispers of Chaos", "Revelations"],
    sagaBody:
      "Jeder Band verbindet Spannung, Action und existentielle Konflikte in der Geschichte von Alexander Nasir Levy, der gegen ein tyrannisches Regime, seine inneren Dämonen und den rätselhaften Mr. Arthur Shearer kämpft.",
    sectionFunding: "Was wir brauchen",
    fundingIntro:
      "Um diese monumentale Saga zu entwickeln und abzuschließen, werden 30.000 USD für folgende Prioritäten benötigt:",
    allocation: [
      { label: "Entwicklung und Lektorat der Bücher", value: "20.000 USD" },
      { label: "Coverdesign und Layout", value: "5.000 USD" },
      { label: "Marketing und Promotion", value: "5.000 USD" },
    ],
    rewardsTitle: "Was du bekommst",
    rewardsIntro: "Unterstützer erhalten exklusive kampagnenbezogene Belohnungen.",
    rewards: [
      "Früher Zugang und exklusive Vorschauen.",
      "Signierte Bücher und Luxusausgaben.",
      "Online-Konferenzen mit Autor und Kreativteam.",
      "Danksagung auf der Website und Nennung in gedruckten Büchern.",
      "Exklusive Enthüllung der Identität hinter Gregori H. Orlov.",
    ],
    fallback:
      "Auch wenn das vollständige Ziel nicht erreicht wird, werden die gesammelten Mittel für die Produktion des nächsten Buches der Saga verwendet.",
    impactTitle: "Warum es wichtig ist",
    impactIntro:
      "Dein Beitrag unterstützt ein Projekt mit Themen, die über reine Unterhaltung hinausgehen.",
    impactPoints: [
      "Der Kampf für Freiheit gegen Unterdrückung.",
      "Die Suche nach Wahrheit in einer Welt voller Lügen.",
      "Die Erforschung von Realität, Zeit und menschlichem Bewusstsein.",
    ],
    riskTitle: "Risiken und Herausforderungen",
    riskText:
      "Die Kampagne erkennt an, dass unabhängige Literaturproduktion kreative, redaktionelle und werbliche Herausforderungen mit sich bringt, verspricht aber regelmäßige Updates und konsequente Arbeit im gesamten Prozess.",
    helpTitle: "Weitere Möglichkeiten zu helfen",
    helpText:
      "Wenn du nicht finanziell beitragen kannst, kannst du trotzdem helfen, indem du die Kampagne teilst, sie weiterempfiehlst und die Projektupdates in sozialen Netzwerken verfolgst.",
    planTitle: "Werbeplan",
    planText: "Während der dreimonatigen Kampagne soll die Sichtbarkeit unterstützt werden durch:",
    planPoints: [
      "Aktive Promotion in sozialen Netzwerken.",
      "Zusammenarbeit mit Influencern passend zu Genre und Themen der Saga.",
      "Kontinuierliche Updates, um Unterstützer eingebunden zu halten.",
    ],
    finalTitle: "Begleite das nächste Kapitel",
    finalText:
      "Hilf dabei, das nächste Kapitel von Knots & Blades zu schreiben, und unterstütze eine Saga, die Fantasie herausfordert und Realität hinterfragt.",
  },
  it: {
    badge: "Crowdfunding",
    heroTitle: "Sostieni Knots & Blades",
    heroText:
      "Aiuta a dare vita a questa saga letteraria e diventa parte di una storia costruita su mistero, suspense, geopolitica e ricerca della verità.",
    supportCta: "Sostienici",
    perksCta: "Vedi ricompense",
    goalLabel: "Obiettivo di raccolta",
    goalValue: "30.000 USD",
    durationLabel: "Durata della campagna",
    durationValue: "3 mesi",
    booksLabel: "Portata della saga",
    booksValue: "4 libri",
    sectionStory: "Ti aspetta un viaggio letterario",
    storyLead:
      "Knots & Blades è molto più di una serie di libri. È un universo narrativo pensato per esplorare oppressione, verità, potere, coscienza e le forze nascoste che modellano la storia.",
    sagaTitle: "Sulla saga",
    sagaIntro: "La saga è composta da quattro libri:",
    books: ["Kleithros", "Dark Labyrinths", "Whispers of Chaos", "Revelations"],
    sagaBody:
      "Ogni volume intreccia suspense, azione e conflitto esistenziale nella storia di Alexander Nasir Levy, alle prese con un regime tirannico, i propri demoni interiori e l'enigmatico Mr. Arthur Shearer.",
    sectionFunding: "Di cosa abbiamo bisogno",
    fundingIntro:
      "Per sviluppare e completare questa saga monumentale, la campagna punta a raccogliere 30.000 USD distribuiti nelle seguenti priorità:",
    allocation: [
      { label: "Sviluppo ed editing dei libri", value: "20.000 USD" },
      { label: "Design delle copertine e impaginazione", value: "5.000 USD" },
      { label: "Marketing e promozione", value: "5.000 USD" },
    ],
    rewardsTitle: "Cosa riceverai",
    rewardsIntro: "I sostenitori riceveranno ricompense esclusive legate alla campagna.",
    rewards: [
      "Accesso anticipato e anteprime esclusive.",
      "Libri firmati ed edizioni di lusso.",
      "Conferenze online con autore e team creativo.",
      "Ringraziamenti sul sito e crediti nei libri fisici.",
      "Rivelazione esclusiva dell'identità dietro Gregori H. Orlov.",
    ],
    fallback:
      "Anche se l'obiettivo completo non verrà raggiunto, i fondi raccolti saranno utilizzati per garantire la produzione del prossimo libro della saga.",
    impactTitle: "Perché conta",
    impactIntro:
      "Il tuo contributo sostiene un progetto fondato su temi che vanno oltre il semplice intrattenimento.",
    impactPoints: [
      "La lotta per la libertà contro l'oppressione.",
      "La ricerca della verità in un mondo di menzogne.",
      "L'esplorazione della realtà, del tempo e della coscienza umana.",
    ],
    riskTitle: "Rischi e sfide",
    riskText:
      "La campagna riconosce che una produzione letteraria indipendente affronta sfide creative, editoriali e promozionali, ma si impegna a fornire aggiornamenti regolari e lavoro costante durante tutto il processo.",
    helpTitle: "Altri modi per aiutare",
    helpText:
      "Se non puoi contribuire economicamente, puoi comunque aiutare condividendo la campagna, consigliandola ad altri e seguendo gli aggiornamenti del progetto sui social.",
    planTitle: "Piano di promozione",
    planText: "Durante i tre mesi di campagna, il progetto prevede di sostenere la visibilità con:",
    planPoints: [
      "Promozione attiva sui social media.",
      "Collaborazioni con influencer legati al genere e ai temi della saga.",
      "Aggiornamenti costanti per mantenere coinvolti i sostenitori.",
    ],
    finalTitle: "Unisciti al prossimo capitolo",
    finalText:
      "Aiuta a scrivere il prossimo capitolo di Knots & Blades e sostieni una saga destinata a sfidare l'immaginazione e mettere in discussione la realtà.",
  },
};

export default async function CrowdfundingPage({
  params,
}: CrowdfundingPageProps) {
  const { lang } = await params;
  const copy = pageCopy[lang];

  return (
    <div className="bg-[#05060a] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.22),transparent_45%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
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
                href={`/${lang}/perks`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-400/40 hover:text-red-200"
              >
                {copy.perksCta}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                {copy.goalLabel}
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">{copy.goalValue}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                {copy.durationLabel}
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                {copy.durationValue}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                {copy.booksLabel}
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">{copy.booksValue}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-red-300/80">
              {copy.sectionStory}
            </p>
            <p className="mt-5 text-base leading-8 text-white/72">{copy.storyLead}</p>

            <h2 className="mt-8 text-2xl font-semibold text-white">{copy.sagaTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{copy.sagaIntro}</p>

            <ul className="mt-5 space-y-3 text-sm text-white/82">
              {copy.books.map((book) => (
                <li
                  key={book}
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
                >
                  {book}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-7 text-white/68">{copy.sagaBody}</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-red-950/20 to-white/[0.02] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-red-300/80">
              {copy.sectionFunding}
            </p>
            <p className="mt-5 text-base leading-8 text-white/72">{copy.fundingIntro}</p>

            <div className="mt-8 space-y-4">
              {copy.allocation.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/25 px-5 py-4"
                >
                  <span className="text-sm text-white/72">{item.label}</span>
                  <span className="text-sm font-semibold text-red-200">{item.value}</span>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              {copy.rewardsTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{copy.rewardsIntro}</p>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/80">
              {copy.rewards.map((reward) => (
                <li key={reward} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-red-400" />
                  <span>{reward}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-2xl border border-red-400/15 bg-red-500/8 px-5 py-4 text-sm leading-7 text-red-100/85">
              {copy.fallback}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:py-20 lg:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-black/25 p-7">
            <h2 className="text-2xl font-semibold text-white">{copy.impactTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{copy.impactIntro}</p>

            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/80">
              {copy.impactPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-red-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/25 p-7">
            <h2 className="text-2xl font-semibold text-white">{copy.riskTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{copy.riskText}</p>

            <h3 className="mt-8 text-lg font-semibold text-white">{copy.helpTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">{copy.helpText}</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/25 p-7">
            <h2 className="text-2xl font-semibold text-white">{copy.planTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{copy.planText}</p>

            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/80">
              {copy.planPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-red-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-20">
        <p className="text-xs uppercase tracking-[0.28em] text-red-300/80">
          Knots & Blades
        </p>
        <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
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
            href={`/${lang}/perks`}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-400/40 hover:text-red-200"
          >
            {copy.perksCta}
          </Link>
        </div>
      </section>
    </div>
  );
}