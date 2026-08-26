/**
 * Value object de dinheiro. Imutável, sem dependência de framework.
 */
export class Money {
  private constructor(
    readonly amountInCents: number,
    readonly currency: string,
  ) {}

  static fromCents(amountInCents: number, currency = "BRL"): Money {
    if (!Number.isInteger(amountInCents) || amountInCents < 0) {
      throw new Error("Valor monetário inválido");
    }
    return new Money(amountInCents, currency);
  }

  multiply(factor: number): Money {
    if (!Number.isInteger(factor) || factor < 0) {
      throw new Error("Fator inválido");
    }
    return new Money(this.amountInCents * factor, this.currency);
  }

  format(locale = "pt-BR"): string {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: this.currency,
      maximumFractionDigits: this.amountInCents % 100 === 0 ? 0 : 2,
    }).format(this.amountInCents / 100);
  }
}
