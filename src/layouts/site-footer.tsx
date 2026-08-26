import { Icon } from "@/components/common/icon";
import { COMPANY } from "@/shared/config/navigation";

export function SiteFooter() {
  return (
    <footer className="w-full mt-stack-lg bg-tertiary">
      <div className="container-page grid grid-cols-1 md:grid-cols-3 gap-gutter py-stack-md">
        <div className="flex flex-col gap-4">
          <span className="font-headline text-headline-sm text-tertiary-fixed">
            {COMPANY.fullName}
          </span>
          <p className="text-caption text-tertiary-fixed/80">{COMPANY.tagline}</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-headline text-label-bold uppercase tracking-[0.05em] font-bold text-secondary-fixed">
            Redes Sociais
          </span>
          <nav className="flex flex-col gap-2 text-caption">
            {COMPANY.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="w-fit flex items-center gap-2 text-tertiary-fixed/80 transition-colors hover:text-secondary-fixed focus:ring-2 focus:ring-secondary"
              >
                <Icon name={item.icon} className="text-[18px]" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 md:items-end justify-between mt-stack-sm md:mt-0">
          <div className="flex flex-col gap-1 md:items-end text-caption text-tertiary-fixed/80">
            <span className="flex items-center gap-2">
              <Icon name="mail" className="text-[18px]" />
              {COMPANY.email}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="call" className="text-[18px]" />
              {COMPANY.phone}
            </span>
          </div>
          <p className="text-caption text-tertiary-fixed/80 text-left md:text-right">
            © 2024 RioMonte Turismo de Aventura. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
