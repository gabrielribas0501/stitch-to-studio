import type {
  ActivityFilters,
  ActivityRepository,
} from "@/domain/repositories/activity-repository";
import { toActivityDTO, type ActivityDTO } from "@/application/dtos/activity-dto";

export class ListActivitiesUseCase {
  constructor(private readonly activities: ActivityRepository) {}

  async execute(filters: ActivityFilters = {}): Promise<ActivityDTO[]> {
    const result = await this.activities.list(filters);
    return result.map(toActivityDTO);
  }
}
