import React from "react";
import ReactDOM from "react-dom";

let index = 0;
const element = (
  <h1 className="heading" tabIndex={index}>
    <span className="text">Hello World</span>
    <img src="ing.jpg" alt="img" />
  </h1>
);

ReactDOM.render(element, document.getElementById("root"));
