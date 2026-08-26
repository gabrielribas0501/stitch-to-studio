import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@/components/common/icon";
import { SiteLayout } from "@/layouts/site-layout";

const PILLARS = [
  {
    icon: "school",
    title: "Guias capacitados",
    description:
      "Profissionais certificados com treinamento contínuo em primeiros socorros e resgate em áreas remotas.",
  },
  {
    icon: "construction",
    title: "Equipamentos adequados",
    description:
      "Utilizamos materiais de ponta, inspecionados rigorosamente antes de cada atividade e substituídos regularmente.",
  },
  {
    icon: "record_voice_over",
    title: "Orientação prévia",
    description:
      "Briefing completo antes de cada trilha ou escalada, alinhando expectativas e procedimentos operacionais.",
  },
  {
    icon: "nature_people",
    title: "Cuidados com a natureza",
    description:
      "Práticas de mínimo impacto ambiental, garantindo a preservação dos biomas que exploramos.",
  },
];

export const Route = createFileRoute("/seguranca")({
  head: () => ({
    meta: [
      { title: "Segurança | RioMonte Aventura" },
      {
        name: "description",
        content:
          "Padrões internacionais de segurança no turismo de aventura: guias certificados, equipamentos inspecionados e briefing obrigatório.",
      },
      { property: "og:title", content: "Segurança | RioMonte Aventura" },
      {
        property: "og:description",
        content: "A adrenalina não precisa de riscos desnecessários.",
      },
    ],
  }),
  component: SegurancaPage,
});

function SegurancaPage() {
  return (
    <SiteLayout>
      <div className="container-page py-stack-md">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-container/20 px-4 py-2 text-label-bold uppercase tracking-[0.05em] font-bold text-primary">
            <Icon name="verified_user" className="text-[18px]" />
            Nosso Compromisso
          </span>
          <h1 className="mt-stack-sm text-display-lg-mobile md:text-display-lg text-primary">
            Aventura com segurança
          </h1>
          <p className="mt-stack-sm text-body-lg text-on-surface-variant">
            A adrenalina não precisa de riscos desnecessários. Na RioMonte, aplicamos os mais altos
            padrões de segurança do turismo de aventura mundial para garantir que sua única
            preocupação seja aproveitar a paisagem.
          </p>
        </div>

        <div className="mt-stack-lg grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-lg border border-surface-container bg-surface-container-lowest p-6 shadow-ambient"
            >
              <Icon name={pillar.icon} className="text-[32px] text-secondary" />
              <h2 className="mt-4 text-headline-sm text-primary">{pillar.title}</h2>
              <p className="mt-2 text-body-md text-on-surface-variant">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
