import type { ActivityRepository } from "@/domain/repositories/activity-repository";
import { toActivityDTO, type ActivityDTO } from "@/application/dtos/activity-dto";
import { NotFoundError } from "@/shared/errors/app-errors";

export class GetActivityBySlugUseCase {
  constructor(private readonly activities: ActivityRepository) {}

  async execute(slug: string): Promise<ActivityDTO> {
    const activity = await this.activities.findBySlug(slug);
    if (!activity) throw new NotFoundError("Aventura não encontrada");
    return toActivityDTO(activity);
  }
}
