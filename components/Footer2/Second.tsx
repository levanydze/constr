import React from "react";
import styles from "./Second.module.css";
import Link from "next/link";

export default function Second() {
  return (
    <main>
      <h5 className="title3">Navigation</h5>

      <div className={styles.menuWrap}>
        <Link className={styles.menu} href="./">
          home
        </Link>
        <Link className={styles.menu} href="./menu">
          menu <p className="updated">updated</p>
        </Link>
        <Link className={styles.menu} href="./about">
          about
        </Link>
        <Link className={styles.menu} href="./contact">
          contact
        </Link>
        <Link className={styles.reserv} href="./reservation">
          reservation
        </Link>
      </div>
    </main>
  );
}
