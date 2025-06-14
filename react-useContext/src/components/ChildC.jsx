import React from "react";
import { UsageContext } from "../Context/context";
import { useTheme } from "../Context/ThemeContext";

function ChildC() {
  const context = UsageContext();
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <button
      onClick={handleClick}
      className="p-4 bg-blue-500 rounded-lg text-white">
      Switch
    </button>
  );
}

export default ChildC;
