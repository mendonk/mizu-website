import * as React from "react";
import "./card.css";

const Card = ({ children, dpFlex = "", customStyle = {} }) => {
  return (
    <div className={`container ${dpFlex}`} style={customStyle}>
      {children}
    </div>
  );
};

export default Card;
