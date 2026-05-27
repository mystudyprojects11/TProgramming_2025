const a: number = 0.8;
const b: number = 0.4;
const xH: number = 1.23;
const xK: number = 7.23;
const dx: number = 1.2;
const xB: number[] = [1.88, 2.26, 3.84, 4.55, -6.21];

function f(x: number): number {
  const num = Math.cbrt((x - a) ** 2) + (x + b) ** 0.25;
  const den = Math.sign(x ** 3 - (a + b) ** 2) * Math.abs(x ** 3 - (a + b) ** 2) ** (1 / 7);
  return num / den;
}

console.log("Задача A:");
let x: number = xH;
while (x <= xK + 1e-10) {
  console.log("x =", +x.toFixed(2), " y =", f(x).toFixed(6));
  x += dx;
}

console.log("Задача B:");
xB.forEach((x: number) => console.log("x =", x, " y =", f(x).toFixed(6)));
