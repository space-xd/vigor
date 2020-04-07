import React from "react";
import ReactDom from "react-dom";

const HelloComponent = () => {
  return <h1> Hello from @vigor/messaging</h1>;
};

ReactDom.render(<HelloComponent />, document.getElementById("root"));
