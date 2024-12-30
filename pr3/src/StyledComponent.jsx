import React from "react";
import "./StyledComponent.css";

const StyledComponent = ({ isStyled }) => {
  return (
    <div className={`styled-container ${isStyled ? "styled" : ""}`}>
      <h1 className="styled-title">Dynamic Styling in React</h1>
      <p className="styled-description">
        This component changes its style and animations dynamically.
      </p>
    </div>
  );
};

export default StyledComponent;
