//app/components/perks/perk-card-exclusive.tsx
import Link from "next/link";
import type { Perk } from "../../lib/perks";

type PerkCardExclusiveProps = {
  perk: Perk;
};

export default function PerkCardExclusive({
  perk,
}: PerkCardExclusiveProps) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-white/10 bg-[#090c12] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="relative">
        <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[1224/848]">
          <img
            src={perk.image}
            alt={perk.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.1)_0%,rgba(5,6,10,0.45)_55%,rgba(5,6,10,0.88)_100%)]" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl rounded-[24px] border border-white/10 bg-black/45 p-5 backdrop-blur-md md:p-8">
              <div className="text-[0.78rem] uppercase tracking-[0.22em] text-white/55">
                Exclusive Signature Tier
              </div>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
                {perk.name}
              </h2>

              <p className="mt-3 text-xl font-bold text-[#d6b36a]">{perk.price}</p>

              <p className="mt-4 max-w-[60ch] text-sm leading-7 text-white/75 md:text-base">
                {perk.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
                  Hero premium
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
                  Exclusivo
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
                  Máxima jerarquía visual
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={perk.ctaHref ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(180deg,#9a2636,#6c1723)] px-5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {perk.ctaLabel ?? "Get it now"}
                </Link>

                <Link
                  href={perk.slug}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View full details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}