//app/lib/perks.ts
export type PerkCategory = "plain" | "intermediate" | "exclusive";
export type PerkLayoutType = "plain" | "intermediate" | "exclusive";

export type Perk = {
  name: string;
  slug: string;
  price: string;
  description: string;
  image: string;
  category: PerkCategory;
  ctaLabel?: string;
  ctaHref?: string;
};

export function getPerkLayout(category: PerkCategory): PerkLayoutType {
  return category; // Ahora mapea 1:1, mucho más limpio
}