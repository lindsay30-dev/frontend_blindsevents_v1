/**
 * Modèles de types de billets basés sur l'API Django
 */
export interface TicketType {
  id: number;
  event: number;
  name: string;
  price: number;
  quantity: number;
  remaining: number;
  sale_start?: string;
  sale_end?: string;
}

export interface TicketTypeCreate {
  event: number;
  name: string;
  price: number;
  quantity: number;
  sale_start?: string;
  sale_end?: string;
}

export interface TicketTypeUpdate extends Partial<TicketTypeCreate> {
}
