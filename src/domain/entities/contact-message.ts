export const CONTACT_SUBJECTS = ["duvidas", "reservas", "parcerias"] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export const CONTACT_SUBJECT_LABELS: Record<ContactSubject, string> = {
  duvidas: "Dúvidas Gerais",
  reservas: "Reservas",
  parcerias: "Parcerias",
};

export interface ContactMessageInput {
  name: string;
  email: string;
  subject: ContactSubject;
  message: string;
}

export interface ContactMessage extends ContactMessageInput {
  id: string;
  createdAt: string;
}
