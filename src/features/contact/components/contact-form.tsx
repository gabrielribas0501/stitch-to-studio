import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useCases } from "@/application";
import { ActionButton } from "@/components/common/action-button";
import { Icon } from "@/components/common/icon";
import {
  CONTACT_SUBJECTS,
  CONTACT_SUBJECT_LABELS,
  type ContactSubject,
} from "@/domain/entities/contact-message";

const FIELD =
  "w-full rounded border border-surface-container bg-surface-container-lowest px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<ContactSubject>("duvidas");
  const [message, setMessage] = useState("");

  const mutation = useMutation({
    mutationFn: () => useCases.sendContactMessage.execute({ name, email, subject, message }),
    onSuccess: () => setMessage(""),
  });

  return (
    <form
      className="rounded-card border border-surface-container bg-surface-container-lowest p-6 shadow-ambient"
      onSubmit={(event) => {
        event.preventDefault();
        mutation.mutate();
      }}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-label-bold font-bold text-on-surface">Nome</span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Seu nome"
            className={FIELD}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-label-bold font-bold text-on-surface">E-mail</span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="voce@email.com"
            className={FIELD}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1 block text-label-bold font-bold text-on-surface">Assunto</span>
        <select
          value={subject}
          onChange={(event) => setSubject(event.target.value as ContactSubject)}
          className={FIELD}
        >
          {CONTACT_SUBJECTS.map((option) => (
            <option key={option} value={option}>
              {CONTACT_SUBJECT_LABELS[option]}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 block">
        <span className="mb-1 block text-label-bold font-bold text-on-surface">Mensagem</span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Conte para nós o que você procura"
          className={FIELD}
        />
      </label>

      <ActionButton type="submit" size="block" className="mt-stack-sm" disabled={mutation.isPending}>
        {mutation.isPending ? "Enviando..." : "Enviar mensagem"}
      </ActionButton>

      {mutation.isError ? (
        <p role="alert" className="mt-4 flex items-start gap-2 text-body-md text-error">
          <Icon name="error" className="text-[20px]" />
          {(mutation.error as Error).message}
        </p>
      ) : null}

      {mutation.isSuccess ? (
        <p className="mt-4 flex items-start gap-2 text-body-md text-primary">
          <Icon name="check_circle" filled className="text-[20px]" />
          Mensagem enviada! Responderemos em até 1 dia útil.
        </p>
      ) : null}
    </form>
  );
}
