import { createFileRoute, Link } from "@tanstack/react-router";
import { useCases } from "@/application";
import { ActionButton } from "@/components/common/action-button";
import { Icon } from "@/components/common/icon";
import { SiteLayout } from "@/layouts/site-layout";
import { COMPANY } from "@/shared/config/navigation";
import heroRiver from "@/assets/hero-river.jpg";
import guidePortrait from "@/assets/guide-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RioMonte Aventura | Rafting, Trilhas e Montanhismo" },
      {
        name: "description",
        content:
          "Viva a aventura com a RioMonte: rafting classe IV, escalada, trilhas e montanhismo com guias certificados em Teresópolis.",
      },
      { property: "og:title", content: "RioMonte Aventura | Turismo de Aventura" },
      {
        property: "og:description",
        content:
          "Rafting, escalada, trilhas e montanhismo com guias certificados e segurança de padrão internacional.",
      },
    ],
  }),
  loader: () => useCases.listActivities.execute(),
  component: HomePage,
});

function HomePage() {
  const activities = Route.useLoaderData().slice(0, 4);

  return (
    <SiteLayout bleedTop>
      <section className="relative min-h-[88vh] flex items-end">
        <img
          src={heroRiver}
          alt="Grupo descendo corredeiras em bote de rafting cercado por mata atlântica"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/50 to-on-surface/10" />
        <div className="container-page relative pb-stack-lg pt-40">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface/15 px-4 py-2 text-label-bold uppercase font-bold text-surface backdrop-blur-sm">
            <Icon name="explore" className="text-[18px]" />
            {COMPANY.fullName}
          </span>
          <h1 className="mt-stack-sm max-w-3xl text-display-lg-mobile md:text-display-lg text-surface">
            Viva a aventura na natureza mais intensa
          </h1>
          <p className="mt-stack-sm max-w-xl text-body-lg text-surface/85">{COMPANY.tagline}</p>
          <div className="mt-stack-md flex flex-wrap gap-4">
            <ActionButton asChild size="lg">
              <Link to="/atividades">Viva a aventura</Link>
            </ActionButton>
            <ActionButton asChild variant="pill" size="lg">
              <Link to="/seguranca">Nossa segurança</Link>
            </ActionButton>
          </div>
        </div>
      </section>

      <section className="container-page py-stack-lg grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <div className="overflow-hidden rounded-card shadow-ambient">
          <img
            src={guidePortrait}
            alt="Guia certificado da RioMonte com equipamento de escalada"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-headline-md text-primary">Quem conduz a sua jornada</h2>
          <p className="mt-stack-sm text-body-lg text-on-surface-variant">
            Somos uma equipe de guias certificados apaixonados por montanha e rio. Cada expedição é
            planejada em detalhe: briefing completo, equipamentos inspecionados e grupos reduzidos
            para que você aproveite a paisagem com total tranquilidade.
          </p>
          <div className="mt-stack-md grid grid-cols-3 gap-4">
            {[
              { value: "12+", label: "anos de operação" },
              { value: "8k", label: "aventureiros guiados" },
              { value: "100%", label: "guias certificados" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-headline-sm text-secondary">{stat.value}</p>
                <p className="text-caption text-on-surface-variant">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-stack-lg">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-headline-md text-primary">Aventuras em destaque</h2>
            <Link to="/atividades" className="text-label-bold font-bold uppercase text-secondary">
              Ver todas as atividades
            </Link>
          </div>

          <div className="mt-stack-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {activities.map((activity) => (
              <article
                key={activity.id}
                className="group overflow-hidden rounded-card border border-surface-container bg-surface-container-lowest shadow-ambient transition-all duration-300 hover:shadow-ambient-hover hover:scale-[1.02]"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={activity.imageUrl}
                    alt={activity.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-headline-sm text-primary">
                    {activity.emoji} {activity.name}
                  </p>
                  <p className="mt-2 text-body-md text-on-surface-variant line-clamp-3">
                    {activity.shortDescription}
                  </p>
                  <p className="mt-4 text-label-bold font-bold uppercase text-secondary">
                    {activity.formattedPrice}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-stack-lg">
        <div className="rounded-card bg-primary px-6 py-stack-md text-center shadow-ambient">
          <h2 className="text-headline-md text-on-primary">Pronto para a próxima expedição?</h2>
          <p className="mx-auto mt-stack-sm max-w-xl text-body-lg text-on-primary/80">
            Fale com nossa equipe e monte um roteiro sob medida para o seu grupo.
          </p>
          <div className="mt-stack-md flex justify-center">
            <ActionButton asChild size="lg">
              <Link to="/contato">Falar com a equipe</Link>
            </ActionButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
