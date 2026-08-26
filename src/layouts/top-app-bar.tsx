import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Icon } from "@/components/common/icon";
import { ActionButton } from "@/components/common/action-button";
import { COMPANY, NAV_ITEMS } from "@/shared/config/navigation";
import { NavigationDrawer } from "./navigation-drawer";

export function TopAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md shadow-sm">
        <div className="container-page flex items-center justify-between py-stack-sm">
          <div className="flex items-center gap-4">
            <button
              aria-label="Abrir menu"
              onClick={() => setDrawerOpen(true)}
              className="md:hidden p-2 rounded-full text-primary hover:bg-surface-container-low transition-colors"
            >
              <Icon name="menu" className="text-[28px]" />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <Icon name="explore" filled className="text-[28px] text-primary" />
              <span className="font-headline text-headline-md font-bold text-secondary">
                {COMPANY.name}
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-gutter">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="font-headline text-label-bold uppercase tracking-[0.05em] font-bold text-on-surface pb-1 border-b-2 border-transparent transition-colors hover:text-secondary"
                activeProps={{ className: "text-secondary border-secondary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ActionButton asChild variant="pill" size="md" className="hidden md:inline-flex">
            <Link to="/atividades">Reservar</Link>
          </ActionButton>
        </div>
      </header>
      <NavigationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
