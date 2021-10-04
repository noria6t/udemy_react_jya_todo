import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage />
      {/* <p style={contentStyle}>元気です!</p> */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
