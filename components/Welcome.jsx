// Welcome.js
import React from "react";
import styles from "styles/Welcome.module.css";

const Welcome = () => {
  // 'word' followed by the index number to generate 'word1', 'word2', ..., 'word18' class names
  const englishWords = [
    "Nice",
    "to",
    "meet",
    "you,",
    "my",
    "name",
    "is",
    "'Ryosuke'.",
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        {englishWords.map((word, index) => (
          // map関数内で、単語の後にスペースを追加します（最後の単語を除く）。
          <React.Fragment key={index}>
            <span className={`${styles.word} ${styles["word" + (index + 1)]}`}>
              {word}
            </span>
            {index < englishWords.length - 1 && " "}{" "}
            {/* 単語の後にスペースを追加 */}
          </React.Fragment>
        ))}
      </h1>
    </div>
  );
};

export default Welcome;

//はじめまして、わたしは「りょうすけ」といいます。
//Nice to meet you, my name is 'Ryosuke'.
