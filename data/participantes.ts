export type Resultado = "V" | "0" | "-";

export interface Participante {
  eventoSlug: string;
  nome: string;
  cavalo?: string;
  boisDerrubados: number;
  status: "V" | "0" | "-";
  totalBois: number; // ex: 3
  posicao?: 1 | 2 | 3 | 4;
}

export const participantes: Participante[] = [
  {
    eventoSlug: "rancho-pai-filho",  //#01
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#02
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#03
    nome: "Amarildo",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#04
    nome: "Galego",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#05
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#06
    nome: "Rogério",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#07
    nome: "Amarildo",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#08
    nome: "Galego",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#09
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#10
    nome: "Júlio César",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#11
    nome: "Rafael",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#12
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#13
    nome: "Júlio César",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#14
    nome: "Rafael",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#15
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#16
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#17
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#18
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#19
    nome: "Rafael",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#20
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#21
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#22
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#23
    nome: "Ricardo",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#24
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#25
    nome: "Leozinho",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#26
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#27
    nome: "Ricardo",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#28
    nome: "Leozinho",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#29
    nome: "-",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#30
    nome: "Ricardo",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
];
