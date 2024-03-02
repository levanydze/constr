import React from "react";
import styles from "./PhotoText.module.css";
import Image from "next/image";

interface PhotoTextProps {
  image: string;
  title1: string;
  title2: string;
  text: string;
  sign: string;
}

export default function PhotoText({
  image,
  title1,
  title2,
  text,
  sign,
}: PhotoTextProps) {
  return (
    <div className={`container2 ${styles.photoTextWrapper}`}>
      <Image src={image} height={1500} width={1500} alt={image} />
      <div className={styles.textDiv}>
        <h2 className="signature color1 title9">{title1}</h2>
        <h1 className="title4">{title2}</h1>
        <p className="twoLines"></p>
        <h3 className="text1 textMedium">{text}</h3>
        <h4 className="signature color1 title6">{sign}</h4>
      </div>
    </div>
  );
}
