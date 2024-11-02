/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

function faulty_calculator(num1, num2, operator) {
  let random = Math.random() > 0.1;
  console.log(random)



  
  if (random) {
    // faulty calculation
    switch (operator) {
      case "+":
        return num1 - num2;

      case "-":
        return num1 / num2;

      case "*":
        return num1 + num2;

      case "/":
        return num1 ** num2;

      default:
        return "Invalid operation ";
    }
  } else {
    switch (operator) {
      case "+":
        return num1 + num2;

      case "-":
        return num1 - num2;

      case "*":
        return num1 * num2;

      case "/":
        return  num2 !== 0 ? num1 / num2 : "cannot be divide by zero" ;

      default:
        return "Invalid operation";
    }
  }
}

let num1 = prompt("Enter your first number - ");
let operator = prompt("Enter the operator - ");
let num2 = prompt("Enter your second number -");

let result = faulty_calculator(num1, num2, operator);
alert(`The result is : ${result}`);

