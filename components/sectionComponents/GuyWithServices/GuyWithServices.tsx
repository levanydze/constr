import React from "react";
import Image from "next/image";
import styles from "./GuyWithServices.module.css";
import imagesJson from "../../../json/images.json";
import EachService from "./EachService/EachService";

export default function GuyWithServices() {
  const { guy, houseIcon, paintIcon, roofIcon } = imagesJson;
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.textWrapper}>
        <h2>WE ARE EXPERT IN </h2>
        <h3>What we love to do</h3>
      </div>
      <div className={styles.threeSectionWrapper}>
        <div className={styles.sideSection}>
          <EachService icon={paintIcon} title="Basement" url="./" />
          <EachService icon={roofIcon} title="Floor & Roofs" url="./" />
          <EachService icon={houseIcon} title="Management" url="./" />
        </div>
        <Image
          className={styles.image}
          src={guy}
          width={700}
          height={1200}
          alt="construction guy"
        ></Image>
        <div className={styles.sideSection}>
          <EachService icon={roofIcon} title="Floor & Roofs" url="./" />
          <EachService icon={houseIcon} title="Management" url="./" />
          <EachService icon={paintIcon} title="Basement" url="./" />
        </div>
      </div>
    </div>
  );
}
