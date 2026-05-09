// app/[lang]/home/page.tsx
import Link from "next/link";
import { type SupportedLang } from "@/config/books";

type HomePageProps = {
  params: Promise<{
    lang: SupportedLang;
  }>;
};

const copyByLang: Record<
  SupportedLang,
  {
    banner: string;
    heroTitle: string;
    heroDescription: string;
    shop: string;
    crowdfunding: string;
    chapterOne: string;
    exploreTitle: string;
    exploreDescription: string;
    featureLabel: string;
    featureTitle: string;
    featureDescription: string;
    viewFullShop: string;
    crowdfundingLabel: string;
    crowdfundingTitle: string;
    crowdfundingDescription: string;
    backTheProject: string;
    merchLabel: string;
    merchTitle: string;
    merchDescription: string;
    exploreMerch: string;
    audioTitle: string;
    audioDescription: string;
    listenNow: string;
    sagaBegins: string;
    sagaTitle: string;
    sagaDescription: string;
    enterShop: string;
    readChapterOne: string;
    experienceBlocks: Array<{
      title: string;
      description: string;
      href: string;
      cta: string;
    }>;
    featuredBooks: Array<{
      title: string;
      description: string;
      href: string;
      badge: string;
      price: string;
      cta: string;
      image: string;
      imageAlt: string;
    }>;
  }
