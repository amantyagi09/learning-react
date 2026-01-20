import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "tailwindcss";
import Cards from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  const newObj = {
    name: "Aman",
    age: "27"
  }

  const newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400">Tailwind Testing</h1>
      <Cards channel='ChaiAurCode'></Cards>
      
    </>
  );
}

export default App;
