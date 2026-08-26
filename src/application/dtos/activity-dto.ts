import type { Activity, ActivityProps } from "@/domain/entities/activity";

/** DTO serializável (atravessa a fronteira loader -> componente). */
export interface ActivityDTO extends ActivityProps {
  formattedPrice: string;
}

export function toActivityDTO(activity: Activity): ActivityDTO {
  return { ...activity.toJSON(), formattedPrice: activity.price.format() };
}
