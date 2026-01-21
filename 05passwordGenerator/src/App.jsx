import { useState, useCallback, useEffect, useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPassToClipboard = useCallback(()=>{
    window.alert("copied to clipboard")
    passwordRef.current?.select()  // this highlights the current value of the password 
    passwordRef.current?.setSelectionRange(0,50) // this gives how much value should be selected
    window.navigator.clipboard.writeText(passwordRef.current.value)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "@#$%&";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() =>{
    passwordGenerator()
  }, [length,numAllowed,charAllowed,passwordGenerator])
  return (
    <>
      
      <div className="w-100 m-2 p-2 bg-secondary">
        <h1 className="fs-4">PASSWORD GENERATOR</h1>

        <div className="d-flex justify-content-center p-2 overflow-hidden">
          <input
            className="form-control shadow-none bg-light"
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassToClipboard} className="bg-primary rounded">copy</button>
        </div>

        <div className="d-flex m-2 gap-3">
          <div className="d-flex align-items-center gap-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label className="text-warning">Length: {length}</label>
          </div>
          <div className="d-flex align-items-center gap-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            <label className="text-warning">Numbers</label>
          </div>
          <div className="d-flex align-items-center gap-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label className="text-warning">Symbols</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
