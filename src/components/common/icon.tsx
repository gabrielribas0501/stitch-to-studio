import { cn } from "@/lib/utils";

interface IconProps {
  name: string;
  filled?: boolean;
  className?: string;
}

/** Wrapper dos Material Symbols usados no design original. */
export function Icon({ name, filled = false, className }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("material-symbols-outlined select-none", className)}
      data-filled={filled ? "true" : "false"}
    >
      {name}
    </span>
  );
}
