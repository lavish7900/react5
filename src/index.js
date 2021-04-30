import React from "react";
import ReactDOM from "react-dom";

// we need to remember that this is a jsx file and here the styling will not be
// done in the conventional Way , as we do in the html
// here the styling will be done by using java scipt  as key value pairs
// object liike below.

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid blue"
};
ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
