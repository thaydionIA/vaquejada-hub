export type EventStatus = "upcoming" | "ongoing" | "finished";

export interface Participant {
  nome: string;
  cavalo: string;
}

export interface Event {
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

  parkName: string;
  location: string;

  organizersContacts: string[];

  status: EventStatus;
  image: string;
}
