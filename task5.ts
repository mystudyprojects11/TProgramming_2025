export class Phone {
  number: string;
  model: string;
  private calledNumber: string | null = null;

  constructor(number: string, model: string) {
    this.number = number;
    this.model = model;
  }

  getCalledNumber(): string | null {
    return this.calledNumber;
  }

  setCalledNumber(num: string): void {
    this.calledNumber = num;
  }

  call(): string {
    if (!this.calledNumber) {
      return "Номер вызываемого абонента не задан";
    }
    return `Вызов с ${this.number} (${this.model}) на ${this.calledNumber}`;
  }
}

if (require.main === module) {
  const phone = new Phone("+7-900-123-45-67", "iPhone 15");
  console.log("Изначально вызываемый номер:", phone.getCalledNumber());
  phone.setCalledNumber("+7-900-555-12-34");
  console.log("После установки вызываемый номер:", phone.getCalledNumber());
  console.log(phone.call());
}
