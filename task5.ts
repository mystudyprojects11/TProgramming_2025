interface Phone {
  number: string;
  model: string;
  getCalledNumber(): string | null;
  setCalledNumber(num: string): void;
  call(): void;
}

function createPhone(number: string, model: string): Phone {
  let calledNumber: string | null = null;

  return {
    number,
    model,

    getCalledNumber(): string | null {
      return calledNumber;
    },

    setCalledNumber(num: string): void {
      calledNumber = num;
    },

    call(): void {
      if (!calledNumber) {
        console.log("Номер вызываемого абонента не задан");
        return;
      }
      console.log(`Вызов с ${this.number} (${this.model}) на ${calledNumber}`);
    },
  };
}

const phone = createPhone("+7-900-123-45-67", "iPhone 15");

console.log("Изначально вызываемый номер:", phone.getCalledNumber());

phone.setCalledNumber("+7-900-555-12-34");
console.log("После установки вызываемый номер:", phone.getCalledNumber());

phone.call();
