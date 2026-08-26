import { Money } from "../value-objects/money";
import type { DifficultyLevel } from "../value-objects/difficulty";

export const ACTIVITY_CATEGORIES = [
  "rafting",
  "escalada",
  "trilha",
  "montanhismo",
] as const;

export type ActivityCategory = (typeof ACTIVITY_CATEGORIES)[number];

export interface ActivityHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface ActivitySafetyItem {
  icon: string;
  title: string;
  description: string;
}

export interface ActivityProps {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  category: ActivityCategory;
  difficulty: DifficultyLevel;
  shortDescription: string;
  longDescription: string;
  priceInCents: number;
  imageUrl: string;
  durationLabel: string;
  groupLabel: string;
  levelLabel: string;
  minAge: number;
  maxParticipants: number;
  guided: boolean;
  featured: boolean;
  distanceKm?: number;
  elevationGainM?: number;
  includedEquipment: string[];
  whatToBring: string[];
  safety: ActivitySafetyItem[];
}

/**
 * Entidade de domínio Activity: concentra as regras de negócio
 * da experiência vendida (preço, capacidade, idade mínima).
 */
export class Activity {
  private constructor(private readonly props: ActivityProps) {}

  static create(props: ActivityProps): Activity {
    if (!props.slug) throw new Error("Atividade precisa de slug");
    if (props.priceInCents <= 0) throw new Error("Preço inválido");
    if (props.maxParticipants <= 0) throw new Error("Capacidade inválida");
    return new Activity(props);
  }

  get id(): string {
    return this.props.id;
  }
  get slug(): string {
    return this.props.slug;
  }
  get name(): string {
    return this.props.name;
  }
  get emoji(): string {
    return this.props.emoji;
  }
  get category(): ActivityCategory {
    return this.props.category;
  }
  get difficulty(): DifficultyLevel {
    return this.props.difficulty;
  }
  get shortDescription(): string {
    return this.props.shortDescription;
  }
  get longDescription(): string {
    return this.props.longDescription;
  }
  get imageUrl(): string {
    return this.props.imageUrl;
  }
  get durationLabel(): string {
    return this.props.durationLabel;
  }
  get groupLabel(): string {
    return this.props.groupLabel;
  }
  get levelLabel(): string {
    return this.props.levelLabel;
  }
  get minAge(): number {
    return this.props.minAge;
  }
  get maxParticipants(): number {
    return this.props.maxParticipants;
  }
  get guided(): boolean {
    return this.props.guided;
  }
  get featured(): boolean {
    return this.props.featured;
  }
  get distanceKm(): number | undefined {
    return this.props.distanceKm;
  }
  get elevationGainM(): number | undefined {
    return this.props.elevationGainM;
  }
  get includedEquipment(): string[] {
    return this.props.includedEquipment;
  }
  get whatToBring(): string[] {
    return this.props.whatToBring;
  }
  get safety(): ActivitySafetyItem[] {
    return this.props.safety;
  }

  get price(): Money {
    return Money.fromCents(this.props.priceInCents);
  }

  /** Regra de negócio: total da reserva para N participantes. */
  totalFor(participants: number): Money {
    this.assertParticipants(participants);
    return this.price.multiply(participants);
  }

  assertParticipants(participants: number): void {
    if (!Number.isInteger(participants) || participants < 1) {
      throw new Error("Informe ao menos 1 participante");
    }
    if (participants > this.props.maxParticipants) {
      throw new Error(
        `Esta atividade aceita no máximo ${this.props.maxParticipants} participantes por reserva`,
      );
    }
  }

  isTrailLike(): boolean {
    return this.props.category === "trilha" || this.props.category === "montanhismo";
  }

  toJSON(): ActivityProps {
    return { ...this.props };
  }
}
