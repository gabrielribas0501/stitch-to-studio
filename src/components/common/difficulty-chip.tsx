import { DIFFICULTY_LABELS, type DifficultyLevel } from "@/domain/value-objects/difficulty";
import { cn } from "@/lib/utils";

const STYLES: Record<DifficultyLevel, string> = {
  easy: "bg-primary-container/20 text-primary",
  moderate: "bg-secondary-container/30 text-on-secondary-container",
  hard: "bg-secondary text-on-secondary",
};

export function DifficultyChip({
  level,
  className,
}: {
  level: DifficultyLevel;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-caption font-bold uppercase tracking-[0.05em]",
        STYLES[level],
        className,
      )}
    >
      {DIFFICULTY_LABELS[level]}
    </span>
  );
}
