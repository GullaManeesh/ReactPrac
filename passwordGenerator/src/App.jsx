import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setcharactersAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  let passwordRef = useRef(null);

  let generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "/!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed]);

  let copyToClipBoard = () => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(Password);
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charactersAllowed, generatePassword]);
  return (
    <>
      <div className="w-screen h-screen bg-black">
        <div className="w-[600px] h-[200px] bg-zinc-500 fixed top-20 inset-x-120 rounded-xl py-2.5 px-6">
          <div className="text-white text-3xl text-center ">
            Password Generator
          </div>
          <div className="flex  items-center justify-center py-3">
            <input
              type="text"
              readOnly
              placeholder="Password"
              className="w-[90%] h-10 bg-white py-4  rounded-l-xl px-5 outline-0  text-red-700 text-xl font-medium"
              value={Password}
              ref={passwordRef}
            />
            <button
              className="h-10 w-14 text-white flex items-center justify-center bg-blue-600 rounded-r-xl active:scale-95 transition"
              onClick={copyToClipBoard}>
              Copy
            </button>
          </div>
          <div className="flex py-5 items-center ">
            <input
              type="range"
              defaultValue={8}
              onChange={(e) => setlength(e.target.value)}
              min="8"
              max="100"
            />
            <label className="ml-2 text-white">
              Length: <span className="text-white">{length}</span>
            </label>

            <input
              type="checkbox"
              className="ml-5"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="ml-1 text-white">Number</label>
            <input
              type="checkbox"
              className="ml-5"
              defaultChecked={charactersAllowed}
              onChange={() => {
                setcharactersAllowed((prev) => !prev);
              }}
            />
            <label className="ml-1 text-white">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
