import Image from "next/image";
import React from "react";
import styles from "./HomePageMain.module.css";
import ImageOverlay from "./Overlay/ImageOverlay";
interface HomePageMainProps {
  image: string;
  alt: string;
  outline: boolean;
}

export default function MainImage({ image, alt, outline }: HomePageMainProps) {
  return (
    <div
      className={` ${styles.mainWrapper} ${outline ? styles.outline : null}`}
    >
      <ImageOverlay />
      <div className={styles.imageDarkLayer}></div>
      <Image
        className={styles.mainImage}
        src={image}
        alt={alt}
        width={1200}
        height={800}
        priority
      />
    </div>
  );
}
