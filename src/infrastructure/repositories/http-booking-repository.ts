import type { BookingProps, NewBookingInput } from "@/domain/entities/booking";
import type { BookingRepository } from "@/domain/repositories/booking-repository";
import { apiRequest } from "../http/api-client";

/** Implementação HTTP: POST /bookings na API NestJS. */
export class HttpBookingRepository implements BookingRepository {
  async create(input: NewBookingInput): Promise<BookingProps> {
    return apiRequest<BookingProps>("/bookings", { method: "POST", body: input });
  }

  async findById(id: string): Promise<BookingProps | null> {
    return apiRequest<BookingProps | null>(`/bookings/${encodeURIComponent(id)}`);
  }
}
