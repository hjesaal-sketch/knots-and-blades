// app/data/books.ts
import type { SupportedLang } from "@/config/books";

export type BookTranslation = {
  title: string;
  label: string;
  teaser?: string;
  description?: string;
};

export type Book = {
  slug: string;
  order: number;
  price?: string;
  image: string;
  kleithrosVerticalImage?: string;
  kleithrosExtraImage?: string;
  translations: Record<SupportedLang, BookTranslation>;
};

export type UpcomingBook = {
  slug: string;
  order: number;
  image: string;
  translations: Record<SupportedLang, Pick<BookTranslation, "title" | "label">>;
};

function t(
  en: BookTranslation,
  es: BookTranslation,
  de: BookTranslation,
  it: BookTranslation
): Record<SupportedLang, BookTranslation> {
  return { en, es, de, it };
}

function tu(
  en: Pick<BookTranslation, "title" | "label">,
  es: Pick<BookTranslation, "title" | "label">,
  de: Pick<BookTranslation, "title" | "label">,
  it: Pick<BookTranslation, "title" | "label">
): Record<SupportedLang, Pick<BookTranslation, "title" | "label">> {
  return { en, es, de, it };
}

const bookDefinitions: Book[] = [
  {
    slug: "kleithros",
    order: 1,
    price: "$4.99",
    image: "/images/books/kleithros.png",
    kleithrosVerticalImage: "/images/books/kleithros-vertical.png",
    kleithrosExtraImage: "/images/books/kleithros-extra.png",
    translations: t(
      {
        title: "Kleithros",
        label: "The opening book of the saga",
        teaser: "A first descent into the political, symbolic, and psychological core of Knots & Blades.",
        description: `**Kleithros** opens the *Knots & Blades* saga with a world shaped by tension, hidden structures, and forces that move beneath the visible order.

When Lukas wakes in a barren cell, memory fractured and fate uncertain, he finds Klaus—a stranger who accuses him of being a killer. Trapped together by a sadistic captor, they must face shared demons and buried truths.

As the oppressive atmosphere tightens and the boundaries between past and present blur, Lukas fights against psychological chains of guilt, fear, and despair, while Klaus emerges as both confidant and potential threat. With time running out and their surroundings disintegrating, the two men must navigate a labyrinth of terror, deceit, and their own fractured psyches.

Dive into the dark and intriguing universe of *Kleithros*, a captivating psychological thriller full of mystery, tension, and unforgettable twists. This first installment of the **Knots & Blades** saga serves as the perfect prologue, leaving you eager to discover what lies ahead in this impactful literary journey.

**✨ Exclusively available on this website, in English / Spanish / German / Italian.**

*Psychological thriller · Prologue of the Knots & Blades saga.*`,
      },
      {
        title: "Kleithros",
        label: "Primer libro de la saga Knots & Blades",
        teaser: "En la primera entrega de la escalofriante saga **Knots & Blades**, *Kleithros*, el autor **Gregori H. Orlov** teje una narrativa inquietante que difumina la línea entre la realidad y la locura.",
        description: `En la primera entrega de la escalofriante saga **Knots & Blades**, *Kleithros*, el autor **Gregori H. Orlov** teje una narrativa inquietante que difumina la línea entre la realidad y la locura.

Cuando Lukas despierta en una celda desolada, con la memoria nublada y su destino incierto, se encuentra con Klaus: un extraño que lo acusa de ser un asesino. Confiados juntos por un captor sádico, deben enfrentar demonios compartidos y verdades ocultas.

Mientras la atmósfera opresiva se cierra y los límites entre pasado y presente se entrelazan, Lukas lucha contra las cadenas psicológicas de la culpa, el miedo y la desesperación, mientras Klaus emerge como tanto confidente como amenaza potencial. Con el tiempo agotándose y su entorno desintegrándose, los dos hombres deben navegar un laberinto de terror, engaño y sus propias psiques fragmentadas.

Sumérgete en el oscuro e intrigante universo de *Kleithros*, un thriller psicológico cautivador lleno de misterio, tensión y giros inolvidables. Esta primera entrega de la saga **Knots & Blades** sirve como el prólogo perfecto, dejándote ansioso por descubrir qué le espera en este viaje literario impactante.

**✨ Disponible exclusivamente en este sitio web, en inglés / español / alemán / italiano.**

*Thriller psicológico · Prólogo de la saga Knots & Blades.*`,
      },
      {
        title: "Kleithros",
        label: "Das erste Buch der Saga",
        teaser: "Ein erster Abstieg in den politischen, symbolischen und psychologischen Kern von Knots & Blades.",
        description: `**Kleithros** eröffnet die *Knots & Blades* Saga mit einer Welt voller Spannungen, verborgener Strukturen und Kräfte, die unter der sichtbaren Ordnung wirken.

Als Lukas in einer kargen Zelle erwacht, sein Gedächtnis zersplittert und sein Schicksal ungewiss, trifft er auf Klaus – einen Fremden, der ihn beschuldigt, ein Mörder zu sein. Gemeinsam von einem sadistischen Entführer gefangen gehalten, müssen sie sich geteilten Dämonen und vergrabenen Wahrheiten stellen.

Während die bedrückende Atmosphäre sich verdichtet und die Grenzen zwischen Vergangenheit und Gegenwart verschwimmen, kämpft Lukas gegen psychologische Ketten aus Schuld, Angst und Verzweiflung, während Klaus sowohl Vertrauter als auch potenzielle Bedrohung wird. Mit schwindender Zeit und sich auflösender Umgebung müssen die beiden Männer ein Labyrinth aus Terror, Täuschung und ihren eigenen zerrütteten Psychen navigieren.

Tauchen Sie ein in das dunkle und faszinierende Universum von *Kleithros*, einen fesselnden psychologischen Thriller voller Geheimnisse, Spannung und unvergesslicher Wendungen. Dieser erste Band der **Knots & Blades** Saga dient als perfekter Prolog und macht Sie neugierig auf das, was auf dieser eindrucksvollen literarischen Reise noch kommt.

**✨ Exklusiv erhältlich auf dieser Website, auf Englisch / Spanisch / Deutsch / Italienisch.**

*Psychothriller · Prolog der Knots & Blades Saga.*`,
      },
      {
        title: "Kleithros",
        label: "Il libro iniziale della saga",
        teaser: "Una prima discesa nel nucleo politico, simbolico e psicologico di Knots & Blades.",
        description: `**Kleithros** apre la saga *Knots & Blades* con un mondo segnato da tensioni, strutture nascoste e forze che agiscono sotto l'ordine visibile.

Quando Lukas si risveglia in una cella spoglia, con la memoria frantumata e il destino incerto, trova Klaus – uno sconosciuto che lo accusa di essere un assassino. Intrappolati insieme da un rapitore sadico, devono affrontare demoni condivisi e verità sepolte.

Mentre l'atmosfera opprimente si stringe e i confini tra passato e presente si offuscano, Lukas lotta contro le catene psicologiche di colpa, paura e disperazione, mentre Klaus emerge sia come confidente che come potenziale minaccia. Con il tempo che scorre e l'ambiente che si disintegra, i due uomini devono navigare un labirinto di terrore, inganno e le proprie psiche frammentate.

Immergiti nell'oscuro e intrigante universo di *Kleithros*, un avvincente thriller psicologico pieno di mistero, tensione e colpi di scena indimenticabili. Questo primo capitolo della saga **Knots & Blades** serve come prologo perfetto, lasciandoti ansioso di scoprire cosa ti aspetta in questo impattante viaggio letterario.

**✨ Disponibile esclusivamente su questo sito web, in inglese / spagnolo / tedesco / italiano.**

*Thriller psicologico · Prologo della saga Knots & Blades.*`,
      }
    ),
  },
  {
    slug: "dark-labyrinths",
    order: 2,
    price: "Not available",
    image: "/images/books/dark-labyrinths.png",
    translations: t(
      {
        title: "Dark Labyrinths",
        label: "The second fracture in the saga",
        teaser: "A deeper movement into uncertainty, internal rupture, and hostile design.",
        description: `**Dark Labyrinths** expands the *Knots & Blades* saga into a denser and more unstable terrain, where decisions become traps and every structure seems designed to distort the path forward.

The narrative deepens as the protagonist navigates through corridors of doubt and rooms of distorted reflections. Each choice branches into darker possibilities, and the line between pursuer and pursued becomes dangerously thin.

As psychological pressure mounts and reality continues to bend, *Dark Labyrinths* challenges the reader to question every certainty. Walls have ears, shadows have voices, and the minotaur at the center of this maze might just be the self you've been trying to escape.

**✨ Available in English / Spanish / German / Italian.**

*Psychological thriller · Second book of the Knots & Blades saga.*`,
      },
      {
        title: "Dark Labyrinths",
        label: "La segunda fractura de la saga",
        teaser: "Un movimiento más profundo hacia la incertidumbre, la ruptura interna y el diseño hostil.",
        description: `**Dark Labyrinths** expande la saga *Knots & Blades* hacia un terreno más denso e inestable, donde las decisiones se convierten en trampas y cada estructura parece diseñada para deformar el camino.

La narrativa se profundiza mientras el protagonista navega por corredores de duda y habitaciones de reflejos distorsionados. Cada elección se ramifica hacia posibilidades más oscuras, y la línea entre perseguidor y perseguido se vuelve peligrosamente delgada.

A medida que la presión psicológica aumenta y la realidad continúa deformándose, *Dark Labyrinths* desafía al lector a cuestionar cada certeza. Las paredes tienen oídos, las sombras tienen voces, y el minotauro en el centro de este laberinto podría ser el yo que has estado tratando de escapar.

**✨ Disponible en inglés / español / alemán / italiano.**

*Thriller psicológico · Segundo libro de la saga Knots & Blades.*`,
      },
      {
        title: "Dark Labyrinths",
        label: "Der zweite Bruch der Saga",
        teaser: "Eine tiefere Bewegung in Unsicherheit, innere Zerrüttung und feindliche Konstruktion.",
        description: `**Dark Labyrinths** erweitert die *Knots & Blades* Saga in ein dichteres und instabileres Terrain, in dem Entscheidungen zu Fallen werden und jede Struktur den Weg verzerren zu wollen scheint.

Die Erzählung vertieft sich, während der Protagonist durch Korridore des Zweifels und Räume verzerrter Spiegelbilder navigiert. Jede Wahl verzweigt sich in dunklere Möglichkeiten, und die Grenze zwischen Verfolger und Verfolgtem wird gefährlich dünn.

Während der psychologische Druck zunimmt und die Realität sich weiter verbiegt, fordert *Dark Labyrinths* den Leser heraus, jede Gewissheit zu hinterfragen. Wände haben Ohren, Schatten haben Stimmen, und der Minotaurus im Zentrum dieses Labyrinths könnte das Selbst sein, dem du zu entkommen versuchst.

**✨ Verfügbar auf Englisch / Spanisch / Deutsch / Italienisch.**

*Psychothriller · Zweites Buch der Knots & Blades Saga.*`,
      },
      {
        title: "Dark Labyrinths",
        label: "La seconda frattura della saga",
        teaser: "Un movimento più profondo verso l'incertezza, la rottura interiore e una costruzione ostile.",
        description: `**Dark Labyrinths** espande la saga *Knots & Blades* in un territorio più denso e instabile, dove le decisioni diventano trappole e ogni struttura sembra progettata per deformare il cammino.

La narrazione si approfondisce mentre il protagonista naviga attraverso corridoi di dubbio e stanze di riflessi distorti. Ogni scelta si dirama in possibilità più oscure, e il confine tra inseguitore e inseguito diventa pericolosamente sottile.

Mentre la pressione psicologica aumenta e la realtà continua a piegarsi, *Dark Labyrinths* sfida il lettore a mettere in discussione ogni certezza. I muri hanno orecchie, le ombre hanno voci, e il minotauro al centro di questo labirinto potrebbe essere il sé da cui hai cercato di fuggire.

**✨ Disponibile in inglese / spagnolo / tedesco / italiano.**

*Thriller psicologico · Secondo libro della saga Knots & Blades.*`,
      }
    ),
  },
  {
    slug: "whispers-of-chaos",
    order: 3,
    price: "19.99 USD",
    image: "/images/books/whispers-of-chaos.png",
    translations: t(
      {
        title: "Whispers of Chaos",
        label: "The rising instability of the saga",
        teaser: "Signals, fractures, and pressures converge as the narrative grows more volatile.",
        description: `**Whispers of Chaos** pushes the *Knots & Blades* saga toward a broader scale of disturbance, where meaning fragments, alliances weaken, and the world itself starts to answer with disorder.

The whispers grow louder, and chaos becomes not just a threat but a seductive force. Old certainties crumble as new players enter the game with unknowable motives. Trust becomes the rarest currency, and survival demands that you embrace the very madness you once feared.

As the narrative reaches its breaking point, *Whispers of Chaos* forces both characters and readers to confront the terrifying possibility that order was never anything but a beautiful lie told by those too afraid to face the truth.

**✨ Available in English / Spanish / German / Italian.**

*Psychological thriller · Third book of the Knots & Blades saga.*`,
      },
      {
        title: "Whispers of Chaos",
        label: "La inestabilidad ascendente de la saga",
        teaser: "Señales, fracturas y presiones convergen mientras la narrativa se vuelve más volátil.",
        description: `**Whispers of Chaos** lleva la saga *Knots & Blades* hacia una escala más amplia de perturbación, donde el sentido se fragmenta, las alianzas se debilitan y el propio mundo empieza a responder con desorden.

Los susurros se vuelven más fuertes, y el caos se convierte no solo en una amenaza sino en una fuerza seductora. Las viejas certezas se desmoronan mientras nuevos jugadores entran en juego con motivos incognoscibles. La confianza se convierte en la moneda más escasa, y la supervivencia exige que abraces la misma locura que una vez temiste.

A medida que la narrativa alcanza su punto de quiebre, *Whispers of Chaos* obliga tanto a personajes como a lectores a confrontar la aterradora posibilidad de que el orden nunca fue más que una hermosa mentira contada por aquellos demasiado asustados para enfrentar la verdad.

**✨ Disponible en inglés / español / alemán / italiano.**

*Thriller psicológico · Tercer libro de la saga Knots & Blades.*`,
      },
      {
        title: "Whispers of Chaos",
        label: "Die wachsende Instabilität der Saga",
        teaser: "Signale, Brüche und Spannungen verdichten sich, während die Erzählung volatiler wird.",
        description: `**Whispers of Chaos** treibt die *Knots & Blades* Saga in eine größere Dimension der Störung, in der Bedeutung zerfällt, Bündnisse schwächer werden und die Welt selbst mit Unordnung reagiert.

Das Flüstern wird lauter, und Chaos wird nicht nur zu einer Bedrohung, sondern zu einer verführerischen Kraft. Alte Gewissheiten zerbröckeln, während neue Spieler mit unergründlichen Motiven ins Spiel kommen. Vertrauen wird zur seltensten Währung, und das Überleben verlangt, dass du den Wahnsinn annimmst, den du einst gefürchtet hast.

Als die Erzählung ihren Bruchpunkt erreicht, zwingt *Whispers of Chaos* sowohl Charaktere als auch Leser, sich der erschreckenden Möglichkeit zu stellen, dass Ordnung nie mehr war als eine schöne Lüge, erzählt von denen, die zu verängstigt waren, sich der Wahrheit zu stellen.

**✨ Verfügbar auf Englisch / Spanisch / Deutsch / Italienisch.**

*Psychothriller · Drittes Buch der Knots & Blades Saga.*`,
      },
      {
        title: "Whispers of Chaos",
        label: "L'instabilità crescente della saga",
        teaser: "Segnali, fratture e pressioni convergono mentre la narrazione diventa più volatile.",
        description: `**Whispers of Chaos** spinge la saga *Knots & Blades* verso una scala più ampia di perturbazione, dove il significato si frammenta, le alleanze si indeboliscono e il mondo stesso comincia a rispondere con il disordine.

I sussurri diventano più forti e il caos diventa non solo una minaccia ma una forza seducente. Le vecchie certezze crollano mentre nuovi giocatori entrano in scena con motivazioni inconoscibili. La fiducia diventa la valuta più rara e la sopravvivenza richiede di abbracciare proprio quella follia che una volta temevi.

Mentre la narrazione raggiunge il suo punto di rottura, *Whispers of Chaos* costringe sia i personaggi che i lettori a confrontarsi con la terrificante possibilità che l'ordine non sia mai stato altro che una bella bugia raccontata da coloro che erano troppo spaventati per affrontare la verità.

**✨ Disponibile in inglese / spagnolo / tedesco / italiano.**

*Thriller psicologico · Terzo libro della saga Knots & Blades.*`,
      }
    ),
  },
];

