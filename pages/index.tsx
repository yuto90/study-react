import { useEffect } from "react";
import { Main } from "../components/Main";

export default function index() {

  // コンポーネントのマウント時に一度だけ実行
  useEffect(() => { 
    console.log('マウント時');
    // マウント時に背景色を変える
    document.body.style.backgroundColor = "lightblue";

    // アンマウント時にクリーンアップ関数を使って背景色を戻す
    return () => {
    console.log('アンマウント時');
      document.body.style.backgroundColor = "";
    };
  }, [])
  return <Main page="index" />;
}
