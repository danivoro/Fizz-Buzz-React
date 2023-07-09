import React, { useState } from 'react';
import './App.css'

function App() {
  const [paralelNumbers, setParalelNumbers] = useState <number[]>([1])

  function generateParalelNumbers(){
    const nextParalelNumber = paralelNumbers[paralelNumbers.length - 1] + 1
    setParalelNumbers([...paralelNumbers, nextParalelNumber])
  }

  function arrayToFizzBuzz(parallelNumbers: number[]): Array<string | number> {
    function fizzBuzz(num: number): string | number {
      if (num % 3 === 0 && num % 5 !== 0) {
        return 'Fizz';
      }
      if (num % 5 === 0 && num % 3 !== 0) {
        return 'Buzz';
      }
      if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
      } else {
        return num;
      }
    }
    return parallelNumbers.map((x) => fizzBuzz(x));
  }
  
  function classForFizzBuzz(value: string | number) {
    if (value === 'Fizz') {
      return 'fizz';
    }
    if (value === 'Buzz') {
      return 'buzz';
    }
    if (value === 'FizzBuzz'){
      return 'fizzbuzz'
    }
    return 'number';
  }
  

  return (
    <>
      <p>
      {arrayToFizzBuzz(paralelNumbers).map((item, index) => (
        <span key={index} className={classForFizzBuzz(item)}>{item} </span>
      ))}
      </p>
      <button onClick={generateParalelNumbers}>Next</button>
    </>
  )
}

export default App;