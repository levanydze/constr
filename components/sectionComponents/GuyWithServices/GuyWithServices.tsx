"use client";
import React from "react";
import Image from "next/image";
import styles from "./GuyWithServices.module.css";
import assetsJson from "../../../json/assets.json";
import EachService from "./EachService/EachService";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import CutGrass from "../cut-grass/CutGrass";

interface GuyWithServicesProps {
  image: string;
}

export default function GuyWithServices({ image }: GuyWithServicesProps) {
  const { isIntersecting, ref } = useIntersectionObserver({});
  const { houseIcon, paintIcon, roofIcon } = assetsJson;

  return (
    <div className="container1">
      <div className={styles.mainWrapper}>
        <div className={styles.textWrapper}>
          <h2 ref={ref} className="title2 textMedium">
            WE ARE EXPERT IN
          </h2>
          <h3 className="title4">What we love to do</h3>
        </div>
        <div className={styles.threeSectionWrapper}>
          <div
            className={`${styles.sideSection} ${
              isIntersecting ? "moveRight" : null
            }`}
          >
            <EachService icon={paintIcon} title="Basement" url="./" />
            <EachService icon={roofIcon} title="Floor & Roofs" url="./" />
            <EachService icon={houseIcon} title="Management" url="./" />
          </div>
          <Image
            className={styles.image}
            src={image}
            width={800}
            height={1500}
            alt="construction guy"
          ></Image>
          <div
            className={`${styles.sideSection} ${
              isIntersecting ? "moveLeft" : null
            }`}
          >
            <EachService icon={roofIcon} title="Floor & Roofs" url="./" />
            <EachService icon={houseIcon} title="Management" url="./" />
            <EachService icon={paintIcon} title="Basement" url="./" />
          </div>
        </div>
      </div>
    </div>
  );
}
