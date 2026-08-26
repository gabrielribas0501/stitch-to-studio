import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const actionButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-headline text-label-bold uppercase tracking-[0.05em] font-bold transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        /** CTA principal: laranja queimado, radius 8px, "press" de 2px. */
        primary:
          "bg-secondary text-on-secondary rounded shadow-ambient hover:brightness-90 active:translate-y-[2px]",
        /** Secundário: borda verde 2px, fundo transparente. */
        outline:
          "border-2 border-primary text-primary rounded hover:bg-primary/5 active:translate-y-[2px]",
        /** Pill do app bar. */
        pill: "bg-secondary-container text-on-secondary-container rounded-full hover:brightness-95 active:scale-95",
        ghost: "text-on-surface-variant rounded-full hover:bg-surface-container-high",
      },
      size: {
        sm: "px-4 py-2",
        md: "px-6 py-3",
        lg: "px-8 py-4",
        block: "w-full px-6 py-3",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ActionButtonProps = ComponentProps<"button"> &
  VariantProps<typeof actionButtonVariants> & { asChild?: boolean };

export function ActionButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ActionButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <Component className={cn(actionButtonVariants({ variant, size }), className)} {...props} />
  );
}

export { actionButtonVariants };
