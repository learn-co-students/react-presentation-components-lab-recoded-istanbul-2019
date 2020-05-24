import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";

const handleClick = (e) => {
  const target = e.target;
  if (target.innerText === "I'm Just Happy!") {
    target.innerText = "I'm Not Happy!";
    target.style.background = "blue";
  } else {
    target.innerText = "I'm Just Happy!";
    target.style.background = "green";
  }
};

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleClick} />
  </div>,
  document.getElementById("root")
);
