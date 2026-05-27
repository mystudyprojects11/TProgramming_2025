import { Phone } from "./task5";

const p = new Phone("+1", "iPhone");
console.assert(p.calledNumber === null, "начально null");
console.assert(p.call() === "Номер не задан", "без номера");

p.calledNumber = "+2";
console.assert(p.call() === "Вызов с +1 (iPhone) на +2", "звонок ок");

console.log("Тесты пройдены");
