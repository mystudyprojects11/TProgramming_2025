function createPhone(number, model) {
  let calledNumber = null;

  return {
    number: number,
    model: model,

    getCalledNumber: function () {
      return calledNumber;
    },

    setCalledNumber: function (num) {
      calledNumber = num;
    },

    call: function () {
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
