import React from "react";
import styles from "./Third.module.css";

export default function Third() {
  return (
    <main>
      <h5 className="title3">Events</h5>

      <div className={styles.eventWrap}>
        <p>July 30, 2017</p>
        <h3>The principles of scientific cooking</h3>
      </div>
      <div className={styles.eventWrap}>
        <p>August 9, 2017</p>
        <h3>Barbecue party tips for a truly amazing event</h3>
      </div>
      <div className={styles.eventWrap}>
        <p>September 24, 2017 </p>
        <h3>Cooking for one</h3>
      </div>
      <div>
        <p>View All Posts</p>
      </div>
    </main>
  );
}
