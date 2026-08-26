import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useCases } from "@/application";
import { DifficultyChip } from "@/components/common/difficulty-chip";
import { Icon } from "@/components/common/icon";
import { BookingForm } from "@/features/bookings/components/booking-form";
import { SiteLayout } from "@/layouts/site-layout";

export const Route = createFileRoute("/atividades/$slug")({
  loader: async ({ params }) => {
    try {
      return await useCases.getActivityBySlug.execute(params.slug);
    } catch {
      throw notFound();
    }
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Aventura não encontrada | RioMonte" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} | RioMonte Aventura`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.shortDescription },
      ],
    };
  },
  component: ActivityDetailPage,
});

function ActivityDetailPage() {
  const activity = Route.useLoaderData();

  const highlights = [
    { icon: "schedule", label: "Duração", value: activity.durationLabel },
    { icon: "trending_up", label: "Nível", value: activity.levelLabel },
    { icon: "group", label: "Grupo", value: activity.groupLabel },
    { icon: "cake", label: "Idade mínima", value: `${activity.minAge} anos` },
  ];

  return (
    <SiteLayout>
      <div className="container-page py-stack-md">
        <Link
          to="/atividades"
          className="inline-flex items-center gap-1 text-label-bold font-bold uppercase text-on-surface-variant hover:text-primary"
        >
          <Icon name="arrow_back" className="text-[18px]" />
          Atividades
        </Link>

        <div className="mt-stack-sm overflow-hidden rounded-card shadow-ambient">
          <img
            src={activity.imageUrl}
            alt={activity.name}
            className="h-[320px] w-full object-cover md:h-[440px]"
          />
        </div>

        <div className="mt-stack-md grid grid-cols-1 gap-gutter lg:grid-cols-[1fr_380px]">
          <div>
            <DifficultyChip level={activity.difficulty} />
            <h1 className="mt-4 text-display-lg-mobile md:text-display-lg text-primary">
              {activity.emoji} {activity.name}
            </h1>
            <p className="mt-stack-sm text-body-lg text-on-surface-variant">
              {activity.longDescription}
            </p>

            <div className="mt-stack-md grid grid-cols-2 gap-4 md:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-surface-container bg-surface-container-low p-4"
                >
                  <Icon name={item.icon} className="text-[24px] text-secondary" />
                  <p className="mt-2 text-caption uppercase tracking-[0.05em] font-bold text-on-surface-variant">
                    {item.label}
                  </p>
                  <p className="text-body-md font-bold text-on-surface">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-stack-md grid grid-cols-1 gap-gutter md:grid-cols-2">
              <div>
                <h2 className="text-headline-sm text-primary">Equipamentos inclusos</h2>
                <ul className="mt-4 space-y-2">
                  {activity.includedEquipment.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-body-md text-on-surface-variant">
                      <Icon name="check_circle" filled className="text-[20px] text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-headline-sm text-primary">O que levar</h2>
                <ul className="mt-4 space-y-2">
                  {activity.whatToBring.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-body-md text-on-surface-variant">
                      <Icon name="backpack" className="text-[20px] text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-stack-md">
              <h2 className="text-headline-sm text-primary">Segurança nesta atividade</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {activity.safety.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-surface-container bg-surface-container-lowest p-5 shadow-ambient"
                  >
                    <Icon name={item.icon} className="text-[24px] text-primary" />
                    <p className="mt-2 text-body-md font-bold text-on-surface">{item.title}</p>
                    <p className="mt-1 text-body-md text-on-surface-variant">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-[120px] lg:self-start">
            <BookingForm activity={activity} />
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}
