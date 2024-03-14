"use client";
import React from "react";
import styles from "./Fourth.module.css";
import Image from "next/image";
import Link from "next/link";
import { images } from "./instagramImagesData";

import imagesJosn from "../../json/images.json";
import infoJson from "../../json/info.json";

export default function Fourth() {
  const { instagramUrl } = infoJson;
  const { guy } = imagesJosn;
  return (
    <main className={styles.wrapper}>
      <h5 className="title3">Instagram</h5>

      <Link className={styles.imageWrapper} href={instagramUrl} target="_blank">
        {images.map((img) => (
          <Image alt={img} width={70} height={70} src={img} />
        ))}
      </Link>

      <Link href={instagramUrl} target="_blank">
        <p>View More Photos</p>
      </Link>
    </main>
  );
}
