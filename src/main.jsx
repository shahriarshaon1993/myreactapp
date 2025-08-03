import React from "react";
import ReactDOM from "react-dom/client";

let index = 0;

class Clock extends React.Component {
  render() {
    return (
      <h1 className="heading" tabIndex={index}>
        <span className="text">
          {this.props.children}{" "}
          {new Date().toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock locale="bn-BD">Just Time:</Clock>);
