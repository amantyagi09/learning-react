import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const ReactElement = React.createElement(
//   'a',
//   {href: 'https://google.com',
//     target: '_blank',
//   },
//   'click me to visit google'
// )
// this is how an object is passed to the react(in the form of function that is returnng the elements)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
