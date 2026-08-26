import type { Activity, ActivityCategory } from "../entities/activity";
import type { DifficultyLevel } from "../value-objects/difficulty";

export interface ActivityFilters {
  category?: ActivityCategory;
  categories?: ActivityCategory[];
  difficulty?: DifficultyLevel;
  guidedOnly?: boolean;
  featuredOnly?: boolean;
}

/** Porta (interface) do domínio — implementações vivem na infraestrutura. */
export interface ActivityRepository {
  list(filters?: ActivityFilters): Promise<Activity[]>;
  findBySlug(slug: string): Promise<Activity | null>;
}
