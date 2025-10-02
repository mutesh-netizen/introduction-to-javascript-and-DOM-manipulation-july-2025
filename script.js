// ==============================
// Part 1: Variable Declarations & Conditionals
// ==============================
let userName = "Alice";
let userAge = 25;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// ==============================
// Part 2: Custom Functions
// ==============================

function greetUser(name) {
  return `Hello, ${name}! Welcome to the site.`;
}

function squareNumber(num) {
  return num * num;
}

console.log(greetUser("Bob"));
console.log("5 squared is", squareNumber(5));

// ==============================
// Part 3: Loop Examples
// ==============================

// For loop example
console.log("For Loop: Counting 1 to 5");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// While loop example
console.log("While Loop: Counting down from 3");
let counter = 3;
while (counter > 0) {
  console.log(counter);
  counter--;
}

// ==============================
// Part 4: DOM Interactions
// ==============================

// DOM Interaction 1: Changing text content
document.getElementById("main-title").textContent = "JavaScript DOM in Action";

// DOM Interaction 2: Responding to a click event
document.getElementById("greetBtn").addEventListener("click", function () {
  const output = document.getElementById("greetOutput");
  output.textContent = greetUser(userName);
});

// DOM Interaction 3: Dynamically creating list items
const list = document.getElementById("loopList");
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  list.appendChild(li);
}
