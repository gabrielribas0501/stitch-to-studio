import {
  CONTACT_SUBJECTS,
  type ContactMessage,
  type ContactMessageInput,
} from "@/domain/entities/contact-message";
import type { ContactMessageRepository } from "@/domain/repositories/contact-message-repository";
import { ValidationError } from "@/shared/errors/app-errors";

export class SendContactMessageUseCase {
  constructor(private readonly messages: ContactMessageRepository) {}

  async execute(input: ContactMessageInput): Promise<ContactMessage> {
    if (input.name.trim().length < 3) throw new ValidationError("Informe seu nome");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
      throw new ValidationError("E-mail inválido");
    }
    if (!CONTACT_SUBJECTS.includes(input.subject)) {
      throw new ValidationError("Selecione um assunto");
    }
    if (input.message.trim().length < 10) {
      throw new ValidationError("Escreva uma mensagem com pelo menos 10 caracteres");
    }
    return this.messages.send(input);
  }
}