> = {
  en: {
    banner: "Discover epic tales, enjoy exclusive discounts!",
    heroTitle: "Knots & Blades",
    heroDescription: "Join the epic journey of truth and discovery.",
    shop: "Shop",
    crowdfunding: "Crowdfunding",
    chapterOne: "Get Chapter 1",
    exploreTitle: "Explore the world of Knots & Blades",
    exploreDescription:
      "Dive into thrilling narratives of light and darkness.",
    featureLabel: "Featured books",
    featureTitle: "Discover the Knots & Blades book collection",
    featureDescription:
      "Explore current and upcoming titles from the saga.",
    viewFullShop: "View full shop",
    crowdfundingLabel: "Crowdfunding",
    crowdfundingTitle: "Support and Explore Now",
    crowdfundingDescription:
      "Help bring the Knots & Blades universe to life and support future releases.",
    backTheProject: "Back the project",
    merchLabel: "Merchandise",
    merchTitle: "Collect pieces inspired by the saga",
    merchDescription:
      "Discover visual artifacts and collectible items from the Knots & Blades universe.",
    exploreMerch: "Explore merch",
    audioTitle: "Kleithros — Hear the buzz about the Knots & Blades Prologue!",
    audioDescription:
      "Listen to the featured SoundCloud audio experience tied to the saga.",
    listenNow: "Listen now",
    sagaBegins: "The saga begins here",
    sagaTitle: "Join Alex in a thrilling literary adventure.",
    sagaDescription:
      "Enter the universe of Knots & Blades and continue the journey through books, audio, and future releases.",
    enterShop: "Enter the shop",
    readChapterOne: "Read chapter one",
    experienceBlocks: [
      {
        title: "Book Store",
        description:
          "Discover books and products from the Knots & Blades universe.",
        href: "/shop",
        cta: "Shop",
      },
      {
        title: "Crowdfunding",
        description:
          "Support and explore the next stage of the Knots & Blades saga.",
        href: "/crowdfunding",
        cta: "Fuel K&B",
      },
      {
        title: "About",
        description:
          "Learn more about the story, the universe, and the vision behind Knots & Blades.",
        href: "/about",
        cta: "About",
      },
    ],
    featuredBooks: [
      {
        title: "Kleithros",
        description:
          "The published release currently featured in the Knots & Blades universe.",
        href: "/shop",
        badge: "Available now",
        price: "$4.99",
        cta: "View",
        image: "/images/books/kleithros.png",
        imageAlt: "Kleithros featured book",
      },
      {
        title: "Dark Labyrinths",
        description:
          "A future title expanding the scale and conflicts of the saga.",
        href: "/shop",
        badge: "In development",
        price: "Coming soon",
        cta: "View",
        image: "/images/books/dark-labyrinths.png",
        imageAlt: "Dark Labyrinths featured book",
      },
      {
        title: "Whispers of Chaos",
        description:
          "An upcoming installment that pushes the universe deeper into chaos.",
        href: "/shop",
        badge: "Coming soon",
        price: "TBA",
        cta: "View",
        image: "/images/books/whispers-of-chaos.png",
        imageAlt: "Whispers of Chaos featured book",
      },
      {
        title: "Revelations",
        description:
          "A forthcoming title where buried truths begin to demand their price.",
        href: "/shop",
        badge: "Coming soon",
        price: "TBA",
        cta: "View",
        image: "/images/books/revelations.png",
        imageAlt: "Revelations featured book",
      },
    ],
  },

  es: {
    banner: "Descubre relatos épicos y disfruta descuentos exclusivos.",
    heroTitle: "Knots & Blades",
    heroDescription:
      "Únete a la épica travesía de la verdad y el descubrimiento.",
    shop: "Tienda",
    crowdfunding: "Crowdfunding",
    chapterOne: "Obtén el capítulo 1",
    exploreTitle: "Explora el mundo de Knots & Blades",
    exploreDescription:
      "Sumérgete en narrativas emocionantes de luz y oscuridad.",
    featureLabel: "Libros destacados",
    featureTitle: "Descubre la colección de libros de Knots & Blades",
    featureDescription:
      "Explora títulos actuales y próximos lanzamientos de la saga.",
    viewFullShop: "Ver tienda completa",
    crowdfundingLabel: "Crowdfunding",
    crowdfundingTitle: "Apoya y explora ahora",
    crowdfundingDescription:
      "Ayuda a dar vida al universo de Knots & Blades y apoya futuros lanzamientos.",
    backTheProject: "Apoyar el proyecto",
    merchLabel: "Merchandise",
    merchTitle: "Colecciona piezas inspiradas en la saga",
    merchDescription:
      "Descubre artefactos visuales y artículos coleccionables del universo Knots & Blades.",
    exploreMerch: "Explorar merch",
    audioTitle:
      "Kleithros — ¡Escucha el ruido alrededor del prólogo de Knots & Blades!",
    audioDescription:
      "Escucha la experiencia de audio destacada en SoundCloud ligada a la saga.",
    listenNow: "Escuchar ahora",
    sagaBegins: "La saga comienza aquí",
    sagaTitle: "Únete a Alex en una emocionante aventura literaria.",
    sagaDescription:
      "Entra al universo de Knots & Blades y continúa el viaje a través de libros, audio y futuros lanzamientos.",
    enterShop: "Entrar a la tienda",
    readChapterOne: "Leer capítulo uno",
    experienceBlocks: [
      {
        title: "Book Store",
        description:
          "Descubre libros y productos del universo Knots & Blades.",
        href: "/shop",
        cta: "Tienda",
      },
      {
        title: "Crowdfunding",
        description:
          "Apoya y explora la próxima etapa de la saga Knots & Blades.",
        href: "/crowdfunding",
        cta: "Fuel K&B",
      },
      {
        title: "About",
        description:
          "Conoce más sobre la historia, el universo y la visión detrás de Knots & Blades.",
        href: "/about",
        cta: "About",
      },
    ],
    featuredBooks: [
      {
        title: "Kleithros",
        description:
          "La entrega publicada que actualmente encabeza el universo de Knots & Blades.",
        href: "/shop",
        badge: "Disponible ahora",
        price: "$4.99",
        cta: "Ver",
        image: "/images/books/kleithros.png",
        imageAlt: "Libro destacado Kleithros",
      },
      {
        title: "Dark Labyrinths",
        description:
          "Un próximo título que expande la escala y los conflictos de la saga.",
        href: "/shop",
        badge: "En desarrollo",
        price: "Próximamente",
        cta: "Ver",
        image: "/images/books/dark-labyrinths.png",
        imageAlt: "Libro destacado Dark Labyrinths",
      },
      {
        title: "Whispers of Chaos",
        description:
          "Una próxima entrega que lleva el universo más profundamente al caos.",
        href: "/shop",
        badge: "Próximamente",
        price: "Por definir",
        cta: "Ver",
        image: "/images/books/whispers-of-chaos.png",
        imageAlt: "Libro destacado Whispers of Chaos",
      },
      {
        title: "Revelations",
        description:
          "Un próximo título donde las verdades enterradas empiezan a exigir su precio.",
        href: "/shop",
        badge: "Próximamente",
        price: "Por definir",
        cta: "Ver",
        image: "/images/books/revelations.png",
        imageAlt: "Libro destacado Revelations",
      },
    ],
  },

  de: {
    banner: "Entdecke epische Geschichten und genieße exklusive Rabatte.",
    heroTitle: "Knots & Blades",
    heroDescription:
      "Begleite Alex auf einer spannenden Reise durch Geopolitik und uralte Geheimnisse.",
    shop: "Shop",
    crowdfunding: "Crowdfunding",
    chapterOne: "Kapitel 1 holen",
    exploreTitle: "Erkunde die Welt von Knots & Blades",
    exploreDescription:
      "Tauche ein in packende Erzählungen von Licht und Dunkelheit.",
    featureLabel: "Ausgewählte Bücher",
    featureTitle: "Entdecke die Buchsammlung von Knots & Blades",
    featureDescription: "Erkunde aktuelle und kommende Titel der Saga.",
    viewFullShop: "Gesamten Shop ansehen",
    crowdfundingLabel: "Crowdfunding",
    crowdfundingTitle: "Jetzt unterstützen und entdecken",
    crowdfundingDescription:
      "Hilf dabei, das Universum von Knots & Blades zum Leben zu erwecken und unterstütze zukünftige Veröffentlichungen.",
    backTheProject: "Projekt unterstützen",
    merchLabel: "Merchandise",
    merchTitle: "Sammle von der Saga inspirierte Stücke",
    merchDescription:
      "Entdecke visuelle Artefakte und Sammlerstücke aus dem Knots & Blades-Universum.",
    exploreMerch: "Merch entdecken",
    audioTitle:
      "Kleithros — Höre das Echo rund um den Prolog von Knots & Blades!",
    audioDescription:
      "Höre dir das hervorgehobene SoundCloud-Audioerlebnis zur Saga an.",
    listenNow: "Jetzt anhören",
    sagaBegins: "Die Saga beginnt hier",
    sagaTitle: "Begleite Alex in einem spannenden literarischen Abenteuer.",
    sagaDescription:
      "Betritt das Universum von Knots & Blades und setze die Reise durch Bücher, Audio und kommende Veröffentlichungen fort.",
    enterShop: "Zum Shop",
    readChapterOne: "Kapitel eins lesen",
    experienceBlocks: [
      {
        title: "Book Store",
        description:
          "Entdecke Bücher und Produkte aus dem Knots & Blades-Universum.",
        href: "/shop",
        cta: "Shop",
      },
      {
        title: "Crowdfunding",
        description:
          "Unterstütze und entdecke die nächste Phase der Knots & Blades-Saga.",
        href: "/crowdfunding",
        cta: "Fuel K&B",
      },
      {
        title: "About",
        description:
          "Erfahre mehr über die Geschichte, das Universum und die Vision hinter Knots & Blades.",
        href: "/about",
        cta: "About",
      },
    ],
    featuredBooks: [
      {
        title: "Kleithros",
        description:
          "Die veröffentlichte Ausgabe, die derzeit im Zentrum des Knots & Blades-Universums steht.",
        href: "/shop",
        badge: "Jetzt verfügbar",
        price: "$4.99",
        cta: "Ansehen",
        image: "/images/books/kleithros.png",
        imageAlt: "Vorgestelltes Buch Kleithros",
      },
      {
        title: "Dark Labyrinths",
        description:
          "Ein kommender Titel, der die Größe und Konflikte der Saga erweitert.",
        href: "/shop",
        badge: "In Entwicklung",
        price: "Bald verfügbar",
        cta: "Ansehen",
        image: "/images/books/dark-labyrinths.png",
        imageAlt: "Vorgestelltes Buch Dark Labyrinths",
      },
      {
        title: "Whispers of Chaos",
        description:
          "Ein kommender Band, der das Universum tiefer ins Chaos treibt.",
        href: "/shop",
        badge: "Bald verfügbar",
        price: "TBA",
        cta: "Ansehen",
        image: "/images/books/whispers-of-chaos.png",
        imageAlt: "Vorgestelltes Buch Whispers of Chaos",
      },
      {
        title: "Revelations",
        description:
          "Ein kommender Titel, in dem verborgene Wahrheiten ihren Preis fordern.",
        href: "/shop",
        badge: "Bald verfügbar",
        price: "TBA",
        cta: "Ansehen",
        image: "/images/books/revelations.png",
        imageAlt: "Vorgestelltes Buch Revelations",
      },
    ],
  },

  it: {
    banner: "Scopri racconti epici e approfitta di sconti esclusivi.",
    heroTitle: "Knots & Blades",
    heroDescription:
      "Unisciti al viaggio epico della verità e della scoperta.",
    shop: "Shop",
    crowdfunding: "Crowdfunding",
    chapterOne: "Ottieni il capitolo 1",
    exploreTitle: "Esplora il mondo di Knots & Blades",
    exploreDescription:
      "Immergiti in narrazioni avvincenti di luce e oscurità.",
    featureLabel: "Libri in evidenza",
    featureTitle: "Scopri la collezione di libri di Knots & Blades",
    featureDescription:
      "Esplora i titoli attuali e le prossime uscite della saga.",
    viewFullShop: "Vedi lo shop completo",
    crowdfundingLabel: "Crowdfunding",
    crowdfundingTitle: "Supporta ed esplora ora",
    crowdfundingDescription:
      "Aiuta a dare vita all’universo di Knots & Blades e sostieni le future uscite.",
    backTheProject: "Sostieni il progetto",
    merchLabel: "Merchandise",
    merchTitle: "Colleziona pezzi ispirati alla saga",
    merchDescription:
      "Scopri artefatti visivi e articoli da collezione dell’universo di Knots & Blades.",
    exploreMerch: "Esplora merch",
    audioTitle:
      "Kleithros — Ascolta l’eco attorno al prologo di Knots & Blades!",
    audioDescription:
      "Ascolta l’esperienza audio in evidenza su SoundCloud legata alla saga.",
    listenNow: "Ascolta ora",
    sagaBegins: "La saga inizia qui",
    sagaTitle: "Unisciti ad Alex in un’emozionante avventura letteraria.",
    sagaDescription:
      "Entra nell’universo di Knots & Blades e continua il viaggio tra libri, audio e future uscite.",
    enterShop: "Entra nello shop",
    readChapterOne: "Leggi il capitolo uno",
    experienceBlocks: [
      {
        title: "Book Store",
        description:
          "Scopri libri e prodotti dell’universo Knots & Blades.",
        href: "/shop",
        cta: "Shop",
      },
      {
        title: "Crowdfunding",
        description:
          "Supporta ed esplora la prossima fase della saga di Knots & Blades.",
        href: "/crowdfunding",
        cta: "Fuel K&B",
      },
      {
        title: "About",
        description:
          "Scopri di più sulla storia, sull’universo e sulla visione dietro Knots & Blades.",
        href: "/about",
        cta: "About",
      },
    ],
    featuredBooks: [
      {
        title: "Kleithros",
        description:
          "L’uscita pubblicata che attualmente guida l’universo di Knots & Blades.",
        href: "/shop",
        badge: "Disponibile ora",
        price: "$4.99",
        cta: "Vedi",
        image: "/images/books/kleithros.png",
        imageAlt: "Libro in evidenza Kleithros",
      },
      {
        title: "Dark Labyrinths",
        description:
          "Un prossimo titolo che amplia la scala e i conflitti della saga.",
        href: "/shop",
        badge: "In sviluppo",
        price: "Prossimamente",
        cta: "Vedi",
        image: "/images/books/dark-labyrinths.png",
        imageAlt: "Libro in evidenza Dark Labyrinths",
      },
      {
        title: "Whispers of Chaos",
        description:
          "Un prossimo capitolo che porta l’universo più a fondo nel caos.",
        href: "/shop",
        badge: "Prossimamente",
        price: "TBA",
        cta: "Vedi",
        image: "/images/books/whispers-of-chaos.png",
        imageAlt: "Libro in evidenza Whispers of Chaos",
      },
      {
        title: "Revelations",
        description:
          "Un prossimo titolo in cui le verità sepolte iniziano a reclamare il loro prezzo.",
        href: "/shop",
        badge: "Prossimamente",
        price: "TBA",
        cta: "Vedi",
        image: "/images/books/revelations.png",
        imageAlt: "Libro in evidenza Revelations",
      },
    ],
  },
};

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const copy = copyByLang[lang];

  return (
    <main className="min-h-screen bg-[#0a1014] text-white">
      <section className="sticky top-0 z-40 border-b border-white/10 bg-[#1a1a1a]/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3 text-center text-sm font-semibold text-white">
          {copy.banner}
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/videos/3015505/free-video-3015505.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          >
            <source
              src="https://videos.pexels.com/video-files/3015505/3015505-hd_1280_720_24fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,7,7,0.35),transparent_35%),linear-gradient(to_bottom,rgba(10,16,20,0.25),rgba(10,16,20,0.82))]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:py-28 lg:min-h-[705px] lg:justify-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {copy.heroTitle}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              {copy.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${lang}/shop`}
                className="inline-flex items-center justify-center rounded-full bg-[#37474F] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#455a64]"
              >
                {copy.shop}
              </Link>

              <Link
                href={`/${lang}/crowdfunding`}
                className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {copy.crowdfunding}
              </Link>

              <Link
                href={`/${lang}`}
                className="inline-flex items-center justify-center rounded-full border border-[#f50526] bg-[#780707] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#5e0505]"
              >
                {copy.chapterOne}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.exploreTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75">
            {copy.exploreDescription}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {copy.experienceBlocks.map((block) => (
            <article
              key={block.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                {block.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                {block.description}
              </p>
              <Link
                href={`/${lang}${block.href}`}
                className="mt-8 inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {block.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                {copy.featureLabel}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {copy.featureTitle}
              </h2>
              <p className="mt-4 text-white/70">{copy.featureDescription}</p>
            </div>

            <Link
              href={`/${lang}/shop`}
              className="inline-flex items-center text-sm font-semibold text-white/75 transition hover:text-white"
            >
              {copy.viewFullShop} →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {copy.featuredBooks.map((book) => (
              <article
                key={book.title}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#161616]">
                  <img
                    src={book.image}
                    alt={book.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                      {book.badge}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-lg font-semibold leading-tight sm:text-xl">
                      {book.title}
                    </h3>
                  </div>
                </div>

                <div className="flex h-full flex-col p-5">
                  <p className="text-sm leading-7 text-white/70">
                    {book.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-white">
                      {book.price}
                    </span>
                    <Link
                      href={`/${lang}${book.href}`}
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                      {book.cta}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden border-y border-white/10 bg-black">
        <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[640px]">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/videos/3015505/free-video-3015505.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
          >
            <source
              src="https://videos.pexels.com/video-files/3015505/3015505-hd_1280_720_24fps.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.55))]" />

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Unravel the Saga of Knots & Blades
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                Join Alex on a thrilling journey through geopolitics and ancient secrets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] border border-red-500/20 bg-[linear-gradient(135deg,rgba(120,7,7,0.55),rgba(10,16,20,0.95))] p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-red-200/80">
              {copy.crowdfundingLabel}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {copy.crowdfundingTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-white/78">
              {copy.crowdfundingDescription}
            </p>
            <Link
              href={`/${lang}/crowdfunding`}
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              {copy.backTheProject}
            </Link>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">
              {copy.merchLabel}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              {copy.merchTitle}
            </h2>
            <p className="mt-4 text-white/68">{copy.merchDescription}</p>
            <Link
              href={`/${lang}/shop`}
              className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {copy.exploreMerch}
            </Link>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              {copy.audioTitle}
            </h2>
            <p className="mt-4 text-white/68">{copy.audioDescription}</p>

            <a
              href="https://soundcloud.com/knotsbladeslies/kleithros-confinement-and"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {copy.listenNow}
            </a>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-black">
            <iframe
              title="Knots & Blades SoundCloud"
              width="100%"
              height="324"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              className="block w-full"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1994000739&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:py-24">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">
            {copy.sagaBegins}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {copy.sagaTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
            {copy.sagaDescription}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`/${lang}/shop`}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              {copy.enterShop}
            </Link>
            <Link
              href={`/${lang}`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {copy.readChapterOne}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}