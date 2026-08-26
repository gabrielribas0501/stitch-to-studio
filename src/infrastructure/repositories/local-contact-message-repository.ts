import type { ContactMessage, ContactMessageInput } from "@/domain/entities/contact-message";
import type { ContactMessageRepository } from "@/domain/repositories/contact-message-repository";

export class LocalContactMessageRepository implements ContactMessageRepository {
  async send(input: ContactMessageInput): Promise<ContactMessage> {
    return { ...input, id: `msg-${Date.now().toString(36)}`, createdAt: new Date().toISOString() };
  }
}
