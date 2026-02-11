export type EventStatus = "ongoing" | "upcoming";

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

  hasBar: boolean;

  parkName: string;
  location: string;

  organizersContacts: string[];

  status: EventStatus;
  image: string;
}
