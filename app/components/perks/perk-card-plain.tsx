//app/components/perks/perk-card-plain.tsx
import Link from "next/link";
import type { Perk } from "../../lib/perks";

type PerkCardPlainProps = {
  perk: Perk;
};

export default function PerkCardPlain({ perk }: PerkCardPlainProps) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#0b0d14_0%,#121521_55%,#0b0d14_100%)] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="grid min-h-[520px] md:grid-cols-[1.05fr_.95fr]">
        <div className="order-2 flex flex-col justify-center gap-5 px-6 py-8 md:order-1 md:px-12 md:py-14">
          <div className="text-[0.78rem] uppercase tracking-[0.22em] text-white/55">
            Plain Perk
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
              Ideal para entry tier
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
              Clara y compacta
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
              Escalable
            </span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={perk.ctaHref ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(180deg,#9a2636,#6c1723)] px-5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {perk.ctaLabel ?? "Support this perk"}
            </Link>

            <Link
              href={perk.slug}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View full details
            </Link>
          </div>
        </div>

        <div className="order-1 flex items-center justify-center p-5 md:order-2 md:p-9">
          <div className="w-full max-w-[430px]">
            <div className="relative aspect-square overflow-hidden rounded-[30px] border border-white/12 bg-[radial-gradient(circle_at_50%_28%,rgba(214,179,106,.55),rgba(214,179,106,0)_25%),radial-gradient(circle_at_50%_50%,rgba(118,34,44,.65),transparent_54%),linear-gradient(180deg,#160d13,#0f121b_58%,#141018_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-4 rounded-[22px] border border-[#d6b36a]/35" />
              <img
                src={perk.image}
                alt={perk.name}
                className="h-full w-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}