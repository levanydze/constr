import React from "react";
import styles from "./Footer.module.css";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import LowerFoot from "./LowerFoot";

export default function Footer() {
  return (
    <div className={styles.footMainWrapper}>
      <div className={styles.footWrapper}>
        <First />
        <Second />
        <Third />
        <Fourth />
      </div>
      <LowerFoot />
    </div>
  );
}
