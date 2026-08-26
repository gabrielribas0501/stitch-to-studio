import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useCases } from "@/application";
import { ActionButton } from "@/components/common/action-button";
import { Icon } from "@/components/common/icon";
import type { ActivityDTO } from "@/application/dtos/activity-dto";
import { Money } from "@/domain/value-objects/money";

interface BookingFormProps {
  activity: ActivityDTO;
}

const FIELD =
  "w-full rounded border border-surface-container bg-surface-container-lowest px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

/** Painel de reserva: coleta os dados e delega a regra ao caso de uso. */
export function BookingForm({ activity }: BookingFormProps) {
  const today = new Date().toISOString().slice(0, 10);
  const [participants, setParticipants] = useState(2);
  const [scheduledFor, setScheduledFor] = useState(today);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const mutation = useMutation({
    mutationFn: () =>
      useCases.createBooking.execute({
        activitySlug: activity.slug,
        customerName,
        customerEmail,
        customerPhone,
        scheduledFor,
        participants,
      }),
  });

  const total = Money.fromCents(activity.priceInCents * Math.max(participants, 1)).format();

  return (
    <form
      className="rounded-card border border-surface-container bg-surface-container-lowest p-6 shadow-ambient"
      onSubmit={(event) => {
        event.preventDefault();
        mutation.mutate();
      }}
    >
      <p className="text-caption uppercase tracking-[0.05em] font-bold text-on-surface-variant">
        A partir de
      </p>
      <p className="text-headline-md text-primary">
        {activity.formattedPrice}
        <span className="text-body-md text-on-surface-variant"> / pessoa</span>
      </p>

      <div className="mt-stack-sm grid grid-cols-1 gap-4">
        <label className="block">
          <span className="mb-1 block text-label-bold font-bold text-on-surface">Data</span>
          <input
            type="date"
            required
            min={today}
            value={scheduledFor}
            onChange={(event) => setScheduledFor(event.target.value)}
            className={FIELD}
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-label-bold font-bold text-on-surface">
            Participantes (máx. {activity.maxParticipants})
          </span>
          <input
            type="number"
            required
            min={1}
            max={activity.maxParticipants}
            value={participants}
            onChange={(event) => setParticipants(Number(event.target.value))}
            className={FIELD}
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-label-bold font-bold text-on-surface">Nome completo</span>
          <input
            required
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            placeholder="Como devemos te chamar"
            className={FIELD}
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-label-bold font-bold text-on-surface">E-mail</span>
          <input
            type="email"
            required
            value={customerEmail}
            onChange={(event) => setCustomerEmail(event.target.value)}
            placeholder="voce@email.com"
            className={FIELD}
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-label-bold font-bold text-on-surface">WhatsApp</span>
          <input
            required
            value={customerPhone}
            onChange={(event) => setCustomerPhone(event.target.value)}
            placeholder="(21) 99999-0000"
            className={FIELD}
          />
        </label>
      </div>

      <div className="mt-stack-sm flex items-center justify-between border-t border-surface-container pt-4">
        <span className="text-label-bold font-bold uppercase text-on-surface-variant">Total</span>
        <span className="text-headline-sm text-secondary">{total}</span>
      </div>

      <ActionButton type="submit" size="block" className="mt-stack-sm" disabled={mutation.isPending}>
        {mutation.isPending ? "Enviando..." : "Reservar agora"}
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
          Reserva registrada para {mutation.data.participants} participante(s). Nossa equipe
          confirmará por e-mail em até 24h.
        </p>
      ) : null}
    </form>
  );
}
