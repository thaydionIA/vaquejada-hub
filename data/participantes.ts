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
    eventoSlug: "rancho-pai-filho", //#01
    nome: "Dodô",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#02
    nome: "Bruno",
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
    nome: "Galego de Goiânia",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#05
    nome: "Rafael Castro",
    cavalo: "Apolo",
    boisDerrubados: 0,
    totalBois: 1,
    status: "V",
    posicao: 1,
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
    nome: "Galego de Goiânia",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#09
    nome: "Rafael Castro",
    cavalo: "Apolo",
    boisDerrubados: 0,
    totalBois: 1,
    status: "V",
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
    nome: "Bruno",
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
    nome: "Rafael Castro",
    cavalo: "Apolo",
    boisDerrubados: 0,
    totalBois: 1,
    status: "V",
  },
  {
    eventoSlug: "rancho-pai-filho", //#15
    nome: "Lucas",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#16
    nome: "Dodô",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#17
    nome: "Bruno",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#18
    nome: "Rancho Eder neves",
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
    nome: "Ailton",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#21
    nome: "Lucas",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#22
    nome: "Rancho Eder neves",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#23
    nome: "Gordin do Momento",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#24
    nome: "Ailton",
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
    nome: "Gordin do Momento",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#27
    nome: "Rafael",
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
    nome: "josenir",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#30
    nome: "Ailton",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#31
    nome: "Maranhão",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#32
    nome: "Rogério",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#33
    nome: "Rancho Eder neves",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#34
    nome: "josenir",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho", //#35
    nome: "Maranhão",
    cavalo: "-",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
];
