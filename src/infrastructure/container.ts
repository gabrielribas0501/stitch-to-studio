import type { ActivityRepository } from "@/domain/repositories/activity-repository";
import type { BookingRepository } from "@/domain/repositories/booking-repository";
import type { ContactMessageRepository } from "@/domain/repositories/contact-message-repository";
import { isApiConfigured } from "./http/api-client";
import { HttpActivityRepository } from "./repositories/http-activity-repository";
import { HttpBookingRepository } from "./repositories/http-booking-repository";
import { HttpContactMessageRepository } from "./repositories/http-contact-message-repository";
import { LocalActivityRepository } from "./repositories/local-activity-repository";
import { LocalBookingRepository } from "./repositories/local-booking-repository";
import { LocalContactMessageRepository } from "./repositories/local-contact-message-repository";

/**
 * Composition root: liga as portas do domínio às implementações concretas.
 * Com VITE_API_URL definido, usa a API NestJS; sem ela, usa os adaptadores locais.
 */
export interface AppContainer {
  activityRepository: ActivityRepository;
  bookingRepository: BookingRepository;
  contactMessageRepository: ContactMessageRepository;
  usingApi: boolean;
}

export const container: AppContainer = isApiConfigured
  ? {
      activityRepository: new HttpActivityRepository(),
      bookingRepository: new HttpBookingRepository(),
      contactMessageRepository: new HttpContactMessageRepository(),
      usingApi: true,
    }
  : {
      activityRepository: new LocalActivityRepository(),
      bookingRepository: new LocalBookingRepository(),
      contactMessageRepository: new LocalContactMessageRepository(),
      usingApi: false,
    };
