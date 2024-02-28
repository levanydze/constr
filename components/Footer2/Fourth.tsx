import React from "react";
import styles from "./Fourth.module.css";
import Image from "next/image";
import Link from "next/link";

import imagesJosn from "../../json/images.json";
import infoJson from "../../json/info.json";

export default function Fourth() {
  const { instagramUrl } = infoJson;
  const { guy } = imagesJosn;
  return (
    <main className={styles.wrapper}>
      <h5 className="title3">Instagram</h5>

      <Link className={styles.imageWrapper} href={instagramUrl} target="_blank">
        <Image width={70} height={70} alt="img" src={guy} />
        <Image width={70} height={70} alt="img" src={guy} />
        <Image width={70} height={70} alt="img" src={guy} />
        <Image width={70} height={70} alt="img" src={guy} />
        <Image width={70} height={70} alt="img" src={guy} />
        <Image width={70} height={70} alt="img" src={guy} />
      </Link>
      <Link href={instagramUrl} target="_blank">
        <p>View More Photos</p>
      </Link>
    </main>
  );
}
