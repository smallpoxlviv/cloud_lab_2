import Button from "../Button/Button";
import styles from "./Header.module.css";
import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ setIsPressed }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rivers</h1>
      <Button setIsPressed={setIsPressed} />
    </div>
  );
};

export default Header;
