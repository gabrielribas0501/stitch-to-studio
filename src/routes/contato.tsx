import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@/components/common/icon";
import { SiteLayout } from "@/layouts/site-layout";
import { COMPANY } from "@/shared/config/navigation";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | RioMonte Aventura" },
      {
        name: "description",
        content:
          "Fale com a RioMonte para tirar dúvidas, solicitar orçamentos ou reservar sua experiência de aventura.",
      },
      { property: "og:title", content: "Contato | RioMonte Aventura" },
      {
        property: "og:description",
        content: "Estamos prontos para planejar sua próxima aventura.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <SiteLayout>
      <div className="container-page py-stack-md">
        <div className="max-w-3xl">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary">
            Entre em Contato
          </h1>
          <p className="mt-stack-sm text-body-lg text-on-surface-variant">
            Estamos prontos para planejar sua próxima aventura. Fale conosco para tirar dúvidas,
            solicitar orçamentos ou reservar sua experiência.
          </p>
        </div>

        <div className="mt-stack-lg grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            { icon: "forum", label: "WhatsApp", value: COMPANY.whatsapp },
            { icon: "mail", label: "E-mail", value: COMPANY.email },
            {
              icon: "location_on",
              label: "Localização",
              value: `${COMPANY.address} — ${COMPANY.city}`,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-surface-container bg-surface-container-lowest p-6 shadow-ambient"
            >
              <Icon name={item.icon} className="text-[28px] text-secondary" />
              <h2 className="mt-3 text-headline-sm text-primary">{item.label}</h2>
              <p className="mt-1 text-body-md text-on-surface-variant">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
