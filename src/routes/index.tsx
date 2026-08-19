import { createFileRoute } from "@tanstack/react-router";

import handsBraille from "@/assets/hands-braille.jpg";
import pDomino from "@/assets/p-domino.jpg";
import pBola from "@/assets/p-bola.jpg";
import pLapis from "@/assets/p-lapis.jpg";
import pAlfabeto from "@/assets/p-alfabeto.jpg";
import pFormas from "@/assets/p-formas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tátil — Soluções acessíveis e produtos sensoriais" },
      {
        name: "description",
        content:
          "A Tátil desenvolve soluções acessíveis em Braille, relevos e sinalizações táteis para autonomia, segurança e inclusão de pessoas com deficiência visual.",
      },
      { property: "og:title", content: "Tátil — Soluções acessíveis e produtos sensoriais" },
      {
        property: "og:description",
        content:
          "Objetos e recursos do cotidiano adaptados com Braille e relevos táteis. Monte seu kit sensorial Tátil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* Braille cell: dots numbered 1-3 (left col, top→bottom), 4-6 (right col) */
const BRAILLE_WORD: { letter: string; dots: number[] }[] = [
  { letter: "t", dots: [2, 3, 4, 5] },
  { letter: "á", dots: [1, 2, 3, 5, 6] },
  { letter: "t", dots: [2, 3, 4, 5] },
  { letter: "i", dots: [2, 4] },
  { letter: "l", dots: [1, 2, 3] },
];

function BrailleCell({ dots, label }: { dots: number[]; label: string }) {
  const order = [1, 4, 2, 5, 3, 6];
  return (
    <div
      className="grid grid-cols-2 gap-x-[0.55rem] gap-y-[0.5rem] sm:gap-x-3 sm:gap-y-[0.7rem]"
      aria-label={label}
    >
      {order.map((n) => (
        <span
          key={n}
          className={
            dots.includes(n)
              ? "braille-dot h-2.5 w-2.5 sm:h-3.5 sm:w-3.5"
              : "h-2.5 w-2.5 sm:h-3.5 sm:w-3.5"
          }
        />
      ))}
    </div>
  );
}

const PRODUCTS = [
  {
    name: "Dominó Adaptado",
    note: "Peças em relevo com contraste alto",
    image: pDomino,
  },
  {
    name: "Bola Sensorial",
    note: "Texturas variadas e guizo interno",
    image: pBola,
  },
  {
    name: "Lápis de Cor pelo Tato",
    note: "Cores identificadas em Braille",
    image: pLapis,
  },
  {
    name: "Alfabeto e Números em Braille",
    note: "Blocos de aprendizagem tátil",
    image: pAlfabeto,
  },
  {
    name: "Formas Geométricas",
    note: "Volumes para orientação espacial",
    image: pFormas,
  },
];

function Index() {
  return (
    <main className="bg-background text-foreground">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-onyx px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 25%, oklch(0.26 0 0) 0%, oklch(0.16 0 0) 55%, oklch(0.1 0 0) 100%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center reveal">
          <p className="eyebrow text-silver/70">Boas-vindas à</p>

          <h1 className="text-silver-metal mt-6 font-serif text-[5.5rem] leading-[0.85] font-medium tracking-tight sm:text-[9rem] lg:text-[12rem]">
            Tátil
          </h1>

          <div
            className="mt-10 flex items-start gap-6 sm:mt-14 sm:gap-10"
            role="img"
            aria-label="A palavra Tátil escrita em Braille"
          >
            {BRAILLE_WORD.map((cell, i) => (
              <BrailleCell key={i} dots={cell.dots} label={cell.letter} />
            ))}
          </div>
        </div>

        <a
          href="#a-tatil"
          className="scroll-cue absolute bottom-10 z-10 flex flex-col items-center gap-3 text-silver/60 transition-colors hover:text-silver"
          aria-label="Rolar para saber mais"
        >
          <span className="eyebrow text-[0.55rem]">Explore</span>
          <svg width="14" height="26" viewBox="0 0 14 26" fill="none" aria-hidden>
            <path
              d="M7 0v22M1 16l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>


      {/* ── Nova Seção 1 — Essência / Introdução ──────────────── */}
      <section id="sobre" className="bg-background px-6 py-28 sm:py-40">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-muted-foreground">A essência da Tátil</p>
          <h2 className="mt-8 max-w-4xl font-serif text-[2.75rem] leading-[1.02] font-normal tracking-tight sm:text-7xl lg:text-[5.5rem]">
            Transformando o toque em possibilidades.
          </h2>
          <div className="mt-12 h-px w-full hairline" />
        </div>

        <figure className="mx-auto mt-14 max-w-7xl">
          <img
            src={handsBraille}
            alt="Close-up dramático em preto e branco de mãos lendo uma página em Braille"
            width={1600}
            height={900}
            loading="lazy"
            className="mono-photo w-full rounded-2xl object-cover aspect-[16/10] sm:aspect-[21/9]"
          />
          <figcaption className="mt-5 eyebrow text-muted-foreground">
            Estudo Tátil — nº 01
          </figcaption>
        </figure>

        <div className="mx-auto mt-16 grid max-w-6xl gap-10 text-[0.98rem] leading-[1.95] font-light text-muted-foreground lg:grid-cols-2 lg:gap-20">
          <p>
            A Tátil atua no desenvolvimento de soluções acessíveis voltadas à autonomia, segurança e
            inclusão de pessoas com deficiência visual. A empresa adapta objetos, informações e
            recursos do cotidiano por meio de elementos como Braille, relevos e sinalizações táteis,
            tornando-os mais acessíveis e funcionais.
          </p>
          <p>
            Os produtos são desenvolvidos a partir das necessidades encontradas no dia a dia,
            buscando facilitar atividades como identificação, orientação, aprendizagem e interação
            em espaços e situações do cotidiano. Dessa forma, a Tátil oferece soluções práticas que
            contribuem para maior independência e participação.
          </p>
        </div>
      </section>

      {/* ── Nova Seção 2 — Coleção Sensorial ──────────────────── */}
      <section id="kit" className="bg-onyx-soft/40 px-6 pb-32 pt-24 sm:pb-40 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">Coleção sensorial</p>
            <h2 className="mt-7 font-serif text-4xl leading-[1.05] font-normal tracking-tight sm:text-6xl">
              Monte seu kit.
            </h2>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-[1.9] font-light text-muted-foreground">
              Peças desenhadas para serem lidas pelas mãos. Escolha os itens e componha um conjunto
              sob medida para cada rotina.
            </p>
          </div>

          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {PRODUCTS.map((p, i) => (
              <li
                key={p.name}
                className={
                  "group card-float overflow-hidden rounded-3xl bg-card text-card-foreground " +
                  (i === 0 ? "lg:col-span-2" : "")
                }
              >
                <div className="overflow-hidden bg-secondary/10">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={900}
                    height={900}
                    loading="lazy"
                    className={
                      "mono-photo w-full object-cover group-hover:scale-[1.04] " +
                      (i === 0 ? "aspect-[16/10]" : "aspect-square")
                    }
                  />
                </div>
                <div className="flex flex-col items-start gap-6 p-7 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-normal tracking-tight">{p.name}</h3>
                    <p className="mt-2 text-sm font-light text-card-foreground/60">{p.note}</p>
                  </div>
                  <button
                    type="button"
                    className="btn-tactile w-full shrink-0 sm:w-auto px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.18em]"
                  >
                    Adicionar ao Kit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="bg-onyx px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
          <span className="text-silver-metal font-serif text-4xl font-medium tracking-tight">
            Tátil
          </span>
          <p className="max-w-md text-sm font-light leading-relaxed text-silver/60">
            Acessibilidade desenhada com precisão. Braille, relevos e sinalizações táteis.
          </p>
          <p className="eyebrow mt-4 text-silver/35">© {new Date().getFullYear()} Tátil</p>
        </div>
      </footer>
    </main>
  );
}
