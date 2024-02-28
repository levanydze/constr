import infoJson from "../../json/info.json";
import styles from "./Footer.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import LowerFooter from "./LowerFooter";
import SocialMedia from "../miniComponents/SocialMedia/SocialMedia";

export default function Footer() {
  const { address, phoneNumber, email, name } = infoJson;
  return (
    <footer>
      <div className={styles.footWrapper}>
        <Link className={`color1 font2 title5 ${styles.logo}`} href="./">
          {name}
        </Link>
        <div className={styles.infoFooter}>
          <p className="text3">
            <FaLocationDot className={styles.icons} />
            {address}
          </p>
          <p className="text3">
            <FaPhoneAlt className={styles.icons} />
            {phoneNumber}
          </p>
          <p className="text3">
            <MdOutlineEmail className={styles.icons} /> {email}
          </p>
          <span className="button1">
            <FaPhoneAlt className={styles.icons} />
            {phoneNumber}
          </span>
        </div>
        <SocialMedia />
      </div>
      <div className="measaureLine"></div>
      <LowerFooter />
    </footer>
  );
}
