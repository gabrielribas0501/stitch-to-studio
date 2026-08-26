import type { BookingProps, NewBookingInput } from "../entities/booking";

export interface BookingRepository {
  create(input: NewBookingInput): Promise<BookingProps>;
  findById(id: string): Promise<BookingProps | null>;
}
