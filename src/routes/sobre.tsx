import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/layouts/site-layout";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a RioMonte | Especialistas em Aventura" },
      {
        name: "description",
        content:
          "Conheça a RioMonte: guias certificados, equipamentos de ponta e respeito inegociável à natureza.",
      },
      { property: "og:title", content: "Sobre a RioMonte" },
      {
        property: "og:description",
        content: "Experiências transformadoras conduzidas por profissionais altamente qualificados.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <SiteLayout>
      <div className="container-page py-stack-md max-w-3xl">
        <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-stack-sm">
          A Natureza na Sua Forma Mais Intensa
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          A RioMonte não é apenas sobre adrenalina; é sobre conexão profunda com o meio ambiente sob
          a orientação de profissionais altamente qualificados. Nosso compromisso é entregar
          experiências transformadoras, combinando equipamentos de última geração com o respeito
          inegociável à natureza.
        </p>
      </div>
    </SiteLayout>
  );
}
