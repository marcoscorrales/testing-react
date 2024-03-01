const { useState } = require("react");

import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Text: {text}</p>
      <ChildComponent onTextChange={handleTextChange} />
    </div>
  );
};

export default ParentComponent;
