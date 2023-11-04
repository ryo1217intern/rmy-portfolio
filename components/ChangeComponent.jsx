"use client";
import React, { useState, useEffect } from "react";
import Loading from "components/Loading";
import Welcome from "components/Welcome.jsx";

const ChangeComponent = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // 5秒後にsetShowWelcomeをtrueに設定してWelcomeを表示
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 3000);

    // コンポーネントのアンマウント時にタイマーをクリア
    return () => clearTimeout(timer);
  }, []); // 空の依存配列でコンポーネントのマウント時にのみ効果を実行

  // showWelcomeの状態に基づいて表示するコンポーネントを切り替え
  return <div>{showWelcome ? <Welcome /> : <Loading />}</div>;
};

export default ChangeComponent;
