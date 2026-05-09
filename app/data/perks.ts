//app/data/perks.ts
import type { SupportedLang } from "@/config/books";
import type { Perk, PerkCategory } from "../lib/perks";

type PerkTranslation = {
  name: string;
  description: string;
  ctaLabel: string;
};

export type LocalizedPerk = Omit<Perk, "name" | "description" | "ctaLabel"> & {
  translations: Record<SupportedLang, PerkTranslation>;
};

function createTranslations(
  en: PerkTranslation,
  es: PerkTranslation,
  de: PerkTranslation,
  it: PerkTranslation
): Record<SupportedLang, PerkTranslation> {
  return { en, es, de, it };
}

function localizePerk(perk: LocalizedPerk, lang: SupportedLang): Perk {
  const t = perk.translations[lang] ?? perk.translations.en;

  return {
    slug: perk.slug,
    price: perk.price,
    image: perk.image,
    category: perk.category,
    ctaHref: perk.ctaHref,
    name: t.name,
    description: t.description,
    ctaLabel: t.ctaLabel,
  };
}

const perkDefinitions: LocalizedPerk[] = [
  {
    slug: "/alliance-starter",
    price: "5 USD",
    image: "/images/perks/alliance-starter.png",
    category: "plain",
    ctaHref: "https://www.paypal.com/ncp/payment/5S52YFYKC3YSY",
    translations: createTranslations(
      {
        name: "Alliance Starter",
        description:
          "The first step into the universe of Knots & Blades. A symbolic and visually elegant entry for those who want to support the saga from the very beginning.",
        ctaLabel: "Support this perk",
      },
      {
        name: "Alliance Starter",
        description:
          "El primer paso hacia el universo de Knots & Blades. Una entrada simbólica y visualmente elegante para quienes quieren apoyar la saga desde el inicio.",
        ctaLabel: "Apoyar este perk",
      },
      {
        name: "Alliance Starter",
        description:
          "Der erste Schritt in das Universum von Knots & Blades. Ein symbolischer und visuell eleganter Einstieg für alle, die die Saga von Anfang an unterstützen möchten.",
        ctaLabel: "Diesen Perk unterstützen",
      },
      {
        name: "Alliance Starter",
        description:
          "Il primo passo nell'universo di Knots & Blades. Un ingresso simbolico ed elegante per chi desidera sostenere la saga fin dall'inizio.",
        ctaLabel: "Sostieni questo perk",
      }
    ),
  },
  {
    slug: "/supporter",
    price: "15 USD",
    image: "/images/perks/supporter.png",
    category: "plain",
    ctaHref: "https://www.paypal.com/ncp/payment/AK45XY9BRYATU",
    translations: createTranslations(
      {
        name: "Supporter",
        description:
          "A direct and simple way to support the project for readers who want to enter the ecosystem with a clear and meaningful presence.",
        ctaLabel: "Support this perk",
      },
      {
        name: "Supporter",
        description:
          "Un apoyo directo y sencillo para lectores que quieren entrar al ecosistema con una presencia clara y concreta.",
        ctaLabel: "Apoyar este perk",
      },
      {
        name: "Supporter",
        description:
          "Eine direkte und einfache Unterstützung für Leserinnen und Leser, die mit einer klaren und greifbaren Präsenz Teil des Ökosystems werden möchten.",
        ctaLabel: "Diesen Perk unterstützen",
      },
      {
        name: "Supporter",
        description:
          "Un supporto diretto e semplice per i lettori che vogliono entrare nell'ecosistema con una presenza chiara e concreta.",
        ctaLabel: "Sostieni questo perk",
      }
    ),
  },
  {
    slug: "/higher-supporter",
    price: "35 USD",
    image: "/images/perks/higher-supporter.png",
    category: "plain",
    ctaHref: "https://www.paypal.com/ncp/payment/GDJNBYJBVET9G",
    translations: createTranslations(
      {
        name: "Higher Supporter",
        description:
          "A stronger tier within the plain line, created to reinforce support with greater visual and narrative hierarchy.",
        ctaLabel: "Support this perk",
      },
      {
        name: "Higher Supporter",
        description:
          "Un nivel superior dentro de la línea plain, pensado para reforzar el soporte con una mejor jerarquía visual y narrativa.",
        ctaLabel: "Apoyar este perk",
      },
      {
        name: "Higher Supporter",
        description:
          "Eine höhere Stufe innerhalb der Plain-Linie, gedacht, um die Unterstützung mit stärkerer visueller und erzählerischer Hierarchie zu verstärken.",
        ctaLabel: "Diesen Perk unterstützen",
      },
      {
        name: "Higher Supporter",
        description:
          "Un livello superiore nella linea plain, pensato per rafforzare il supporto con una gerarchia visiva e narrativa più forte.",
        ctaLabel: "Sostieni questo perk",
      }
    ),
  },
  {
    slug: "/loyal-supporter",
    price: "50 USD",
    image: "/images/perks/loyal-supporter.png",
    category: "plain",
    ctaHref: "https://www.paypal.com/ncp/payment/3FUQG7SJ5VF2Q",
    translations: createTranslations(
      {
        name: "Loyal Supporter",
        description:
          "For those who are already committed to the saga and want to show a stronger sign of continued support.",
        ctaLabel: "Support this perk",
      },
      {
        name: "Loyal Supporter",
        description:
          "Para quienes ya están comprometidos con la saga y quieren una señal más fuerte de apoyo continuo.",
        ctaLabel: "Apoyar este perk",
      },
      {
        name: "Loyal Supporter",
        description:
          "Für alle, die der Saga bereits verbunden sind und ein stärkeres Zeichen fortlaufender Unterstützung setzen möchten.",
        ctaLabel: "Diesen Perk unterstützen",
      },
      {
        name: "Loyal Supporter",
        description:
          "Per chi è già legato alla saga e desidera mostrare un segno più forte di sostegno continuo.",
        ctaLabel: "Sostieni questo perk",
      }
    ),
  },
  {
    slug: "/honorable-supporter",
    price: "70 USD",
    image: "/images/perks/honorable-supporter.png",
    category: "plain",
    ctaHref: "https://www.paypal.com/ncp/payment/EDR6R47GHK2J4",
    translations: createTranslations(
      {
        name: "Honorable Supporter",
        description:
          "A more ceremonial tier within the plain group, with a stronger identity and a deeper sense of belonging.",
        ctaLabel: "Support this perk",
      },
      {
        name: "Honorable Supporter",
        description:
          "Un nivel más ceremonial dentro del grupo plain, con una identidad más marcada y una sensación de pertenencia mayor.",
        ctaLabel: "Apoyar este perk",
      },
      {
        name: "Honorable Supporter",
        description:
          "Eine feierlichere Stufe innerhalb der Plain-Gruppe, mit stärkerer Identität und einem größeren Zugehörigkeitsgefühl.",
        ctaLabel: "Diesen Perk unterstützen",
      },
      {
        name: "Honorable Supporter",
        description:
          "Un livello più cerimoniale nel gruppo plain, con un'identità più marcata e un senso di appartenenza maggiore.",
        ctaLabel: "Sostieni questo perk",
      }
    ),
  },
  {
    slug: "/bronze-warrior",
    price: "100 USD",
    image: "/images/perks/bronze-warrior.png",
    category: "plain",
    ctaHref: "https://www.paypal.com/ncp/payment/Q8AVAZHHNYEX4",
    translations: createTranslations(
      {
        name: "Bronze Warrior",
        description:
          "The beginning of the warrior line, with a stronger presence and the promise of greater exclusivity.",
        ctaLabel: "Support this perk",
      },
      {
        name: "Bronze Warrior",
        description:
          "El inicio de la línea warrior, con una presencia más robusta y una promesa de mayor exclusividad.",
        ctaLabel: "Apoyar este perk",
      },
      {
        name: "Bronze Warrior",
        description:
          "Der Beginn der Warrior-Linie, mit stärkerer Präsenz und dem Versprechen größerer Exklusivität.",
        ctaLabel: "Diesen Perk unterstützen",
      },
      {
        name: "Bronze Warrior",
        description:
          "L'inizio della linea warrior, con una presenza più solida e una promessa di maggiore esclusività.",
        ctaLabel: "Sostieni questo perk",
      }
    ),
  },
  {
    slug: "/silver-warrior",
    price: "150 USD",
    image: "/images/perks/silver-warrior.png",
    category: "plain",
    ctaHref: "https://www.paypal.com/ncp/payment/PUZV3FTK85HSW",
    translations: createTranslations(
      {
        name: "Silver Warrior",
        description:
          "A higher step in the warrior line, with a more polished aesthetic and a stronger sense of rank.",
        ctaLabel: "Support this perk",
      },
      {
        name: "Silver Warrior",
        description:
          "Un escalón más alto en la línea warrior, con una estética más pulida y una mayor sensación de rango.",
        ctaLabel: "Apoyar este perk",
      },
      {
        name: "Silver Warrior",
        description:
          "Eine höhere Stufe in der Warrior-Linie, mit einer verfeinerten Ästhetik und stärkerem Ranggefühl.",
        ctaLabel: "Diesen Perk unterstützen",
      },
      {
        name: "Silver Warrior",
        description:
          "Un gradino più alto nella linea warrior, con un'estetica più raffinata e una maggiore sensazione di prestigio.",
        ctaLabel: "Sostieni questo perk",
      }
    ),
  },
  {
    slug: "/golden-warrior",
    price: "200 USD",
    image: "/images/perks/golden-warrior.png",
    category: "plain",
    ctaHref: "https://www.paypal.com/ncp/payment/44GDWHZL8X47U",
    translations: createTranslations(
      {
        name: "Golden Warrior",
        description:
          "The closing tier of the plain warrior series, with the strongest visual and symbolic weight along this path.",
        ctaLabel: "Support this perk",
      },
      {
        name: "Golden Warrior",
        description:
          "El cierre de la serie plain warrior, con el mayor peso visual y simbólico dentro de esta ruta.",
        ctaLabel: "Apoyar este perk",
      },
      {
        name: "Golden Warrior",
        description:
          "Die abschließende Stufe der Plain-Warrior-Reihe, mit dem größten visuellen und symbolischen Gewicht innerhalb dieses Weges.",
        ctaLabel: "Diesen Perk unterstützen",
      },
      {
        name: "Golden Warrior",
        description:
          "La chiusura della serie plain warrior, con il massimo peso visivo e simbolico di questo percorso.",
        ctaLabel: "Sostieni questo perk",
      }
    ),
  },
  {
    slug: "/titanium-hunter",
    price: "25 USD",
    image: "/images/perks/titanium-hunter.png",
    category: "intermediate",
    ctaHref: "https://www.paypal.com/ncp/payment/E7QZ2ZATSUZQW",
    translations: createTranslations(
      {
        name: "Titanium Hunter",
        description:
          "An intermediate perk with greater visual presence, stronger focus on the hero image, and a more ceremonial presentation within the saga ecosystem.",
        ctaLabel: "Unlock this perk",
      },
      {
        name: "Titanium Hunter",
        description:
          "Un perk intermedio con más presencia visual, mejor soporte para imagen protagonista y una presentación más ceremonial dentro del ecosistema de la saga.",
        ctaLabel: "Desbloquear este perk",
      },
      {
        name: "Titanium Hunter",
        description:
          "Ein mittlerer Perk mit stärkerer visueller Präsenz, besserer Bühne für das Hauptbild und einer feierlicheren Präsentation innerhalb des Saga-Ökosystems.",
        ctaLabel: "Diesen Perk freischalten",
      },
      {
        name: "Titanium Hunter",
        description:
          "Un perk intermedio con maggiore presenza visiva, più spazio per l'immagine protagonista e una presentazione più cerimoniale nell'ecosistema della saga.",
        ctaLabel: "Sblocca questo perk",
      }
    ),
  },
  {
    slug: "/diamond-hunter",
    price: "35 USD",
    image: "/images/perks/diamond-hunter.png",
    category: "intermediate",
    ctaHref: "https://www.paypal.com/ncp/payment/TN4XG9EHFQYZA",
    translations: createTranslations(
      {
        name: "Diamond Hunter",
        description:
          "An intermediate variation with more narrative shine and a higher level of attention within the exclusive block.",
        ctaLabel: "Unlock this perk",
      },
      {
        name: "Diamond Hunter",
        description:
          "Una variante intermedia con más brillo narrativo y un nivel de atención superior dentro del bloque exclusivo.",
        ctaLabel: "Desbloquear este perk",
      },
      {
        name: "Diamond Hunter",
        description:
          "Eine mittlere Variante mit mehr erzählerischem Glanz und einer höheren Aufmerksamkeit innerhalb des exklusiven Blocks.",
        ctaLabel: "Diesen Perk freischalten",
      },
      {
        name: "Diamond Hunter",
        description:
          "Una variante intermedia con più forza narrativa e un livello di attenzione superiore nel blocco esclusivo.",
        ctaLabel: "Sblocca questo perk",
      }
    ),
  },
  {
    slug: "/adventurer",
    price: "50 USD",
    image: "/images/perks/adventurer.png",
    category: "intermediate",
    ctaHref: "https://www.paypal.com/ncp/payment/3M3F7PGQCLKH6",
    translations: createTranslations(
      {
        name: "Adventurer",
        description:
          "An intermediate option with a spirit of exploration, ideal for expanding the reach of the Knots & Blades universe.",
        ctaLabel: "Unlock this perk",
      },
      {
        name: "Adventurer",
        description:
          "Una opción intermedia con espíritu de exploración, ideal para ampliar el alcance del universo Knots & Blades.",
        ctaLabel: "Desbloquear este perk",
      },
      {
        name: "Adventurer",
        description:
          "Eine mittlere Option mit Entdeckergeist, ideal um die Reichweite des Universums von Knots & Blades zu erweitern.",
        ctaLabel: "Diesen Perk freischalten",
      },
      {
        name: "Adventurer",
        description:
          "Un'opzione intermedia con spirito di esplorazione, ideale per ampliare la portata dell'universo di Knots & Blades.",
        ctaLabel: "Sblocca questo perk",
      }
    ),
  },
  {
    slug: "/explorer",
    price: "70 USD",
    image: "/images/perks/explorer.png",
    category: "intermediate",
    ctaHref: "https://www.paypal.com/ncp/payment/MSMS2PG3MRK5E",
    translations: createTranslations(
      {
        name: "Explorer",
        description:
          "The closing tier of the intermediate block, with a broader visual construction and a more sophisticated entry point.",
        ctaLabel: "Unlock this perk",
      },
      {
        name: "Explorer",
        description:
          "El cierre del bloque intermediate, con una construcción visual más amplia y un punto de entrada más sofisticado.",
        ctaLabel: "Desbloquear este perk",
      },
      {
        name: "Explorer",
        description:
          "Der Abschluss des Intermediate-Blocks, mit einer breiteren visuellen Komposition und einem raffinierteren Einstiegspunkt.",
        ctaLabel: "Diesen Perk freischalten",
      },
      {
        name: "Explorer",
        description:
          "La chiusura del blocco intermediate, con una costruzione visiva più ampia e un punto d'ingresso più sofisticato.",
        ctaLabel: "Sblocca questo perk",
      }
    ),
  },
  {
    slug: "/epic-explorer",
    price: "100 USD",
    image: "/images/perks/epic-explorer.png",
    category: "exclusive",
    ctaHref: "https://www.paypal.com/ncp/payment/CNRNE22TF86YA",
    translations: createTranslations(
      {
        name: "Epic Explorer",
        description:
          "An exclusive edition with high-value narrative framing, hero presentation, and a visual hierarchy designed for premium perks within Knots & Blades.",
        ctaLabel: "Get it now",
      },
      {
        name: "Epic Explorer",
        description:
          "Una edición exclusiva con narrativa de alto valor, presentación protagonista y una jerarquía visual pensada para perks premium dentro de Knots & Blades.",
        ctaLabel: "Consíguelo ahora",
      },
      {
        name: "Epic Explorer",
        description:
          "Eine exklusive Edition mit hochwertiger erzählerischer Inszenierung, Hero-Präsentation und visueller Hierarchie für Premium-Perks innerhalb von Knots & Blades.",
        ctaLabel: "Jetzt erhalten",
      },
      {
        name: "Epic Explorer",
        description:
          "Un'edizione esclusiva con una narrativa di alto valore, presentazione protagonista e una gerarchia visiva pensata per i perk premium di Knots & Blades.",
        ctaLabel: "Ottienilo ora",
      }
    ),
  },
  {
    slug: "/knots-architect",
    price: "Flexible contribution",
    image: "/images/perks/knots-architect.png",
    category: "exclusive",
    ctaHref: "https://www.paypal.com/ncp/payment/Z93FNSYPBTTQY",
    translations: createTranslations(
      {
        name: "Knots Architect",
        description:
          "The most representative and exclusive perk, designed to stand out as a horizontal hero piece with full presence, editorial aesthetics, and a sense of privilege.",
        ctaLabel: "Access this tier",
      },
      {
        name: "Knots Architect",
        description:
          "El perk más exclusivo y representativo, diseñado para destacar como una pieza hero horizontal con presencia total, estética editorial y sensación de privilegio.",
        ctaLabel: "Acceder a este tier",
      },
      {
        name: "Knots Architect",
        description:
          "Der repräsentativste und exklusivste Perk, gestaltet als horizontales Hero-Element mit voller Präsenz, editorialer Ästhetik und einem Gefühl von Privileg.",
        ctaLabel: "Auf diese Stufe zugreifen",
      },
      {
        name: "Knots Architect",
        description:
          "Il perk più esclusivo e rappresentativo, pensato per distinguersi come una hero orizzontale con presenza totale, estetica editoriale e senso di privilegio.",
        ctaLabel: "Accedi a questo livello",
      }
    ),
  },
  {
    slug: "/master-of-puppets",
    price: "3000 USD",
    image: "/images/perks/master-of-puppets.png",
    category: "exclusive",
    ctaHref: "https://www.paypal.com/ncp/payment/HH83MVQQZSP5W",
    translations: createTranslations(
      {
        name: "Master of Puppets",
        description:
          "The highest level of exclusivity, reserved for maximum presence within the saga and a direct relationship with its creative universe.",
        ctaLabel: "Access this tier",
      },
      {
        name: "Master of Puppets",
        description:
          "El nivel más alto de exclusividad, reservado para una presencia máxima dentro de la saga y una relación directa con su universo creativo.",
        ctaLabel: "Acceder a este tier",
      },
      {
        name: "Master of Puppets",
        description:
          "Die höchste Stufe der Exklusivität, reserviert für maximale Präsenz innerhalb der Saga und eine direkte Verbindung zu ihrem kreativen Universum.",
        ctaLabel: "Auf diese Stufe zugreifen",
      },
      {
        name: "Master of Puppets",
        description:
          "Il livello più alto di esclusività, riservato a una presenza massima nella saga e a un rapporto diretto con il suo universo creativo.",
        ctaLabel: "Accedi a questo livello",
      }
    ),
  },
];

export const perks: Perk[] = perkDefinitions.map((perk) => localizePerk(perk, "en"));

export function getPerksByLang(lang: SupportedLang): Perk[] {
  return perkDefinitions.map((perk) => localizePerk(perk, lang));
}

export type { PerkCategory };