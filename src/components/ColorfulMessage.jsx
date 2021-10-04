import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  // {props.message}の{}はJavaScriptだから
  return <p style={contentStyle}>{children}</p>;
};
