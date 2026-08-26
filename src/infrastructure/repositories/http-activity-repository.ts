import { Activity, type ActivityProps } from "@/domain/entities/activity";
import type { ActivityFilters, ActivityRepository } from "@/domain/repositories/activity-repository";
import { apiRequest } from "../http/api-client";

interface PaginatedResponse<T> {
  data: T[];
  total: number;
}

/** Implementação HTTP: consome a API NestJS (GET /activities). */
export class HttpActivityRepository implements ActivityRepository {
  async list(filters: ActivityFilters = {}): Promise<Activity[]> {
    const response = await apiRequest<PaginatedResponse<ActivityProps>>("/activities", {
      query: {
        category: filters.categories?.join(",") ?? filters.category,
        difficulty: filters.difficulty,
        guided: filters.guidedOnly ? true : undefined,
        featured: filters.featuredOnly ? true : undefined,
      },
    });
    return response.data.map((props) => Activity.create(props));
  }

  async findBySlug(slug: string): Promise<Activity | null> {
    const props = await apiRequest<ActivityProps | null>(
      `/activities/${encodeURIComponent(slug)}`,
    );
    return props ? Activity.create(props) : null;
  }
}
