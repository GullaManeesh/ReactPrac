import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [name, setName] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Card name={name} setName={setName} />
      <About isActive={activeIndex === 0} onShow={() => setActiveIndex(0)} />
      <Contact isActive={activeIndex === 1} onShow={() => setActiveIndex(1)} />
    </>
  );
}

export default App;
