// app/[lang]/about/page.tsx
import { Suspense } from "react";
import Image from "next/image";
import type { SupportedLang } from "@/config/books";

type AboutPageProps = {
  params: Promise<{ lang: SupportedLang }>;
};

type AboutCopy = {
  title: string;
  name: string;
  paragraphs: string[];
};

const aboutCopy: Record<SupportedLang, AboutCopy> = {
  en: {
    title: "About the Author",
    name: "Gregori H. Orlov.",
    paragraphs: [
      "Gregori H. Orlov is an enigmatic author who has captured the attention of readers with his unsettling saga Knots & Blades. Through his vivid and absorbing prose, Orlov immerses us in a world where reality and madness intertwine, exploring the dark recesses of the human mind.",
      "Curiously, Gregori H. Orlov is not only the author's pseudonym but also the name of the saga's protagonist, Alexander Nasir Levy, who embodies many of the internal struggles and moral dilemmas that Orlov explores in his stories.",
      "This duality adds a level of depth and complexity to his narrative, blurring the boundaries between the author and his creation. Readers will be able to delve even deeper into Gregori H. Orlov's fascinating world through a series of interviews that will be published on the saga's website, where secrets about his creative process, literary influences, and personal concerns will be revealed.",
      "Prepare to explore the labyrinths of his mind and discover that, sometimes, reality is as terrifying as fiction.",
    ],
  },
  es: {
    title: "Sobre el autor",
    name: "Gregori H. Orlov.",
    paragraphs: [
      "Gregori H. Orlov es un autor enigmático que ha capturado la atención de los lectores con su inquietante saga Knots & Blades. A través de su prosa vívida y absorbente, Orlov nos sumerge en un mundo donde la realidad y la locura se entrelazan, explorando los rincones más oscuros de la mente humana.",
      "Curiosamente, Gregori H. Orlov no es solo el seudónimo del autor, sino también el nombre del protagonista de la saga, Alexander Nasir Levy, quien encarna muchas de las luchas internas y los dilemas morales que Orlov explora en sus historias.",
      "Esta dualidad añade un nivel de profundidad y complejidad a su narrativa, difuminando las fronteras entre el autor y su creación. Los lectores podrán adentrarse aún más en el fascinante mundo de Gregori H. Orlov a través de una serie de entrevistas que serán publicadas en el sitio web de la saga, donde se revelarán secretos sobre su proceso creativo, sus influencias literarias y sus inquietudes personales.",
      "Prepárate para explorar los laberintos de su mente y descubrir que, a veces, la realidad es tan aterradora como la ficción.",
    ],
  },
  de: {
    title: "Über den Autor",
    name: "Gregori H. Orlov.",
    paragraphs: [
      "Gregori H. Orlov ist ein rätselhafter Autor, der mit seiner verstörenden Saga Knots & Blades die Aufmerksamkeit der Leser auf sich gezogen hat. Mit seiner lebendigen und fesselnden Prosa taucht Orlov uns in eine Welt ein, in der sich Realität und Wahnsinn verweben, und erkundet die dunkelsten Abgründe des menschlichen Geistes.",
      "Bemerkenswerterweise ist Gregori H. Orlov nicht nur das Pseudonym des Autors, sondern auch der Name des Protagonisten der Saga, Alexander Nasir Levy, der viele der inneren Kämpfe und moralischen Dilemmata verkörpert, die Orlov in seinen Geschichten erforscht.",
      "Diese Dualität verleiht seiner Erzählung zusätzliche Tiefe und Komplexität und verwischt die Grenzen zwischen dem Autor und seiner Schöpfung. Die Leser werden noch tiefer in die faszinierende Welt Gregori H. Orlovs eintauchen können – durch eine Reihe von Interviews, die auf der Website der Saga veröffentlicht werden, wo Geheimnisse über seinen kreativen Prozess, seine literarischen Einflüsse und seine persönlichen Anliegen enthüllt werden.",
      "Bereite dich darauf vor, die Labyrinthe seines Geistes zu erkunden und zu entdecken, dass die Realität manchmal ebenso erschreckend sein kann wie die Fiktion.",
    ],
  },
  it: {
    title: "L’autore",
    name: "Gregori H. Orlov.",
    paragraphs: [
      "Gregori H. Orlov è un autore enigmatico che ha catturato l’attenzione dei lettori con la sua inquietante saga Knots & Blades. Attraverso la sua prosa vivida e avvolgente, Orlov ci immerge in un mondo in cui realtà e follia si intrecciano, esplorando gli angoli più oscuri della mente umana.",
      "Curiosamente, Gregori H. Orlov non è soltanto lo pseudonimo dell’autore, ma anche il nome del protagonista della saga, Alexander Nasir Levy, che incarna molte delle lotte interiori e dei dilemmi morali che Orlov esplora nelle sue storie.",
      "Questa dualità aggiunge un livello di profondità e complessità alla sua narrazione, sfumando i confini tra l’autore e la sua creazione. I lettori potranno immergersi ancora più a fondo nell’affascinante mondo di Gregori H. Orlov attraverso una serie di interviste che saranno pubblicate sul sito della saga, dove verranno rivelati segreti sul suo processo creativo, sulle sue influenze letterarie e sulle sue inquietudini personali.",
      "Preparati a esplorare i labirinti della sua mente e a scoprire che, a volte, la realtà è tanto terrificante quanto la finzione.",
    ],
  },
};

const authorData = {
  name: "Gregori H. Orlov.",
  imageSrc: "/images/author/gregori-h-orlov.png",
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/orlov.gh/",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.8 1.35a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM12 6.2A5.8 5.8 0 1 1 6.2 12 5.8 5.8 0 0 1 12 6.2Zm0 1.8A4 4 0 1 0 16 12a4 4 0 0 0-4-4Z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:ghorlov@knotsandblades.com",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm1.8.38v.2l7.2 5.4 7.2-5.4v-.2a.45.45 0 0 0-.45-.45H5.25a.45.45 0 0 0-.45.45Zm14.4 2.45-6.66 5a.9.9 0 0 1-1.08 0l-6.66-5v10.67c0 .25.2.45.45.45h13.5c.25 0 .45-.2.45-.45V8.08Z" />
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://x.com/orlovgh",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      ),
    },
  ],
};

// Componente que contiene el contenido principal de la página
function AboutContent({ lang }: { lang: SupportedLang }) {
  const copy = aboutCopy[lang] ?? aboutCopy.en;
  
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <header className="mb-16 text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {copy.title}
        </h1>
        <p className="mt-4 font-serif text-xl text-indigo-200">{copy.name}</p>
        <div className="mt-8 flex justify-center gap-6">
          {authorData.social.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              {item.icon}
            </a>
          ))}
        </div>
      </header>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] shadow-2xl overflow-hidden rounded-sm">
            <Image src={authorData.imageSrc} alt={authorData.name} fill className="object-cover" priority />
          </div>
        </div>

        <div className="space-y-6 font-serif text-lg leading-relaxed text-indigo-50">
          {copy.paragraphs.map((paragraph, index) => (
            <p key={index}>
              {index === 0 ? (
                <>
                  <strong className="text-white">{copy.name.replace(".", "")}</strong>
                  {paragraph.replace("Gregori H. Orlov", "")}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;

  return (
    <main className="bg-[#0d1b2b] text-white">
      <Suspense fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-400 border-t-transparent" />
        </div>
      }>
        <AboutContent lang={lang} />
      </Suspense>
    </main>
  );
}