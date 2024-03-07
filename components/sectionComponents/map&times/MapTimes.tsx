import React from "react";
import styles from "./MapTimes.module.css";
import Hours from "./components/Hours";
import Text from "./components/Text";
import infoJson from "../../../json/info.json";

export default function MapAndTimes() {
  const { mapLocation } = infoJson;
  return (
    <div className="container1">
      <div className={styles.mapAndTimesWrapper}>
        <div className={styles.textMapWrap}>
          <Text />
          <div className={styles.mapSide}>
            <iframe className={styles.mapSide} src={mapLocation}></iframe>
          </div>
        </div>
        <Hours />
      </div>
    </div>
  );
}
