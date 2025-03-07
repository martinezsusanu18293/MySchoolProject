// A simple calculator program
const add = (a: number, b: number): number => {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
}

const multiply = (a: number, b: number): number => {
  return a * b;
}

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Main function
function main() {
  console.log("Welcome to the calculator program!");
  const choice = prompt("Please enter a number to add, subtract, multiply, or divide: ");
  switch (choice) {
    case "add":
      const num1 = parseInt(prompt("Enter first number: "));
      const num2 = parseInt(prompt("Enter second number: "));
      console.log(`The result of adding ${num1} and ${num2} is ${add(num1, num2)}`);
      break;
    case "subtract":
      const num3 = parseInt(prompt("Enter first number: "));
      const num4 = parseInt(prompt("Enter second number: "));
      console.log(`The result of subtracting ${num3} and ${num4} is ${subtract(num3, num4)}`);
      break;
    case "multiply":
      const num5 = parseInt(prompt("Enter first number: "));
      const num6 = parseInt(prompt("Enter second number: "));
      console.log(`The result of multiplying ${num5} and ${num6} is ${multiply(num5, num6)}`);
      break;
    case "divide":
      const num7 = parseInt(prompt("Enter first number: "));
      const num8 = parseInt(prompt("Enter second number: "));
      console.log(`The result of dividing ${num7} and ${num8} is ${divide(num7, num8)}`);
      break;
    default:
      console.log("Invalid choice");
  }
}

main();
