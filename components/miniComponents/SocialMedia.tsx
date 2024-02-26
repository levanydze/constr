import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import styles from "./SocialMedia.module.css";
import infoJson from "../../json/info.json";

export default function SocialMedia() {
  const { instagramUrl, facebookUrl, linkedinUrl } = infoJson;

  return (
    <div className={styles.mediaWrapper}>
      <Link className={styles.media} href={instagramUrl}>
        <FaInstagram />
      </Link>
      <Link className={styles.media} href={facebookUrl}>
        <FaFacebook />
      </Link>
      <Link className={styles.media} href={linkedinUrl}>
        <FaLinkedin />
      </Link>
    </div>
  );
}
