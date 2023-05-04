import React from "react";
import { useState } from "react";

// const buttons = [1,2,3, '/', 4,5,6, '*', 7,8,9, '+', 0,'.','=', '-']

// function Calculator(props){
//     const [inputText, setInputText] = useState('');

//     return (
//         <div className="className">
//             <button>Calculate</button>
//         </div>
//     )
// }
// function Calculator() {
//     const [input, setInput] = useState('0');
//     const [operator, setOperator] = useState(null);
//     const [previousNumber, setPreviousNumber] = useState(null);
  
//     function handleNumberClick(number) {
//       if (input === '0') {
//         setInput(number.toString());
//       } else {
//         setInput(input + number.toString());
//       }
//     }
  
//     function handleOperatorClick(operator) {
//       if (previousNumber !== null) {
//         calculate();
//       }
//       setOperator(operator);
//       setPreviousNumber(parseFloat(input));
//       setInput('0');
//     }
  
//     function handleEqualClick() {
//       calculate();
//       setOperator(null);
//       setPreviousNumber(null);
//     }
  
//     function calculate() {
//       const currentNumber = parseFloat(input);
//       let result;
//       switch (operator) {
//         case '+':
//           result = previousNumber + currentNumber;
//           break;
//         case '-':
//           result = previousNumber - currentNumber;
//           break;
//         case '*':
//           result = previousNumber * currentNumber;
//           break;
//         case '/':
//           result = previousNumber / currentNumber;
//           break;
//         default:
//           result = currentNumber;
//       }
//       setInput(result.toString());
//     }
  
//     return (
//       <div className="calculator">
//         <div className="display">{input}</div>
//         <button onClick={() => handleNumberClick(7)}>7</button>
//         <button onClick={() => handleNumberClick(8)}>8</button>
//         <button onClick={() => handleNumberClick(9)}>9</button>
//         <button onClick={() => handleOperatorClick('/')}>÷</button>
//         <button onClick={() => handleNumberClick(4)}>4</button>
//         <button onClick={() => handleNumberClick(5)}>5</button>
//         <button onClick={() => handleNumberClick(6)}>6</button>
//         <button onClick={() => handleOperatorClick('*')}>×</button>
//         <button onClick={() => handleNumberClick(1)}>1</button>
//         <button onClick={() => handleNumberClick(2)}>2</button>
//         <button onClick={() => handleNumberClick(3)}>3</button>
//         <button onClick={() => handleOperatorClick('-')}>-</button>
//         <button onClick={() => handleNumberClick(0)}>0</button>
//         <button onClick={() => handleNumberClick('.')}>.</button>
//         <button onClick={() => handleEqualClick()}>=</button>
//         <button onClick={() => handleOperatorClick('+')}>+</button>
//       </div>
//     );
//   }
  function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
  
    const handleInput = (event) => {
      setInput(event.target.value);
    };
  
    const handleClear = () => {
      setInput("");
      setResult("");
    };
  
    const handleCalculation = () => {
      setResult(eval(input));
    };
  
    return (
      <div>
        <h2>Calculator</h2>
        <input type="text" value={input} onChange={handleInput} />
        <br />
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleCalculation}>=</button>
        <br />
        <span>{result}</span>
      </div>
    );
  }

export default Calculator;