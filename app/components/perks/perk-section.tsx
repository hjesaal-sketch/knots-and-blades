//app/components/perks/perk-section.tsx
import type { Perk } from "../../lib/perks";
import { getPerkLayout } from "../../lib/perks";
import PerkCardPlain from "./perk-card-plain";
import PerkCardIntermediate from "./perk-card-intermediate";
import PerkCardExclusive from "./perk-card-exclusive";

type PerkSectionProps = {
  perk: Perk;
};

export default function PerkSection({ perk }: PerkSectionProps) {
  const layout = getPerkLayout(perk.category);

  switch (layout) {
    case "plain":
      return <PerkCardPlain perk={perk} />;
    case "intermediate":
      return <PerkCardIntermediate perk={perk} />;
    case "exclusive":
      return <PerkCardExclusive perk={perk} />;
    default:
      return <PerkCardPlain perk={perk} />;
  }
}