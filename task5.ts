export class Phone {
  calledNumber: string | null = null;

  constructor(public number: string, public model: string) {}

  call(): string {
    if (!this.calledNumber) return "Номер не задан";
    return `Вызов с ${this.number} (${this.model}) на ${this.calledNumber}`;
  }
}

const phone = new Phone("+7-900-123-45-67", "iPhone 15");
phone.calledNumber = "+7-900-555-12-34";
console.log(phone.call());
