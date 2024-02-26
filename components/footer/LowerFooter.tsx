import Link from "next/link";
import infoJson from "../../json/info.json";
import styles from "./LowerFooter.module.css";
export default function LowerFooter() {
  const { madeByLink } = infoJson;
  return (
    <div className={styles.lowerFooter}>
      <p>Site by</p>
      <Link href={madeByLink}>Levani</Link>
      <p>©</p>
      <Link href={madeByLink}> Levanidze.com</Link>
    </div>
  );
}
