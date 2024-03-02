import React from "react";
import Navigation from "./Navigation";
import Logo from "../header2/components/Logo";
import styles from "./Header3.module.css";

export default function Heder3() {
  return (
    <header className={styles.headWrapper}>
      {/* <Logo /> */}
      <Navigation />
    </header>
  );
}
