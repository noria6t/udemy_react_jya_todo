import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// useStateが変わると上から順に読み込む。これを再レンダリングという。
const App = () => {
  // [num, setNum]はnumが変数、第二引数setNumはstateを変更するための関数。0は初期値。
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    // num + 1のところはnumを更新したい値を入れる部分。
    setNum(num + 1);
  };

  // ３の倍数で顔が出現機能をつけたら反応しなくなった。影響受けてしまった。
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 他の機能に影響を与えないようにnumの値にのみ関心を寄せたい。関心の分離をしたい。そんな時にuseEffect。
  // 第二引数はから配列[]の時は最初の１回処理を走らせたい時に使う。
  // useEffecrtは第二引数の値が変化した時のみ処理を走らせる。
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint react-hooks/exhaustive-deps disabled
  }, [num]);

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
