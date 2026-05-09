// app/[lang]/shop/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type SupportedLang } from "@/config/books";
import { getBookBySlug } from "../../../data/books";

type ShopBookPageProps = {
  params: Promise<{ lang: SupportedLang; slug: string }>;
};

const pageCopy: Record<
  SupportedLang,
  {
    backLink: string;
    summaryTitle: string;
    freeChapterCta: string;
    supportCta: string;
  }
> = {
  es: {
    backLink: "← Volver a la tienda",
    summaryTitle: "Descripción completa",
    freeChapterCta: "Get Chapter 1 for free",
    supportCta: "Support the saga",
  },
  en: {
    backLink: "← Back to shop",
    summaryTitle: "Full description",
    freeChapterCta: "Get Chapter 1 for free",
    supportCta: "Support the saga",
  },
  de: {
    backLink: "← Zurück zum Shop",
    summaryTitle: "Vollständige Beschreibung",
    freeChapterCta: "Get Chapter 1 for free",
    supportCta: "Support the saga",
  },
  it: {
    backLink: "← Torna allo shop",
    summaryTitle: "Descrizione completa",
    freeChapterCta: "Get Chapter 1 for free",
    supportCta: "Support the saga",
  },
};

function renderDescription(description: string) {
  const paragraphs = description.split("\n\n");

  return paragraphs.map((paragraph, index) => {
    const html = paragraph
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");

    return (
      <p
        key={index}
        className="mb-4 last:mb-0 text-[17px] leading-[1.9] text-[#cdd5e4]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  });
}

function renderTeaser(teaser?: string, label?: string) {
  const text = teaser ?? label ?? "";
  const html = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");

  return (
    <div 
      className="text-[17px] leading-[1.9] text-[#cdd5e4]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default async function ShopBookPage({ params }: ShopBookPageProps) {
  const { lang, slug } = await params;
  const copy = pageCopy[lang];
  const book = getBookBySlug(lang, slug);

  if (!book) notFound();

  // Teaser más extenso como en el HTML (solo para Kleithros o como fallback)
  const extendedTeaser = book.slug === "kleithros" ? (
    "Lukas wakes up in a bleak cell with his memory fragmented and his fate unclear. Opposite him stands Klaus, a stranger who insists Lukas is a murderer. What follows is a descent into terror, accusation, guilt, and psychological disintegration—framed as the opening doorway into Knots & Blades."
  ) : (book.teaser ?? book.label);

  return (
    <section
      className="min-h-screen text-[#f7f8fb]"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(212,69,69,.18), transparent 26%), linear-gradient(180deg, #090b10 0%, #0c1017 100%)",
      }}
    >
      <main className="mx-auto max-w-[1240px] px-5 py-7 pb-20">
        <Link
          href={`/${lang}/shop`}
          className="inline-flex text-sm font-medium text-zinc-400 transition hover:text-zinc-200"
        >
          {copy.backLink}
        </Link>

        <section className="mt-[22px] grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,.08)] bg-[linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015))] shadow-[0_24px_70px_rgba(0,0,0,.38)]">
            <div className="relative min-h-[950px] w-full">
              <Image
                src={book.kleithrosVerticalImage ?? book.image}
                alt={book.title}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain"
                style={{ objectPosition: "top center" }}
              />
            </div>
          </div>

          <article className="rounded-[28px] border border-[rgba(255,255,255,.08)] bg-[linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015))] p-[30px] shadow-[0_24px_70px_rgba(0,0,0,.38)]">
            <div className="mb-5 flex flex-wrap gap-2.5 text-[12px] uppercase tracking-[.18em] text-[#f0b4b4]">
              <span className="inline-flex min-h-[34px] items-center rounded-full border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.04)] px-3 font-bold text-[#dfe5f1]">
                Psychological thriller
              </span>
              <span className="inline-flex min-h-[34px] items-center rounded-full border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.04)] px-3 font-bold text-[#dfe5f1]">
                Prologue of the saga
              </span>
              <span className="inline-flex min-h-[34px] items-center rounded-full border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.04)] px-3 font-bold text-[#dfe5f1]">
                4 languages
              </span>
            </div>

            <h1 className="m-0 text-[clamp(40px,6vw,72px)] font-bold leading-[.95] tracking-[-.04em] text-zinc-50">
              {book.title}
            </h1>

            {/* Reseña corta debajo del título - NO TOCAR */}
            <div className="mt-3 max-w-[680px] text-[22px] leading-[1.35] text-[#d4dae7]">
              {book.label}
            </div>

            <div className="mt-[26px] grid items-center gap-5 rounded-[24px] border border-[rgba(212,69,69,.22)] bg-[rgba(212,69,69,.08)] p-[22px] sm:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-2 text-xs uppercase tracking-[.16em] text-[#ffbcbc]">
                  Current price
                </div>
                <div className="text-[56px] font-black tracking-[-.05em] text-zinc-50">
                  {book.price ?? "—"}{" "}
                  <small className="ml-2 text-lg font-normal text-[#a3abbb]">USD</small>
                </div>
                <div className="mt-2 text-sm font-bold text-[#8fd19d]">Ready for purchase</div>
              </div>

              <Link
                href="#"
                className="inline-flex min-h-[58px] items-center justify-center rounded-full bg-white px-[26px] font-black text-[#0b0d12] transition hover:bg-zinc-200"
              >
                Get {book.title} now
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={`/${lang}/chapter-1`}
                className="inline-flex min-h-[58px] items-center justify-center rounded-full border border-[rgba(255,255,255,.08)] bg-transparent px-[26px] font-black text-zinc-50 transition hover:border-zinc-600"
              >
                {copy.freeChapterCta}
              </Link>

              <Link
                href={`/${lang}/crowdfunding`}
                className="inline-flex min-h-[58px] items-center justify-center rounded-full border border-red-600/60 px-[26px] font-black text-red-300 transition hover:bg-red-900/40"
              >
                {copy.supportCta}
              </Link>
            </div>

            {/* TEASER - texto EXTENSO justo debajo de los botones (como en el HTML) */}
            <div className="mt-6">
              {renderTeaser(extendedTeaser, book.label)}
            </div>

            {/* CUADRÍCULA DE INFORMACIÓN - Languages, Format, Saga role, Tone */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-[20px] border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.025)] p-4">
                <div className="mb-2 text-xs uppercase tracking-[.16em] text-[#a3abbb]">Languages</div>
                <div className="text-[15px] font-bold text-[#f7f8fb]">EN / ES / DE / IT</div>
              </div>
              <div className="rounded-[20px] border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.025)] p-4">
                <div className="mb-2 text-xs uppercase tracking-[.16em] text-[#a3abbb]">Format</div>
                <div className="text-[15px] font-bold text-[#f7f8fb]">Digital edition</div>
              </div>
              <div className="rounded-[20px] border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.025)] p-4">
                <div className="mb-2 text-xs uppercase tracking-[.16em] text-[#a3abbb]">Saga role</div>
                <div className="text-[15px] font-bold text-[#f7f8fb]">Entry point</div>
              </div>
              <div className="rounded-[20px] border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.025)] p-4">
                <div className="mb-2 text-xs uppercase tracking-[.16em] text-[#a3abbb]">Tone</div>
                <div className="text-[15px] font-bold text-[#f7f8fb]">Dark and tense</div>
              </div>
            </div>
          </article>
        </section>

        {/* DESCRIPCIÓN COMPLETA - arriba de las 2 imágenes finales */}
        <section className="mt-7 rounded-[28px] border border-[rgba(255,255,255,.08)] bg-[linear-gradient(180deg,rgba(255,255,255,.025),rgba(255,255,255,.015))] p-7 shadow-[0_24px_70px_rgba(0,0,0,.38)] sm:p-8">
          <h2 className="mb-4 text-[28px] font-semibold text-zinc-100">
            {copy.summaryTitle}
          </h2>
          <div className="longcopy">
            {book.description ? (
              renderDescription(book.description)
            ) : (
              <p className="text-[17px] leading-[1.9] text-[#cdd5e4]">{book.label}</p>
            )}
          </div>
        </section>

        {/* LAS 2 IMÁGENES FINALES */}
        <section className="mt-7 grid gap-4 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[24px] border border-[rgba(255,255,255,.08)] bg-[#11141d]">
            <div className="relative h-[360px] w-full">
              <Image
                src={book.kleithrosVerticalImage ?? book.image}
                alt={`${book.title} image 1`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-[18px]">
              <h3 className="mb-2 text-[18px] font-semibold text-zinc-100">Main product visual</h3>
              <p className="m-0 text-sm leading-7 text-[#a3abbb]">
                The primary promotional image stays prominent to keep the product identity immediate and recognizable.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-[24px] border border-[rgba(255,255,255,.08)] bg-[#11141d]">
            <div className="relative h-[360px] w-full">
              <Image
                src={book.kleithrosExtraImage ?? book.image}
                alt={`${book.title} image 2`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-[18px]">
              <h3 className="mb-2 text-[18px] font-semibold text-zinc-100">Secondary banner crop</h3>
              <p className="m-0 text-sm leading-7 text-[#a3abbb]">
                A second visual treatment helps the page feel complete instead of ending at a single hero image.
              </p>
            </div>
          </article>
        </section>
      </main>
    </section>
  );
}