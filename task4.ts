export function f(x: number, a: number, b: number): number {
  const num = Math.cbrt((x - a) ** 2) + (x + b) ** 0.25;
  const den = Math.sign(x ** 3 - (a + b) ** 2) * Math.abs(x ** 3 - (a + b) ** 2) ** (1 / 7);
  return num / den;
}

export function taskA(xH: number, xK: number, dx: number, a: number, b: number): number[] {
  const ys: number[] = [];
  for (let x = xH; x <= xK + 1e-10; x += dx) ys.push(f(x, a, b));
  return ys;
}

export function taskB(xs: number[], a: number, b: number): number[] {
  return xs.map((x) => f(x, a, b));
}

console.log("Задача A:", taskA(1.23, 7.23, 1.2, 0.8, 0.4));
console.log("Задача B:", taskB([1.88, 2.26, 3.84, 4.55, -6.21], 0.8, 0.4));
