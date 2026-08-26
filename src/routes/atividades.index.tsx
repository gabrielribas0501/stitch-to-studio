import { createFileRoute } from "@tanstack/react-router";
import { useCases } from "@/application";
import { SiteLayout } from "@/layouts/site-layout";

export const Route = createFileRoute("/atividades/")({
  head: () => ({
    meta: [
      { title: "Atividades de Aventura | RioMonte" },
      {
        name: "description",
        content:
          "Rafting, escalada, trilhas e montanhismo com guias certificados e equipamentos de ponta.",
      },
      { property: "og:title", content: "Atividades de Aventura | RioMonte" },
      {
        property: "og:description",
        content: "Escolha sua aventura: experiências radicais com máxima segurança.",
      },
    ],
  }),
  loader: () => useCases.listActivities({ featuredOnly: true } as never),
  component: AtividadesPage,
});

function AtividadesPage() {
  const activities = Route.useLoaderData();

  return (
    <SiteLayout>
      <div className="container-page py-stack-md">
        <div className="mb-stack-lg text-center max-w-3xl mx-auto">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-4">
            Escolha Sua Aventura
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Experiências radicais com máxima segurança. Encontre a atividade perfeita para o seu
            nível de adrenalina na RioMonte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {activities.map((activity) => (
            <article
              key={activity.id}
              className="group flex flex-col overflow-hidden rounded-card border border-surface-container bg-surface-container-lowest shadow-ambient transition-all duration-300 hover:shadow-ambient-hover hover:scale-[1.02]"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={activity.imageUrl}
                  alt={activity.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl">{activity.emoji}</span>
                  <h2 className="text-headline-sm text-primary">{activity.name}</h2>
                </div>
                <p className="mb-6 flex-1 text-body-md text-on-surface-variant">
                  {activity.shortDescription}
                </p>
                <p className="text-headline-sm text-secondary">{activity.formattedPrice}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
