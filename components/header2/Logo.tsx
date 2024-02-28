import React from "react";
import styles from "./Logo.module.css";
import Link from "next/link";
import infoJson from "../../json/info.json";

export default function Logo() {
  const { name } = infoJson;
  return (
    <div className={styles.logoWrap}>
      <Link href={"/"}>
        <h1 className={styles.logologo}>{name}</h1>
        <h3>Restaurant</h3>
      </Link>
    </div>
  );
}
