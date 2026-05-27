import { Phone } from "./task5";

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

function assertEqual<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

test("new phone has no called number", () => {
  const p = new Phone("+1", "model");
  assertEqual(p.getCalledNumber(), null);
});

test("number and model are exposed via fields", () => {
  const p = new Phone("+7-900", "iPhone 15");
  assertEqual(p.number, "+7-900");
  assertEqual(p.model, "iPhone 15");
});

test("setCalledNumber stores the value", () => {
  const p = new Phone("+1", "model");
  p.setCalledNumber("+2");
  assertEqual(p.getCalledNumber(), "+2");
});

test("setCalledNumber overwrites previous value", () => {
  const p = new Phone("+1", "model");
  p.setCalledNumber("+2");
  p.setCalledNumber("+3");
  assertEqual(p.getCalledNumber(), "+3");
});

test("call without target returns warning message", () => {
  const p = new Phone("+1", "model");
  assertEqual(p.call(), "Номер вызываемого абонента не задан");
});

test("call with target returns formatted string", () => {
  const p = new Phone("+7-900-123-45-67", "iPhone 15");
  p.setCalledNumber("+7-900-555-12-34");
  assertEqual(
    p.call(),
    "Вызов с +7-900-123-45-67 (iPhone 15) на +7-900-555-12-34",
  );
});

test("instances do not share calledNumber state", () => {
  const a = new Phone("+1", "A");
  const b = new Phone("+2", "B");
  a.setCalledNumber("+9");
  assertEqual(b.getCalledNumber(), null);
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
