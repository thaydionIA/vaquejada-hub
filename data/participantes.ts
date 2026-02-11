export type Resultado = "V" | "0" | "-";

export interface Participante {
  eventoSlug: string;
  nome: string;
  cavalo?: string;
  boisDerrubados: number;
  totalBois: number; // ex: 3
  posicao?: 1 | 2 | 3 | 4;
}


export const participantes: Participante[] = [
  {
    eventoSlug: "tropa-de-elite",
    nome: "João Silva",
    cavalo: "Relâmpago",
    boisDerrubados: 3,
    totalBois: 3,
    posicao: 1,
  },
  {
    eventoSlug: "tropa-de-elite",
    nome: "Carlos Mendes",
    boisDerrubados: 2,
    totalBois: 3,
  },
  {
    eventoSlug: "tropa-de-elite",
    nome: "Pedro Alves",
    boisDerrubados: 0,
    totalBois: 3,
  },
];
