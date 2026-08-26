import { Activity } from "@/domain/entities/activity";
import type { ActivityFilters, ActivityRepository } from "@/domain/repositories/activity-repository";
import { DIFFICULTY_WEIGHT } from "@/domain/value-objects/difficulty";
import { ACTIVITY_CATALOG } from "../catalog/activity-catalog";

/** Implementação local do catálogo (sem backend). */
export class LocalActivityRepository implements ActivityRepository {
  private readonly activities = ACTIVITY_CATALOG.map((props) => Activity.create(props));

  async list(filters: ActivityFilters = {}): Promise<Activity[]> {
    const categories = filters.categories ?? (filters.category ? [filters.category] : undefined);

    return this.activities
      .filter((activity) => (categories ? categories.includes(activity.category) : true))
      .filter((activity) => (filters.difficulty ? activity.difficulty === filters.difficulty : true))
      .filter((activity) => (filters.guidedOnly ? activity.guided : true))
      .filter((activity) => (filters.featuredOnly ? activity.featured : true))
      .sort((a, b) => DIFFICULTY_WEIGHT[b.difficulty] - DIFFICULTY_WEIGHT[a.difficulty]);
  }

  async findBySlug(slug: string): Promise<Activity | null> {
    return this.activities.find((activity) => activity.slug === slug) ?? null;
  }
}
