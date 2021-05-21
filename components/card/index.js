import * as React from "react";
import "./card.css";

const Card = ({
  children,
  dpFlex = "",
  responsiveWidth = "",
  customStyle = {},
}) => {
  return (
    <div
      className={`container ${dpFlex} ${responsiveWidth}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export default Card;
