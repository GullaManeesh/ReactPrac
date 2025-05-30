import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="colorsBar fixed flex items-center bg-zinc-400 bottom-12 px-10 inset-x-40 rounded-xl h-10">
        <button
          onClick={() => setColor("red")}
          className="w-[70px] text-white rounded-xl   mr-10 h-7 "
          style={{ backgroundColor: "red" }}>
          Red
        </button>
        <button
          onClick={() => setColor("olive")}
          className="w-[70px] text-white rounded-xl   mr-10 h-7 "
          style={{ backgroundColor: "olive" }}>
          Olive
        </button>
        <button
          onClick={() => setColor("pink")}
          className="w-[70px] text-black rounded-xl   mr-10 h-7 "
          style={{ backgroundColor: "pink" }}>
          Pink
        </button>
        <button
          onClick={() => setColor("green")}
          className="w-[70px] text-white rounded-xl   mr-10 h-7 "
          style={{ backgroundColor: "green" }}>
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="w-[70px] text-white rounded-xl   mr-10 h-7 "
          style={{ backgroundColor: "blue" }}>
          Blue
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="w-[70px] text-white rounded-xl   mr-10 h-7 "
          style={{ backgroundColor: "yellow" }}>
          yellow
        </button>
        <button
          onClick={() => setColor("purple")}
          className="w-[70px] text-white rounded-xl   mr-10 h-7 "
          style={{ backgroundColor: "puple" }}>
          Purple
        </button>
        <button
          onClick={() => setColor("teal")}
          className="w-[70px] text-white rounded-xl   mr-10 h-7 "
          style={{ backgroundColor: "teal" }}>
          Teal
        </button>
        <button
          onClick={() => setColor("white")}
          className="w-[70px] text-black rounded-xl   mr-10 h-7 "
          style={{ backgroundColor: "white" }}>
          White
        </button>
        <button
          onClick={() => setColor("black")}
          className="w-[70px] text-white rounded-xl   mr-10 h-7"
          style={{ backgroundColor: "black" }}>
          Black
        </button>
        <button
          onClick={() => setColor("orange")}
          className="w-[70px] text-white rounded-xl    h-7 "
          style={{ backgroundColor: "orange" }}>
          Orange
        </button>
      </div>
    </div>
  );
}

export default App;
