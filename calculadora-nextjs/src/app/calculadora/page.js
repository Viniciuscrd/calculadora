'use client'
import '../globals.css';
import React, { useState } from 'react';
import { evaluate } from 'mathjs'; 

const Calculadora = () => {
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setResult(evaluate(result).toString() || '');
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setResult('');
        } else if (value === 'CE') {
            setResult(result.slice(0, -1));
        } else {
            setResult(result + value);
        }
    };

    return (
        <>
            <div className="calculator">

                <input
  type="text"
  className="form-control mb-3 calculator-input"
  value={result}
  readOnly
  aria-label="Resultado da calculadora"
/>
                <div className="buttons">
                    <button onClick={() =>
                        handleClick('7')}>7</button>
                    <button onClick={() =>
                        handleClick('8')}>8</button>
                    <button onClick={() =>
                        handleClick('9')}>9</button>
                    <button className="operator" onClick={() =>
                        handleClick('CE')}>CE</button>


                    <button onClick={() => 
                        handleClick('4')}>4</button>
                    <button onClick={() => 
                        handleClick('5')}>5</button>
                    <button onClick={() => 
                        handleClick('6')}>6</button>
                    <button className="operator" onClick={() => 
                        handleClick('/')}>/</button>


                    <button onClick={() => 
                        handleClick('1')}>1</button>
                    <button onClick={() => 
                        handleClick('2')}>2</button>
                    <button onClick={() => 
                        handleClick('3')}>3</button>
                    <button className="operator" onClick={() => 
                        handleClick('*')}>*</button>


                    <button onClick={() => 
                        handleClick('0')}>0</button>
                    <button onClick={() => 
                        handleClick('.')}>.</button>
                    <button onClick={() => 
                        handleClick('00')}>00</button>

                    <button className="operator" onClick={() => 
                        handleClick('-')}>-</button>
                    <button className="operator wide" id='clear' onClick={() => 
                        handleClick('C')}>C</button>

                    <button className="operator" onClick={() => 
                        handleClick('=')}>=</button>

                    <button className="operator" onClick={() => 
                        handleClick('+')}>+</button>

                </div>
            </div>
        </>
    );
};

export default Calculadora;