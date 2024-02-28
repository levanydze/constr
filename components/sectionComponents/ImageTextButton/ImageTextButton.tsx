import Image from "next/image";
import imagesJson from "../../../json/images.json";
import styles from "./ImageTextButton.module.css";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

export default function ImageTextButton() {
  const { headImage } = imagesJson;
  return (
    <div className={styles.ImageTextButton}>
      <div className={styles.overlay}>
        <div className={styles.space}></div>
        <div className={styles.textWrapper}>
          <h1 className="title7 textLight font1">
            Professional Tiling & Painting Services
          </h1>
          <h2 className="text1 ">
            We combine quality workmanship, superior knowledge and low prices to
            provide you with service unmatched by our competitors.
          </h2>
          <Link href={"/contact"} className="button1">
            <MdOutlineEmail />
            Get A Quote
          </Link>
        </div>
      </div>

      <Image
        className={styles.image}
        src={headImage}
        width={1400}
        height={700}
        alt="clouds"
        priority
      ></Image>
    </div>
  );
}
