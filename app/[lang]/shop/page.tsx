//app/[lang]/shop/page.tsx
import Image from "next/image";
import Link from "next/link";
import { type SupportedLang } from "@/config/books";
import { getBooksByLang, getUpcomingBooksByLang } from "../../data/books";

type ShopPageProps = {
  params: Promise<{ lang: SupportedLang }>;
};

const shopCopy: Record<
  SupportedLang,
  {
    eyebrow: string;
    title: string;
    description: string;
    featuredLabel: string;
    featuredCta: string;
    secondaryCta: string;
    booksTitle: string;
    booksDescription: string;
    upcomingTitle: string;
    bookLabel: string;
    supportLink: string;
    detailsLink: string;
    priceLabel: string;
    inDevelopmentLabel: string;
  }
> = {
  es: {
    eyebrow: "Tienda",
    title: "Libros de Knots & Blades",
    description: "Explora las ediciones disponibles de la saga y accede a la página individual de cada libro.",
    featuredLabel: "Disponible ahora",
    featuredCta: "Ver Kleithros",
    secondaryCta: "Apoya la saga",
    booksTitle: "Disponible",
    booksDescription: "Descubre los detalles en la página dedicada de cada libro.",
    upcomingTitle: "Próximamente en Knots & Blades",
    bookLabel: "Libro",
    supportLink: "Apoya este lanzamiento →",
    detailsLink: "Ver detalles →",
    priceLabel: "Precio",
    inDevelopmentLabel: "En desarrollo",
  },
  en: {
    eyebrow: "Shop",
    title: "Knots & Blades Books",
    description: "Explore the available editions in the saga and access the individual page for each book.",
    featuredLabel: "Available now",
    featuredCta: "View Kleithros",
    secondaryCta: "Support the saga",
    booksTitle: "Available now",
    booksDescription: "Discover details on each book’s dedicated page.",
    upcomingTitle: "Coming soon in Knots & Blades",
    bookLabel: "Book",
    supportLink: "Support this release →",
    detailsLink: "View details →",
    priceLabel: "Price",
    inDevelopmentLabel: "In development",
  },
  de: {
    eyebrow: "Shop",
    title: "Knots & Blades Bücher",
    description: "Entdecke die verfügbaren Ausgaben der Saga und öffne die Einzelseite jedes Buches.",
    featuredLabel: "Jetzt verfügbar",
    featuredCta: "Kleithros ansehen",
    secondaryCta: "Unterstütze die Saga",
    booksTitle: "Verfügbar",
    booksDescription: "Entdecke Details auf der eigenen Seite jedes Buches.",
    upcomingTitle: "Bald verfügbar in Knots & Blades",
    bookLabel: "Buch",
    supportLink: "Diese Veröffentlichung unterstützen →",
    detailsLink: "Details ansehen →",
    priceLabel: "Preis",
    inDevelopmentLabel: "In Entwicklung",
  },
  it: {
    eyebrow: "Shop",
    title: "Libri di Knots & Blades",
    description: "Esplora le edizioni disponibili della saga e accedi alla pagina dedicata di ogni libro.",
    featuredLabel: "Disponibile ora",
    featuredCta: "Vedi Kleithros",
    secondaryCta: "Sostieni la saga",
    booksTitle: "Disponibile",
    booksDescription: "Scopri i dettagli nella pagina dedicata di ogni libro.",
    upcomingTitle: "In arrivo in Knots & Blades",
    bookLabel: "Libro",
    supportLink: "Sostieni questa uscita →",
    detailsLink: "Vedi dettagli →",
    priceLabel: "Prezzo",
    inDevelopmentLabel: "In sviluppo",
  },
};

