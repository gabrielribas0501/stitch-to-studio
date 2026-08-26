import { container } from "@/infrastructure/container";
import { ListActivitiesUseCase } from "./use-cases/activities/list-activities.use-case";
import { GetActivityBySlugUseCase } from "./use-cases/activities/get-activity-by-slug.use-case";
import { CreateBookingUseCase } from "./use-cases/bookings/create-booking.use-case";
import { SendContactMessageUseCase } from "./use-cases/contact/send-contact-message.use-case";

/** Casos de uso prontos para consumo pela camada de apresentação. */
export const useCases = {
  listActivities: new ListActivitiesUseCase(container.activityRepository),
  getActivityBySlug: new GetActivityBySlugUseCase(container.activityRepository),
  createBooking: new CreateBookingUseCase(container.activityRepository, container.bookingRepository),
  sendContactMessage: new SendContactMessageUseCase(container.contactMessageRepository),
};
