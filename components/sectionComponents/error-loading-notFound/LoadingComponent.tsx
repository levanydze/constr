import React from "react";
import styles from "./LoadingComponent.module.css";

export default function LoadingDiv() {
  return (
    <div className="container1">
      <div className={styles.loadingWrapper}>
        <h1 className="title5 color1 font1 ">Loading Data</h1>
      </div>
    </div>
  );
}
