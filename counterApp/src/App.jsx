import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const inc = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  };
  const dec = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Counter App:</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={inc}>Add value</button>
      <br />
      <br />
      <button onClick={dec}>Remove value</button>
    </>
  );
}

export default App;
