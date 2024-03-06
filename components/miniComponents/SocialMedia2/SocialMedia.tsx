import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoRestaurantOutline } from "react-icons/io5";
import styles from "./SocialMedia.module.css";
import infoJson from "../../../json/info.json";

export default function SocialMedia() {
  const { instagramUrl, facebookUrl } = infoJson;
  return (
    <div className={styles.socialMedia}>
      <Link href={instagramUrl} target="_blank">
        <FaInstagram className={styles.socialMediaIcon} />
      </Link>
      <Link href={facebookUrl} target="_blank">
        <CiFacebook className={styles.socialMediaIcon} />
      </Link>
      <Link href={facebookUrl} target="_blank">
        <IoRestaurantOutline className={styles.socialMediaIcon} />
      </Link>
    </div>
  );
}
