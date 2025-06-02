import React from "react";
import UserContext from "../context/UserContext";
import { useState, useContext } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ username, password });
  }

  return (
    <div>
      <div className="p-5 flex flex-col  w-[300px] justify-evenly h-[300px]">
        <h1 className="text-center text-xl text-amber-400 ">Login</h1>

        <input
          className="outline-1  p-2"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          className="outline-1  p-2"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="p-5 bg-blue-600 text-white  rounded-xl mt-2"
          type="submit"
          onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
