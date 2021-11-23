import { useState } from "react";
import styles from "./Button.module.css";
import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ setIsPressed }) => {
  const [isMouseDown, setIsMoseDown] = useState(false);
  const buttonColor = isMouseDown ? styles.mouseUp : styles.mouseDown;

  return (
    <button
      className={styles.container + " " + buttonColor}
      onMouseDown={() => setIsMoseDown(true)}
      onMouseUp={() => setIsMoseDown(false)}
      onClick={() => setIsPressed(true)}
    >
      <h3 className={styles.title}>Add River</h3>
    </button>
  );
};

export default Button;
