import React from "react";
import styles from "./ImageOverlay.module.css";
import { FiPhone } from "react-icons/fi";
import SocialMedia from "../../../miniComponents/SocialMedia2/SocialMedia";
import Button from "../../../miniComponents/Button2";
import infoJson from "../../../../json/info.json";

export default function ImageOverlay() {
  const { phoneNumber, name } = infoJson;
  return (
    <div className={styles.overlayWrapper}>
      <div className={styles.empty}></div>
      <div className={styles.middle}>
        <h2 className="title6 color1 font3">Welcome to</h2>
        <h1 className="title10 font2">{name}</h1>
        <h3 className="title6 font2 ">Restaurant</h3>
        <div className="twoLines "></div>
        <h4 className="text1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos optio
          earum reiciendis placeat quis iusto doloremque facere eaque. Deleniti
          corrupti fugiat nesciunt dolore officia aperiam ipsam accusantium,
          debitis nisi unde?
        </h4>
        <div className={styles.buttons}>
          <Button
            value="Book a Table"
            styling="button1"
            target="/reservation"
          />
          <Button value="View Menu" styling="button2" target="/menu" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.phoneNumber}>
          <FiPhone className={styles.phoneIcon} />
          {phoneNumber}
        </div>
        <div className={styles.icons}>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
