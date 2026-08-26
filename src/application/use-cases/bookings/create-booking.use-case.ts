import { assertBookingDateIsInFuture, type BookingProps } from "@/domain/entities/booking";
import type { ActivityRepository } from "@/domain/repositories/activity-repository";
import type { BookingRepository } from "@/domain/repositories/booking-repository";
import { NotFoundError, ValidationError } from "@/shared/errors/app-errors";

export interface CreateBookingCommand {
  activitySlug: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  scheduledFor: string;
  participants: number;
}

/**
 * Caso de uso de reserva: valida data, capacidade e calcula o total
 * pela regra da entidade Activity antes de persistir.
 */
export class CreateBookingUseCase {
  constructor(
    private readonly activities: ActivityRepository,
    private readonly bookings: BookingRepository,
  ) {}

  async execute(command: CreateBookingCommand): Promise<BookingProps> {
    const activity = await this.activities.findBySlug(command.activitySlug);
    if (!activity) throw new NotFoundError("Aventura não encontrada");

    if (command.customerName.trim().length < 3) {
      throw new ValidationError("Informe seu nome completo");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(command.customerEmail)) {
      throw new ValidationError("E-mail inválido");
    }
    if (command.customerPhone.replace(/\D/g, "").length < 10) {
      throw new ValidationError("Telefone inválido");
    }

    assertBookingDateIsInFuture(command.scheduledFor);

    try {
      activity.assertParticipants(command.participants);
    } catch (error) {
      throw new ValidationError((error as Error).message);
    }

    return this.bookings.create(command);
  }
}
