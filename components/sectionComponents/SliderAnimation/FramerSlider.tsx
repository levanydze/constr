"use client";

import { Example } from "./Example";
import styles from "./FramerSlider.module.css";

function FramerSlider() {
  return (
    <div className="">
      <div className={styles.exampleContainer}>
        <Example />
      </div>
    </div>
  );
}

export default FramerSlider;
