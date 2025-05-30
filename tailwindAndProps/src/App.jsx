import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/cards";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cards username="john" />
      <Cards />
    </>
  );
}

export default App;
