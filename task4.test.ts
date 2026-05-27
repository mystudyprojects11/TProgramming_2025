import { f, taskA, taskB } from "./task4";

let passed = 0;
let failed = 0;

function test(name: string, fn: () => void): void {
  try {
    fn();
    console.log(`OK   ${name}`);
    passed++;
  } catch (e) {
    console.log(`FAIL ${name}: ${(e as Error).message}`);
    failed++;
  }
}

function assertClose(actual: number, expected: number, tol = 1e-9): void {
  if (Math.abs(actual - expected) > tol) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

function assertEqual<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

test("f returns finite value for typical input", () => {
  const y = f(2, 0.8, 0.4);
  if (!Number.isFinite(y)) throw new Error(`not finite: ${y}`);
});

test("f is deterministic for same inputs", () => {
  assertClose(f(3.5, 0.8, 0.4), f(3.5, 0.8, 0.4));
});

test("f depends on a and b (not captured from outer scope)", () => {
  const y1 = f(2, 0.8, 0.4);
  const y2 = f(2, 1.5, 0.9);
  if (y1 === y2) throw new Error("changing a,b did not affect result");
});

test("taskA generates correct number of points", () => {
  const r = taskA(1.23, 7.23, 1.2, 0.8, 0.4);
  assertEqual(r.length, 6);
});

test("taskA respects step dx", () => {
  const r = taskA(0, 2, 0.5, 0.8, 0.4);
  assertClose(r[1].x - r[0].x, 0.5);
});

test("taskA y values match direct f call", () => {
  const r = taskA(1, 3, 1, 0.8, 0.4);
  for (const { x, y } of r) assertClose(y, f(x, 0.8, 0.4));
});

test("taskB returns one result per input x", () => {
  const xs = [1.88, 2.26, 3.84, 4.55, -6.21];
  assertEqual(taskB(xs, 0.8, 0.4).length, xs.length);
});

test("taskB y values match direct f call", () => {
  const xs = [1.88, 2.26, 3.84];
  const r = taskB(xs, 0.8, 0.4);
  r.forEach(({ x, y }, i) => {
    assertEqual(x, xs[i]);
    assertClose(y, f(xs[i], 0.8, 0.4));
  });
});

test("taskB handles negative x", () => {
  const r = taskB([-6.21], 0.8, 0.4);
  if (!Number.isFinite(r[0].y)) throw new Error(`not finite: ${r[0].y}`);
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
