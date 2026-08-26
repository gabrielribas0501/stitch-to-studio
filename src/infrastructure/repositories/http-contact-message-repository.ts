import type { ContactMessage, ContactMessageInput } from "@/domain/entities/contact-message";
import type { ContactMessageRepository } from "@/domain/repositories/contact-message-repository";
import { apiRequest } from "../http/api-client";

export class HttpContactMessageRepository implements ContactMessageRepository {
  async send(input: ContactMessageInput): Promise<ContactMessage> {
    return apiRequest<ContactMessage>("/contact-messages", { method: "POST", body: input });
  }
}
