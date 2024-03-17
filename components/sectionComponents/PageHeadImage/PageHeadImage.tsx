import Image from "next/image";
import React from "react";
import styles from "./PageHeadImage.module.css";

interface PageHeadImageProps {
  image: string;
  value: string;
  short: boolean;
}

export default function PageHeadImage({
  image,
  value,
  short,
}: PageHeadImageProps) {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.overlayWrapper}>
        <h1 className="title5 ">{value}</h1>
      </div>
      <div className={styles.imageDarkLayer}></div>
      <Image
        className={` ${styles.mainImage} ${short ? styles.short : ""}`}
        src={image}
        alt={image}
        width={1000}
        height={700}
        priority
      />
    </div>
  );
}

/*
import imagesJson from "../../../json/images.json";
const { headImage } = imagesJson;

<PageHeadImage value="Contact Us" image={headImage} short={false} />
*/
