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
    eventoSlug: "rancho-pai-filho",
    nome: "Participantes exemplo 01",
    cavalo: "Relâmpago - ex",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
  {
    eventoSlug: "rancho-pai-filho",
    nome: "Jeronimo",
    cavalo: "Participantes exemplo 02",
    boisDerrubados: 0,
    totalBois: 1,
    status: "-",
  },
 
];
