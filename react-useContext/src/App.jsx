import { useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";
import { Provider } from "./Context/context";
import { ThemeContextProvider } from "./Context/ThemeContext";

function App() {
  const [user, setUser] = useState({ name: "maneesh" });
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      <div
        className={`${
          theme == "light" ? "bg-amber-100" : "bg-black"
        }  mt-100 ml-100 w-[200px] h-[200px] bg-amber-100 flex justify-center items-center`}>
        <ChildA />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
