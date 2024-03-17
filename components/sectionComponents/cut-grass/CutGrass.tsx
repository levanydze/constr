import Image from "next/image";
import styles from "./CutGrass.module.css";

export default function CutGrass() {
  return (
    <div className="container1">
      <div className={styles.CutGrassWrapper}>
        <Image
          width={1000}
          height={50}
          alt="grass"
          src="https://github.com/levanydze/constructionSupport/blob/main/assets/grass.png?raw=true"
        ></Image>
        <div className={styles.cutter}>
          <Image
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
