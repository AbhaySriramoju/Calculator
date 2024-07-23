import React, {useState}from "react";
import { Parser } from 'expr-eval';

import Button from '../Components/Button.js'
import Display from "../Components/Display.js";
import '../../src/App.css'



function Calculator() {
  let [input, setInput] = useState('');

  function handleClick(value) {
    setInput(input + value);
  }

  function handleCal() {
    try {
      const parser = new Parser();
      const calculate = parser.evaluate(input);
      setInput(calculate.toString());
    } catch (error) {
      setInput('Error');
    }
  }

  function handleClear() {
    setInput('');
  }

  return (
    <div className="container">
      <h1>Calculator using React JS</h1>
      <div className="calculator">
        <Display input={input} />
        <Button handleClick={handleClick} handleCal={handleCal} handleClear={handleClear} />
      </div>
    </div>
  );
}

export default Calculator;
