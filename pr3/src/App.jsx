import React, { useState } from "react";
import StyledComponent from "./StyledComponent";
import "./App.css";

function App() {
  const [isStyled, setIsStyled] = useState(false);

  const toggleStyle = () => {
    setIsStyled((prev) => !prev);
  };

  return (
    <div className="app">
      <button className="toggle-button" onClick={toggleStyle}>
        Toggle Styling
      </button>
      <StyledComponent isStyled={isStyled} />
    </div>
  );
}

export default App;
