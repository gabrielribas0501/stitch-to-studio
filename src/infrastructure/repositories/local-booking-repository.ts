import type { BookingProps, NewBookingInput } from "@/domain/entities/booking";
import type { BookingRepository } from "@/domain/repositories/booking-repository";
import { LocalActivityRepository } from "./local-activity-repository";

/** Reservas em memória para o modo sem backend (demonstração do fluxo). */
export class LocalBookingRepository implements BookingRepository {
  private readonly bookings = new Map<string, BookingProps>();
  private readonly activities = new LocalActivityRepository();

  async create(input: NewBookingInput): Promise<BookingProps> {
    const activity = await this.activities.findBySlug(input.activitySlug);
    if (!activity) throw new Error("Atividade não encontrada");

    const booking: BookingProps = {
      id: `bkg-${Date.now().toString(36)}`,
      activityId: activity.id,
      activitySlug: activity.slug,
      activityName: activity.name,
      customerName: input.customerName,
      customerEmail: input.customerEmail,
      customerPhone: input.customerPhone,
      scheduledFor: input.scheduledFor,
      participants: input.participants,
      totalInCents: activity.totalFor(input.participants).amountInCents,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    this.bookings.set(booking.id, booking);
    return booking;
  }

  async findById(id: string): Promise<BookingProps | null> {
    return this.bookings.get(id) ?? null;
  }
}
