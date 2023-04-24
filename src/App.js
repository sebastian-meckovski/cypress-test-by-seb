import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(null);
  const [numberTwo, setNumberTwo] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          type={"number"}
          placeholder="enter a number"
          data-test-id='number-one'
        ></input>
        <input
          value={numberTwo}
          onChange={(e) => {
            setNumberTwo(e.target.value);
          }}
          type={"number"}
          placeholder="enter a number"
          data-test-id='number-two'
        ></input>
        <button
          data-test-id='add-two-numbers'
          onClick={() => {
            setResult(parseInt(number) + parseInt(numberTwo));
          }}
        >
          add two numbers
        </button>
        <p data-test-id='result-label'>{result ? result : 'Enter two numbers'}</p>
        <button
          data-test-id='reset-button'
          onClick={() => {
            setResult(null);
            setNumber(null);
            setNumberTwo(null);
          }}
        >
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
