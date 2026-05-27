const a = 0.8;
const b = 0.4;
const xH = 1.23;
const xK = 7.23;
const dx = 1.2;
const xB = [1.88, 2.26, 3.84, 4.55, -6.21];

function f(x) {
  const num = Math.cbrt((x - a) ** 2) + (x + b) ** 0.25;
  const den = Math.sign(x ** 3 - (a + b) ** 2) * Math.abs(x ** 3 - (a + b) ** 2) ** (1 / 7);
  return num / den;
}

const xA = [];
for (let x = xH; x <= xK + 1e-10; x += dx) {
  xA.push(x);
}

console.log("Задача A:");
for (let i = 0; i < xA.length; i++) {
  console.log("x =", +xA[i].toFixed(2), " y =", f(xA[i]).toFixed(6));
}

console.log("Задача B:");
for (let i = 0; i < xB.length; i++) {
  console.log("x =", xB[i], " y =", f(xB[i]).toFixed(6));
}
