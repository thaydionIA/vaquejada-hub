import { Event } from "@/types/Event";

export const eventos: Event[] = [
  {
    id: "1",
    title: "Bolão de Vaquejada Rancho Pai e Filho",
    slug: "rancho-pai-filho", 
    description:
      "Evento de vaquejada com grandes competidores, premiação garantida e estrutura completa para vaqueiros e público.",

    date: "02 de Maio de 2026",
    dateISO: "2026-05-02",

    prizeMoney: 1000,
    hasTrophy: false,

    totalTickets: 35,
    ticketPrice: 150,
    ticketLimitPerRider: 3,

    ticketsSold: 35, // 👈 SE FOR IGUAL totalTickets = ESGOTADO

    participants: [
      { nome: "João Silva", cavalo: "Relâmpago" },
      { nome: "Carlos Mendes", cavalo: "Furacão" },
      { nome: "Pedro Alves", cavalo: "Trovão" },
    ],

    hasBar: false,
    faixa: 7,

    parkName: "Rancho Pai e Filho",
    location: "Senador Canedo - GO",

    organizersContacts: ["62 9334-8760", "00000000000"],

    status: "finished",

    image: "/home5.png",

    sponsors: [
      {
        name: "Thaydion Tecnologia",
        logo: "/thaydion-logo.png",
        description: "Patrocinador desta vaquejada",
        website: "https://thaydion.com",
      },
      {
        name: "Rancho Pai e Filho",
        logo: "/home5.png",
        description: "Apoio do parque",
      },
    ],
  },
];
