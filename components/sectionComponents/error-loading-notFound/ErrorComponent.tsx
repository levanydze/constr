import React from "react";
import styles from "./ErrorComponent.module.css";
import Link from "next/link";

export default function ErrorDiv() {
  return (
    <div className={styles.errorWrapper}>
      <h1 className="title6 color1 ">Error Occured</h1>
      <Link href="./" className="button1">
        Back To Home Page
      </Link>
    </div>
  );
}
