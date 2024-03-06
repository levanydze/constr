import Image from "next/image";
import styles from "./ImageTextButton.module.css";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

interface ImageTextButtonProps {
  title: string;
  text: string;
  button: string;
  image: string;
}

export default function ImageTextButton({
  title,
  button,
  text,
  image,
}: ImageTextButtonProps) {
  return (
    <div className={styles.ImageTextButton}>
      <div className={styles.overlay}>
        <div className={styles.space}></div>
        <div className={styles.textWrapper}>
          <h1 className="title7 textLight font1">{title}</h1>
          <h2 className="text1 ">{text}</h2>
          <Link href={"/contact"} className="button1">
            <MdOutlineEmail />
            {button}
          </Link>
        </div>
      </div>

      <Image
        className={styles.image}
        src={image}
        width={1400}
        height={700}
        alt="clouds"
        priority
      ></Image>
    </div>
  );
}
