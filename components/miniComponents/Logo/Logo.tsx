import React from "react";
import styles from "./Logo.module.css";
import Link from "next/link";
import infoJson from "../../../json/info.json";

interface LogoProps {
  onClose?: () => void;
}

export default function Logo({ onClose }: LogoProps) {
  const { name } = infoJson;
  return (
    <div className={styles.logoWrap}>
      <Link href={"/"} onClick={onClose}>
        <h1 className="title3 color1">{name}</h1>
        <h3>Restaurant</h3>
      </Link>
    </div>
  );
}
