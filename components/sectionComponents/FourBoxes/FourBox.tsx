import React from "react";
import assetsJson from "../../../json/assets.json";
import infoJson from "../../../json/info.json";
import styles from "./FourBox.module.css";
import EachFourBox from "./EachFourBox";

export default function FourBox() {
  const { arrows, phone, postbox, chat } = assetsJson;
  const { email, phoneNumber, address } = infoJson;
  return (
    <div className="container1">
      <div className={styles.FourBoxMainWrapper}>
        <EachFourBox image={arrows} alt="arrows" title={address} />
        <EachFourBox image={phone} alt="phone" title={phoneNumber} />
        <EachFourBox image={postbox} alt="postbox" title={email} />
        <EachFourBox image={chat} alt="chat" title="Get In Touch" link />
      </div>
    </div>
  );
}
