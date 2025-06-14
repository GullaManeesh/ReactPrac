import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./Store/counterSlice";

function App() {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(Number(amount)));
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <p>Count : {value} </p>
      <button onClick={handleDecrement}>-</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="enter Amount"
      />
      <br />
      <br />
      <button onClick={handleIncrementByAmount}>increment by amount</button>
      <br />
      <br />
      <button onClick={handleReset}>reset</button>
    </>
  );
}

export default App;
