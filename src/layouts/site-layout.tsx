import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TopAppBar } from "./top-app-bar";
import { SiteFooter } from "./site-footer";

interface SiteLayoutProps {
  children: ReactNode;
  /** Hero de imagem sangrando sob o app bar (páginas Início e detalhe). */
  bleedTop?: boolean;
}

export function SiteLayout({ children, bleedTop = false }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <TopAppBar />
      <main className={cn("flex-1", bleedTop ? "" : "pt-[104px] md:pt-[112px]")}>{children}</main>
      <SiteFooter />
    </div>
  );
}
