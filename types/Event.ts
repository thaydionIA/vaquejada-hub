export type EventStatus = "upcoming" | "ongoing" | "finished";

export interface Participant {
  nome: string;
  cavalo: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  description?: string;
  website?: string;
}

export interface Event {
  dateISO: string | number | Date;
  id: string;
  title: string;
  slug: string;
  description: string;

  date: string;

  prizeMoney: number;
  hasTrophy: boolean;

  totalTickets: number;
  ticketPrice: number;
  ticketLimitPerRider: number;
  
  ticketsSold?: number;
  participants?: Participant[];
  
  hasBar: boolean;
  faixa: number;
  parkName: string;
  location: string;

  organizersContacts: string[];

  status: EventStatus;
  image: string;
  sponsors?: Sponsor[];
}
