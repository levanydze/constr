import React from "react";
import styles from "./Third.module.css";

const events = [
  {
    date: "July 30, 2024",
    title: "The principles of scientific cooking",
  },
  {
    date: "August 08, 2024",
    title: "Barbecue party tips for a truly amazing event",
  },
  {
    date: "September 24, 2024",
    title: "Cooking for one",
  },
  {
    date: "December 24, 2024",
    title: "Big pizza party",
  },
];

export default function Third() {
  return (
    <div>
      <h5 className="title3">Events</h5>
      {events.slice(0, 3).map((event, index) => (
        <div className={styles.eventWrap} key={index}>
          <p>{event.date}</p>
          <h3>{event.title}</h3>
        </div>
      ))}

      <div>
        <p>View All Posts</p>
      </div>
    </div>
  );
}
