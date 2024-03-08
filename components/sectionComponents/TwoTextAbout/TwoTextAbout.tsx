"use client";
import React from "react";
import styles from "./TwoTextAbout.module.css";
import Button from "../../miniComponents/Button2";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

export default function TwoTextAbout() {
  const { isIntersecting, ref } = useIntersectionObserver({});

  return (
    <div className="container1">
      <div className={styles.TwoTextWrapper}>
        <div className={` ${styles.head}`}>
          <h4
            ref={ref}
            className={`title6 font3 color1 ${
              isIntersecting ? "moveUp1" : null
            }`}
          >
            Discover
          </h4>
          <h2 className={`title7 ${isIntersecting ? "moveUp2" : null} `}>
            NEW FLAVORS
          </h2>
          <p className={` twoLines ${isIntersecting ? "moveUp3" : null} `}></p>
        </div>
        <div className={` ${styles.texts}`}>
          <div
            className={`${styles.leftText} ${
              isIntersecting ? "moveRight" : null
            }  `}
          >
            <p className="text1">
              Fish is one of the most wholesome foods that man can eat. In fact,
              people have been eating fish throughout human history. These days,
              many cooks yearn to add fish to their repertoire, but the whole
              process of cleaning and
            </p>
          </div>
          <div
            className={`${styles.RightText} ${
              isIntersecting ? "moveLeft" : null
            }`}
          >
            <p className="text1">
              Filleting fresh fish is a little scary to them. The process of
              cleaning and filleting fresh fish is relatively simple once the
              steps are understood. To begin, you must clean your fresh fish
              properly in order to maintain it’s quality.
            </p>
          </div>
        </div>
        <Button
          value="More About Us"
          target="/about"
          styling={` button1 ${isIntersecting ? "moveUp4" : null} `}
        />
      </div>
    </div>
  );
}
