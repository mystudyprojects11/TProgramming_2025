export function f(x: number, a: number, b: number): number {
  const num = Math.cbrt((x - a) ** 2) + (x + b) ** 0.25;
  const denArg = x ** 3 - (a + b) ** 2;
  const den = Math.sign(denArg) * Math.abs(denArg) ** (1 / 7);
  return num / den;
}

export function taskA(
  xH: number,
  xK: number,
  dx: number,
  a: number,
  b: number,
): Array<{ x: number; y: number }> {
  const results: Array<{ x: number; y: number }> = [];
  for (let x = xH; x <= xK + 1e-10; x += dx) {
    results.push({ x, y: f(x, a, b) });
  }
  return results;
}

export function taskB(
  xs: number[],
  a: number,
  b: number,
): Array<{ x: number; y: number }> {
  return xs.map((x) => ({ x, y: f(x, a, b) }));
}

if (require.main === module) {
  const a = 0.8;
  const b = 0.4;

  console.log("Задача A:");
  for (const { x, y } of taskA(1.23, 7.23, 1.2, a, b)) {
    console.log("x =", +x.toFixed(2), " y =", y.toFixed(6));
  }

  console.log("Задача B:");
  for (const { x, y } of taskB([1.88, 2.26, 3.84, 4.55, -6.21], a, b)) {
    console.log("x =", x, " y =", y.toFixed(6));
  }
}