const upcomingBookDefinitions: UpcomingBook[] = [
  {
    slug: "revelations",
    order: 4,
    image: "/images/books/revelations.png",
    translations: tu(
      { title: "Revelations", label: "A future entry in the saga" },
      { title: "Revelations", label: "Una futura entrega de la saga" },
      { title: "Revelations", label: "Ein zukünftiger Band der Saga" },
      { title: "Revelations", label: "Un futuro capitolo della saga" }
    ),
  },
];

export type LocalizedBook = Omit<Book, "translations"> & BookTranslation;
export type LocalizedUpcomingBook = Omit<UpcomingBook, "translations"> & {
  title: string;
  label: string;
};

export function getBooksByLang(lang: SupportedLang): LocalizedBook[] {
  return bookDefinitions.map((book) => {
    const tr = book.translations[lang] ?? book.translations.en;

    return {
      slug: book.slug,
      order: book.order,
      price: book.price,
      image: book.image,
      kleithrosVerticalImage: book.kleithrosVerticalImage,
      kleithrosExtraImage: book.kleithrosExtraImage,
      title: tr.title,
      label: tr.label,
      teaser: tr.teaser,
      description: tr.description,
    };
  });
}

export function getBookBySlug(lang: SupportedLang, slug: string): LocalizedBook | undefined {
  return getBooksByLang(lang).find((book) => book.slug === slug);
}

export function getUpcomingBooksByLang(lang: SupportedLang): LocalizedUpcomingBook[] {
  return upcomingBookDefinitions.map((book) => {
    const tr = book.translations[lang] ?? book.translations.en;

    return {
      slug: book.slug,
      order: book.order,
      image: book.image,
      title: tr.title,
      label: tr.label,
    };
  });
}

export const books = getBooksByLang("en");
export const upcomingBooks = getUpcomingBooksByLang("en");