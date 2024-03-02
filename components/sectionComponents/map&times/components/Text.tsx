import React from "react";
import Image from "next/image";

import arrowPost from "../arrow-post.png";
import styles from "./Text.module.css";
import infoJson from "../../../../json/info.json";

export default function Text() {
  const { address, email, phoneNumber } = infoJson;

  return (
    <div className={styles.textWrap}>
      <Image src={arrowPost} alt="arrow post" height="60" />
      <h2>EASY TO FIND</h2>
      <div className="twoLines"></div>
      <p className={styles.addres}>{address}</p>
      <p className={styles.email}>{email}</p>
      <p className={styles.number}>{phoneNumber}</p>
    </div>
  );
}
