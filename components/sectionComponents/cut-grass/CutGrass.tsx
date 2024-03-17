"use client";
import Image from "next/image";
import styles from "./CutGrass.module.css";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

interface CutGrassProps {
  absolute: boolean;
}

export default function CutGrass({ absolute }: CutGrassProps) {
  const { isIntersecting, ref } = useIntersectionObserver({});

  return (
    <div className="">
      <div
        className={`${styles.CutGrassWrapper} ${
          absolute ? styles.absolute : styles.nonAbsolute
        }`}
      >
        <div ref={ref} className={`${styles.cutter} `}>
          <p></p>
          <Image
            className={`${isIntersecting ? styles.animateCutter : ""}`}
            width={200}
            height={200}
            alt="grass cutter"
            src="https://github.com/levanydze/constructionSupport/blob/main/assets/grass-cutter.png?raw=true"
          ></Image>
        </div>
      </div>
    </div>
  );
}
