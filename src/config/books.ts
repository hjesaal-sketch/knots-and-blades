//src/config/books.ts

export const SUPPORTED_LANGS = ["es", "en", "de", "it"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export const chapterOneLinks: Record<SupportedLang, string> = {
  es: "https://drive.google.com/file/d/13Q4A1PjFlbzyrYoAjHex9g-BW639AiJz/view?usp=drive_link",
  en: "https://drive.google.com/file/d/1rwmDhMqiB_bH1TF0VdZsLjJHn65cTqlj/view?usp=drive_link",
  de: "https://drive.google.com/file/d/1Sc2jaaFHAbMjDs-SRZ2ncXi0s86A1XS0/view?usp=sharing",
  it: "https://drive.google.com/file/d/1j8whpMxMZoe9c__sTNOv_wKlfedbyc_s/view?usp=drive_link",
};

export interface Book {
  order: number;
  slug: string;
  title: string;
  label: string;
  teaser?: string;
  description?: string;
  price?: string;
  author?: string;
  languages?: string[];
  image?: string;
}

export const books: Book[] = [
  {
    order: 1,
    slug: "kleithros",
    title: "Kleithros",
    label: "Primer libro de la saga Knots & Blades",
    teaser: "En la primera entrega de la escalofriante saga **Knots & Blades**, *Kleithros*, el autor **Gregori H. Orlov** teje una narrativa inquietante que difumina la línea entre la realidad y la locura.",
    description: `En la primera entrega de la escalofriante saga **Knots & Blades**, *Kleithros*, el autor **Gregori H. Orlov** teje una narrativa inquietante que difumina la línea entre la realidad y la locura.

Cuando Lukas despierta en una celda desolada, con la memoria nublada y su destino incierto, se encuentra con Klaus: un extraño que lo acusa de ser un asesino. Confiados juntos por un captor sádico, deben enfrentar demonios compartidos y verdades ocultas.

Mientras la atmósfera opresiva se cierra y los límites entre pasado y presente se entrelazan, Lukas lucha contra las cadenas psicológicas de la culpa, el miedo y la desesperación, mientras Klaus emerge como tanto confidente como amenaza potencial. Con el tiempo agotándose y su entorno desintegrándose, los dos hombres deben navegar un laberinto de terror, engaño y sus propias psiques fragmentadas.

Sumérgete en el oscuro e intrigante universo de *Kleithros*, un thriller psicológico cautivador lleno de misterio, tensión y giros inolvidables. Esta primera entrega de la saga **Knots & Blades** sirve como el prólogo perfecto, dejándote ansioso por descubrir qué le espera en este viaje literario impactante.

**✨ Disponible exclusivamente en este sitio web, en inglés / español / alemán / italiano.**

*Thriller psicológico · Prólogo de la saga Knots & Blades.*`,
    price: "$4.99",
    author: "Gregori H. Orlov",
    languages: ["English", "Spanish", "German", "Italian"],
    image: "/images/books/kleithros.png",
  },
] as const;

export const upcomingBooks = [
  {
    order: 2,
    slug: "dark-labyrinths",
    title: "Dark Labyrinths",
    label: "Coming soon",
  },
  {
    order: 3,
    slug: "whispers-of-chaos",
    title: "Whispers of Chaos",
    label: "Coming soon",
  },
  {
    order: 4,
    slug: "revelations",
    title: "Revelations",
    label: "Coming soon",
  },
] as const;