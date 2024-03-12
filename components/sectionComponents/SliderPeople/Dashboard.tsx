"use client";
import React, { Fragment, useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // Auto Slide
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index - 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <Fragment>
      <div className="container1">
        <section className={styles.section}>
          <div className={styles.title}>
            <h2>
              <span>/</span>Reviews
            </h2>
          </div>
          <div className={styles.sectionCenter}>
            {people.map((person, personIndex) => {
              const { id, image, name, title, quote } = person;
              let position = styles.nextSlide;
              if (personIndex === index) {
                position = styles.activeSlide;
              }

              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = styles.lastSlide;
              }

              return (
                <div className={` ${styles.article} ${position}`} key={id}>
                  <img src={image} alt={name} className={styles.personImg} />
                  <h4>{name}</h4>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.text}>{quote}</p>
                  <FaQuoteRight className={styles.icon} />
                </div>
              );
            })}
            <button className={styles.prev} onClick={() => setIndex(index - 1)}>
              <FiChevronLeft />
            </button>
            <button className={styles.next} onClick={() => setIndex(index + 1)}>
              <FiChevronRight />
            </button>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Dashboard;
