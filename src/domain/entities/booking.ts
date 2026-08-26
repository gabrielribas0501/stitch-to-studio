export const BOOKING_STATUSES = ["pending", "confirmed", "cancelled"] as const;

export type BookingStatus = (typeof BOOKING_STATUSES)[number];

export interface BookingProps {
  id: string;
  activityId: string;
  activitySlug: string;
  activityName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  scheduledFor: string;
  participants: number;
  totalInCents: number;
  status: BookingStatus;
  createdAt: string;
}

export interface NewBookingInput {
  activitySlug: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  scheduledFor: string;
  participants: number;
}

/** Regra de negócio: reserva só pode ser feita para data futura. */
export function assertBookingDateIsInFuture(scheduledFor: string, now = new Date()): void {
  const date = new Date(`${scheduledFor}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    throw new Error("Data da aventura inválida");
  }
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (date.getTime() < today.getTime()) {
    throw new Error("Escolha uma data a partir de hoje");
  }
}
