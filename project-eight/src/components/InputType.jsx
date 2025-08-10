import React, { useState } from "react";
import styles from "../assets/InputType.module.css";

const InputType = () => {
  const [text, setText] = useState("");

  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleOnchange}
        placeholder="enter message here"
        className={styles.inputType}
      />
      <p>
        value of text input: <span className={styles.pTag}>{text}</span>
      </p>
    </div>
  );
};

export default InputType;
