import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  

  return (
    <>
      <div className="w-100 vh-100" style={{backgroundColor: color}}>
        <div className="my-div">
          <button onClick={() => setColor("blue")} type="button" className="btn btn-primary my-btn">
            Blue
          </button>
          <button onClick={() => setColor("grey")} type="button" className="btn btn-secondary my-btn">
            Grey
          </button>
          <button onClick={() => setColor("green")} type="button" className="btn btn-success my-btn">
            Green
          </button>
          <button onClick={() => setColor("red")} type="button" className="btn btn-danger my-btn">
            Red
          </button>
          <button onClick={() => setColor("yellow")} type="button" className="btn btn-warning my-btn">
            Yellow
          </button>
          <button onClick={() => setColor("white")} type="button" className="btn btn-light my-btn">
            White
          </button>
          <button onClick={() => setColor("black")} type="button" className="btn btn-dark my-btn">
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
