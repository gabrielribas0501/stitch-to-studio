import type { ContactMessage, ContactMessageInput } from "../entities/contact-message";

export interface ContactMessageRepository {
  send(input: ContactMessageInput): Promise<ContactMessage>;
}
