import { f, taskA, taskB } from "./task4";

console.assert(f(2, 0.8, 0.4) === f(2, 0.8, 0.4), "f детерминирована");
console.assert(f(2, 0.8, 0.4) !== f(2, 1.5, 0.9), "f зависит от a,b");
console.assert(taskA(1.23, 7.23, 1.2, 0.8, 0.4).length === 6, "taskA: 6 точек");
console.assert(taskB([1, 2, 3], 0.8, 0.4).length === 3, "taskB: длина совпадает");

console.log("Тесты пройдены");
