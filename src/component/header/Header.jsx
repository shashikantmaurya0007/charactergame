import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={`${styles.app_header}`}>
      <h1>Type The Alphabet</h1>
      <p>Typing game to see how fast you type.Timer starts when you do:)</p>
    </header>
  );
};

export default Header;
