const numButtons = document.querySelectorAll('[data-num]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-retry]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;

    }
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    appendNumber(number) {
        let zero = true;
        if(zero && number == 0){
          zero = false;
          this.clear();
          this.previousOperandTextElement.innerText = 'Error';
        }
        if (number === '.' && this.currentOperand.includes('.'))
        return this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
          this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
      }
    

}


numButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
});

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
});

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
});

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
});

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);