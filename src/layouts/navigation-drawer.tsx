import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/common/icon";
import { COMPANY, NAV_ITEMS } from "@/shared/config/navigation";
import { cn } from "@/lib/utils";

interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function NavigationDrawer({ open, onClose }: NavigationDrawerProps) {
  return (
    <div className={cn("fixed inset-0 z-60 md:hidden", open ? "" : "pointer-events-none")}>
      <button
        aria-label="Fechar menu"
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-on-surface/20 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <nav
        className={cn(
          "relative h-full w-72 rounded-r-xl bg-surface shadow-xl flex flex-col py-stack-md transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="px-gutter mb-8 flex items-center justify-between">
          <span className="font-headline text-headline-sm text-secondary">{COMPANY.fullName}</span>
          <button
            aria-label="Fechar menu"
            onClick={onClose}
            className="p-2 rounded-full text-on-surface hover:bg-surface-container hover:text-secondary transition-colors"
          >
            <Icon name="close" />
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              activeOptions={{ exact: item.to === "/" }}
              className="mx-2 px-4 py-3 rounded-full flex items-center gap-4 font-headline text-label-bold uppercase tracking-[0.05em] font-bold text-on-surface-variant transition-all duration-150 hover:bg-surface-container-highest active:scale-[0.98]"
              activeProps={{ className: "bg-secondary-container text-on-secondary-container" }}
            >
              <Icon name={item.icon} />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
