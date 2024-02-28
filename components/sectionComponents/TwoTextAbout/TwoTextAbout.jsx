import React from "react";
import styles from "./TwoTextAbout.module.css";
import ReservationButton from "../../miniComponentsReusable/buttons/Button";

export default function TwoTextAbout() {
  return (
    <div className={styles.TwoTextWrapper}>
      <div className={styles.head}>
        <h4>Discover</h4>
        <h2>NEW FLAVORS</h2>
        <p className="twoLines"></p>
      </div>
      <div className={styles.texts}>
        <div className={styles.leftText}>
          <p className="text1">
            Fish is one of the most wholesome foods that man can eat. In fact,
            people have been eating fish throughout human history. These days,
            many cooks yearn to add fish to their repertoire, but the whole
            process of cleaning and
          </p>
        </div>
        <div className={styles.RightText}>
          <p className="text1">
            Filleting fresh fish is a little scary to them. The process of
            cleaning and filleting fresh fish is relatively simple once the
            steps are understood. To begin, you must clean your fresh fish
            properly in order to maintain it’s quality.
          </p>
        </div>
      </div>
      <ReservationButton
        value="More About Us"
        target="/about"
        styling="button4"
      />
    </div>
  );
}
