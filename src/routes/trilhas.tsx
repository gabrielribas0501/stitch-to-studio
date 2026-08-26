import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCases } from "@/application";
import { DifficultyChip } from "@/components/common/difficulty-chip";
import { Icon } from "@/components/common/icon";
import { SiteLayout } from "@/layouts/site-layout";
import {
  DIFFICULTY_LABELS,
  DIFFICULTY_LEVELS,
  type DifficultyLevel,
} from "@/domain/value-objects/difficulty";

export const Route = createFileRoute("/trilhas")({
  head: () => ({
    meta: [
      { title: "Trilhas e Montanhismo | RioMonte Aventura" },
      {
        name: "description",
        content:
          "Trilhas guiadas e expedições de montanhismo: Pico da Neblina, Cachoeira Escondida e Vales Dourados.",
      },
      { property: "og:title", content: "Trilhas e Montanhismo | RioMonte" },
      {
        property: "og:description",
        content: "Percursos guiados para todos os níveis, do passeio leve à expedição de três dias.",
      },
    ],
  }),
  loader: () => useCases.listActivities.execute({ categories: ["trilha", "montanhismo"] }),
  component: TrilhasPage,
});

function TrilhasPage() {
  const trails = Route.useLoaderData();
  const [difficulty, setDifficulty] = useState<DifficultyLevel | "all">("all");

  const visible = difficulty === "all" ? trails : trails.filter((t) => t.difficulty === difficulty);

  return (
    <SiteLayout>
      <div className="container-page py-stack-md">
        <h1 className="text-display-lg-mobile md:text-display-lg text-primary">
          Trilhas e Montanhismo
        </h1>
        <p className="mt-stack-sm max-w-2xl text-body-lg text-on-surface-variant">
          Percursos guiados por profissionais que conhecem cada pedra do caminho — do passeio leve
          em cachoeira à expedição de alta montanha.
        </p>

        <div className="mt-stack-md flex flex-wrap gap-3" role="group" aria-label="Filtrar por dificuldade">
          {(["all", ...DIFFICULTY_LEVELS] as const).map((level) => {
            const active = difficulty === level;
            return (
              <button
                key={level}
                type="button"
                onClick={() => setDifficulty(level)}
                aria-pressed={active}
                className={`rounded-full px-4 py-2 text-label-bold font-bold uppercase tracking-[0.05em] transition-colors ${
                  active
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {level === "all" ? "Todas" : DIFFICULTY_LABELS[level]}
              </button>
            );
          })}
        </div>

        <div className="mt-stack-md grid grid-cols-1 gap-gutter md:grid-cols-3">
          {visible.map((trail) => (
            <Link
              key={trail.id}
              to="/atividades/$slug"
              params={{ slug: trail.slug }}
              className="group flex flex-col overflow-hidden rounded-card border border-surface-container bg-surface-container-lowest shadow-ambient transition-all duration-300 hover:shadow-ambient-hover hover:scale-[1.02]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={trail.imageUrl}
                  alt={trail.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <DifficultyChip level={trail.difficulty} className="self-start" />
                <h2 className="mt-3 text-headline-sm text-primary">{trail.name}</h2>
                <p className="mt-2 flex-1 text-body-md text-on-surface-variant">
                  {trail.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-caption text-on-surface-variant">
                  <span className="inline-flex items-center gap-1">
                    <Icon name="schedule" className="text-[16px]" />
                    {trail.durationLabel}
                  </span>
                  {trail.distanceKm ? (
                    <span className="inline-flex items-center gap-1">
                      <Icon name="straighten" className="text-[16px]" />
                      {trail.distanceKm} km
                    </span>
                  ) : null}
                  {trail.elevationGainM ? (
                    <span className="inline-flex items-center gap-1">
                      <Icon name="terrain" className="text-[16px]" />
                      {trail.elevationGainM} m
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-label-bold font-bold uppercase text-secondary">
                  {trail.formattedPrice}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-stack-md text-body-lg text-on-surface-variant">
            Nenhuma trilha nesse nível de dificuldade.
          </p>
        ) : null}
      </div>
    </SiteLayout>
  );
}