export default async function ShopPage({ params }: ShopPageProps) {
  const { lang } = await params;
  const copy = shopCopy[lang];
  const books = getBooksByLang(lang);
  const upcomingBooks = getUpcomingBooksByLang(lang);

  const featuredBook = books.find((book) => book.slug === "kleithros");
  const availableBooks = books.filter((book) => book.slug === "kleithros");
  const unavailableBooks = [
    ...books.filter((book) =>
      ["dark-labyrinths", "whispers-of-chaos"].includes(book.slug)
    ),
    ...upcomingBooks.filter((book) => book.slug === "revelations"),
  ];

  return (
    <section className="bg-[#05060a]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-500">
          {copy.eyebrow}
        </p>

        <h1 className="mb-3 text-3xl font-bold text-zinc-50 sm:text-4xl">
          {copy.title}
        </h1>

        <p className="mb-10 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
          {copy.description}
        </p>

        {featuredBook ? (
          <div className="mb-14 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80">
            <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black md:min-h-0">
                <Image
                  src={featuredBook.image}
                  alt={featuredBook.title}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.16),transparent_30%)]" />
                <div className="absolute left-6 top-6 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  {copy.featuredLabel}
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-zinc-500">
                  {copy.bookLabel} {featuredBook.order}
                </p>

                <h2 className="mb-3 text-2xl font-bold text-zinc-50">
                  {featuredBook.title}
                </h2>

                <p className="mb-3 text-sm font-medium text-purple-300">
                  {featuredBook.label}
                </p>

                {featuredBook.price ? (
                  <p className="mb-4 text-sm text-zinc-300">
                    <span className="font-semibold text-zinc-100">{copy.priceLabel}:</span> {featuredBook.price}
                  </p>
                ) : null}

                {featuredBook.teaser ? (
                  <p className="mb-8 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                    {featuredBook.teaser}
                  </p>
                ) : null}

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${lang}/shop/${featuredBook.slug}`}
                    className="rounded-full bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-500"
                  >
                    {copy.featuredCta}
                  </Link>

                  <Link
                    href={`/${lang}/crowdfunding`}
                    className="rounded-full border border-red-600/60 px-6 py-2.5 text-sm font-semibold text-red-300 transition hover:bg-red-900/40"
                  >
                    {copy.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mb-14">
          <h2 className="mb-3 text-xl font-semibold text-zinc-100">
            {copy.booksTitle}
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-7 text-zinc-400">
            {copy.booksDescription}
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {availableBooks.slice(1).map((book) => (
              <article
                key={book.slug}
                className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4"
              >
                <div className="relative mb-4 h-56 w-full overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>

                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {copy.bookLabel} {book.order}
                </p>

                <h3 className="mb-2 text-lg font-semibold text-zinc-50">
                  {book.title}
                </h3>

                <p className="mb-2 text-sm text-purple-300">{book.label}</p>

                {book.price ? (
                  <p className="mb-3 text-sm text-zinc-300">
                    <span className="font-semibold text-zinc-100">{copy.priceLabel}:</span> {book.price}
                  </p>
                ) : null}

                <Link
                  href={`/${lang}/shop/${book.slug}`}
                  className="mt-auto text-sm font-semibold uppercase tracking-[0.18em] text-purple-300 transition hover:text-purple-200"
                >
                  {copy.detailsLink}
                </Link>
              </article>
            ))}
          </div>
        </div>

        <hr className="mb-10 border-zinc-800" />

        <h2 className="mb-4 text-xl font-semibold text-zinc-100">
          {copy.upcomingTitle}
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-2">
          {unavailableBooks.map((book) => (
            <div
              key={book.slug}
              className="flex min-w-[280px] flex-col rounded-xl border border-zinc-800 bg-black/60 p-4 md:min-w-0 md:flex-1"
            >
              <div className="relative mb-4 h-44 w-full overflow-hidden rounded-lg bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain opacity-90"
                />
              </div>
              <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                {copy.bookLabel} {book.order}
              </p>
              <h3 className="mb-2 text-sm font-semibold text-zinc-50">{book.title}</h3>
              <p className="mb-2 text-xs text-zinc-400">{book.label}</p>
              {book.slug === "dark-labyrinths" ? (
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                  {copy.inDevelopmentLabel}
                </p>
              ) : (
                <div className="mb-4" />
              )}
              <Link
                href={`/${lang}/crowdfunding`}
                className="mt-auto text-xs font-semibold uppercase tracking-[0.2em] text-red-300 transition hover:text-red-200"
              >
                {copy.supportLink}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}