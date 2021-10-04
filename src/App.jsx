import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// useStateが変わると上から順に読み込む。これを再レンダリングという。
const App = () => {
  // [num, setNum]はnumが変数、第二引数setNumはstateを変更するための関数。0は初期値。
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    // num + 1のところはnumを更新したい値を入れる部分。
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ´∀｀)</p>}
    </>
  );
};

export default App;
