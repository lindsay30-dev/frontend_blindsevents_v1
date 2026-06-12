/**
 * Modèles de statistiques basés sur l'API Django
 */
export interface PaymentSplit {
  orange_money: {
    amount: number;
    pct: number;
  };
  mtn_momo: {
    amount: number;
    pct: number;
  };
}

export interface EventStats {
  id: number;
  title: string;
  date: string;
  status: string;
  capacity: number;
  sold: number;
  revenue: number;
}

export interface DashboardStats {
  total_events: number;
  active_events: number;
  total_bookings: number;
  total_revenue: number;
  total_sold: number;
  events_stats: EventStats[];
  payment_split: PaymentSplit;
}

export interface EventDetailStats {
  event_id: number;
  event_title: string;
  total_bookings: number;
  total_sold: number;
  total_revenue: number;
  available_spots: number;
  fill_rate: number;
  by_ticket_type: {
    ticket_type__name: string;
    ticket_type__price: number;
    total_qty: number;
    total_revenue: number;
  }[];
}
