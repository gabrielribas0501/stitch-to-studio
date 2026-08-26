export const DIFFICULTY_LEVELS = ["easy", "moderate", "hard"] as const;

export type DifficultyLevel = (typeof DIFFICULTY_LEVELS)[number];

export const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
  easy: "Fácil",
  moderate: "Moderada",
  hard: "Difícil",
};

/** Ordem de intensidade, usada para ordenação e filtros. */
export const DIFFICULTY_WEIGHT: Record<DifficultyLevel, number> = {
  easy: 1,
  moderate: 2,
  hard: 3,
};

export function isDifficultyLevel(value: string): value is DifficultyLevel {
  return (DIFFICULTY_LEVELS as readonly string[]).includes(value);
}
