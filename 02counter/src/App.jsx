import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  // let counter = 5

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    console.log(counter);
  };

  const reduceValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    console.log(counter);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h3>counter value: {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={reduceValue}>Decrease value</button>
    </>
  );
}

export default App;
