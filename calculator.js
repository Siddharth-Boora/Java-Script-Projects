function numberInput1Confirm(){
const numberInput1 = document.querySelector('.numberInput1');
number1 = Number(numberInput1.value);
}
function numberInput2Confirm(){
  const numberInput2 = document.querySelector('.numberInput2');
  number2 = Number(numberInput2.value);
}
function calculate() {
  if (operator === "add") {
    result = number1 + number2;
    document.querySelector(".calcSummary").innerHTML = `${number1}+${number2}`;
  } else if (operator === "subtract") {
    result = number1 - number2;
    document.querySelector(".calcSummary").innerHTML = `${number1}-${number2}`;
  } else if (operator === "multiply") {
    result = number1 * number2;
    document.querySelector(".calcSummary").innerHTML = `${number1}&#215;${number2}`;
  } else if (operator === "divide") {
    result = number1 / number2;
    document.querySelector(".calcSummary").innerHTML = `${number1}&#xF7;${number2}`;
  }
  document.querySelector(".resultHTML").innerHTML =`${result}`;
}
let number1;
let number2;
let operator;
let result;
