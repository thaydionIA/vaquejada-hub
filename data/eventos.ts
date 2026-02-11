import { Event } from "@/types/Event";

export const eventos: Event[] = [
  {
    id: "1",
    title: "Tropa de Elite",
    slug: "tropa-de-elite",
    description:
      "Evento de vaquejada com grandes competidores, premiação garantida e estrutura completa para vaqueiros e público.",

    date: "14 de fevereiro",

    prizeMoney: 3000,
    hasTrophy: true,

    totalTickets: 60,
    ticketPrice: 200,
    ticketLimitPerRider: 3,

    hasBar: true,

    parkName: "Parque Raíz do Sertão",
    location: "Bonfinópolis - GO",

    organizersContacts: ["6299202-4591", "6299494-5226"],

    status: "upcoming",
    image: "/eventos/tropa.jpg"
  },
];
