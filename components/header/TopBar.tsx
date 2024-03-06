import React from "react";
import styles from "./TopBar.module.css";
import SocialMedia from "../miniComponents/SocialMedia/SocialMedia";
import infoJson from "../../json/info.json";

export default function TopBar() {
  const { phoneNumber } = infoJson;
  return (
    <div>
      <div className={styles.blueBar}>
        <div className={styles.wrapper}>
          <div className={styles.textInBlue}>
            <p className="title1 font1 textMedium ">
              Toll Free <span className="text1  textLight">{phoneNumber}</span>
            </p>
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
