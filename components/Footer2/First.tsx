import React from "react";

import styles from "./First.module.css";
import SocMedia from "../../components/miniComponents/SocialMedia/SocialMedia";
import infoJson from "../../json/info.json";

export default function First() {
  const { address, email, phoneNumber } = infoJson;
  return (
    <main>
      <h5 className="title3">Contact info</h5>
      <div className={styles.contactDiv}>
        <p>{address}</p>
        <p className={styles.email}>{email}</p>
        <p>{phoneNumber}</p>
      </div>
      <SocMedia />
    </main>
  );
}
