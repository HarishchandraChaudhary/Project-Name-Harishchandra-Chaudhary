class Calculator {
    constructor(a, b, operation) {
      this.a = a;
      this.b = b;
      this.operation = operation.toLowerCase(); // make case-insensitive
    }
  
    calculate() {
      switch (this.operation) {
        case 'addition':
          return this.a + this.b;
        case 'subtraction':
          return this.a - this.b;
        case 'multiplication':
          return this.a * this.b;
        case 'division':
          if (this.b !== 0) {
            return this.a / this.b;
          } else {
            return "Error: Division by zero!";
          }
        default:
          return "Error: Unsupported operation!";
      }
    }
  }
  
  const a = parseFloat(prompt("Enter first number (a):"));
  const b = parseFloat(prompt("Enter second number (b):"));
  const operation = prompt("Enter operation (Addition, Subtraction, Multiplication, Division):");
  
  const calc = new Calculator(a, b, operation);
  const result = calc.calculate();

  alert(`Result: ${result}`);
  console.log(`Result: ${result}`);
  