import React from "react";

const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };
  // {props.message}の{}はJavaScriptだから
  return <p style={contentStyle}>{props.message}</p>;
};

export default ColorfulMessage;