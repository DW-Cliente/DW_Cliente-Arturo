import { users } from "./users.js";

/********************
 * Section 1
 ********************/
console.log("----------- Section 1 ------------");

const admins = users
  .toSorted((u1, u2) => u1.age - u2.age)
  .values()
  .filter((u) => u.role === "admin")
  .map((u) => ({ email: u.email, password: u.password }))
  .take(3)
  .toArray();

console.log(admins);

/********************
 * Section 2
 ********************/
console.log("----------- Section 2 ------------");

const pc1 = users
  .values()
  .filter((u) => u.authorizations.includes("PC1"))
  .map((u) => u.name);
const setPc1 = new Set(pc1);

const pc9 = users
  .values()
  .filter((u) => u.authorizations.includes("PC9"))
  .map((u) => u.name);
const setPc9 = new Set(pc9);

const listFormat = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

console.log(`PC1: ${listFormat.format(setPc1)}`);
console.log(`PC9: ${listFormat.format(setPc9)}`);
console.log(`PC1 and PC9: ${listFormat.format(setPc1.intersection(setPc9))}`);

/********************
 * Section 3
 ********************/
console.log("----------- Section 3 ------------");

const secure = users
  .values()
  .filter((u) => u.password.length > 5)
  .filter((u) => /[a-z]/.test(u.password))
  .filter((u) => /[A-Z]/.test(u.password))
  .filter((u) => /[0-9]/.test(u.password))
  .filter((u) => /[^0-9a-zA-Z]/.test(u.password))
  .map((u) => `${u.name} -> ${u.password}`)
  .toArray();

console.log(secure);

/********************
 * Section 4
 ********************/
console.log("----------- Section 4 ------------");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const pos = getRandomInt(users.length);

const dateFormat = new Intl.DateTimeFormat('en', {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: 'numeric', minute: 'numeric', second: 'numeric', hourCycle: 'h24'
});

const user = {...users[pos], lastAccess: dateFormat.format(new Date())};

console.log("Modified user:");
console.log(user);

console.log("Original user:");
console.log(users[pos]);
