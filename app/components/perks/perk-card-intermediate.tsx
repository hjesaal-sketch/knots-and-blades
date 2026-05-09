//app/components/perks/perk-card-intermediate.tsx
import Link from "next/link";
import type { Perk } from "../../lib/perks";

type PerkCardIntermediateProps = {
  perk: Perk;
};

export default function PerkCardIntermediate({
  perk,
}: PerkCardIntermediateProps) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#100d13_0%,#19131e_50%,#0c0f17_100%)] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="grid min-h-[520px] md:grid-cols-[.94fr_1.06fr]">
        <div className="order-1 flex items-center justify-center p-5 md:p-12">
          <div className="w-full max-w-[500px]">
            <div className="relative grid place-items-center overflow-hidden rounded-[34px] border border-[#d6b36a]/20 bg-[radial-gradient(circle_at_50%_50%,rgba(214,179,106,.11),transparent_32%),linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.02))] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.03),0_30px_80px_rgba(0,0,0,.45)] md:aspect-[1.25/1] md:p-10">
              <div className="absolute inset-[18px] rounded-[24px] border border-[#d6b36a]/15" />

              <div className="relative w-full max-w-[320px] overflow-hidden rounded-[28px] border border-white/12 shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
                <img
                  src={perk.image}
                  alt={perk.name}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="order-2 flex flex-col justify-center gap-5 px-6 py-8 md:px-12 md:py-14">
          <div className="text-[0.78rem] uppercase tracking-[0.22em] text-white/55">
            Intermediate Perk
          </div>

          <div>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              {perk.name}
            </h2>
            <p className="mt-3 text-xl font-bold text-[#d6b36a]">{perk.price}</p>
          </div>

          <p className="max-w-[48ch] text-sm leading-7 text-white/68 md:text-base">
            {perk.description}
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
              Tier intermedio
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
              Mejor presencia visual
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
              Hero con más aire
            </span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={perk.ctaHref ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(180deg,#9a2636,#6c1723)] px-5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {perk.ctaLabel ?? "Unlock this perk"}
            </Link>

            <Link
              href={perk.slug}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore the saga
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}