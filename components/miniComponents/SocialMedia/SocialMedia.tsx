import React from "react";
import styles from "./SocialMedia.module.css";
import infoJson from "../../../json/info.json";

import EachSocialMedia from "./EachSocialMedia";

export default function SocialMedia() {
  const { instagramUrl, facebookUrl, linkedinUrl } = infoJson;

  return (
    <div className={styles.mediaWrapper}>
      <EachSocialMedia media="instagram" url={instagramUrl} />
      <EachSocialMedia media="facebook" url={facebookUrl} />
      <EachSocialMedia media="linkedin" url={linkedinUrl} />
    </div>
  );
}
