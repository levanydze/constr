"use client";
import { MenuItemProps } from "./page";
import styles from "./ChachaCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Chacha({
  image,
  name,
  id,
  description,
  ingredients,
  portions,
  price,
  special,
  season,
  vegan,
  spicy,
  newItem,
  disable,
}: MenuItemProps) {
  return (
    <>
      <Link href={`/chacha/${id}`}>
        <div key={id} className={`  ${styles.cardWrapper}`}>
          <div className={styles.cardWrapper}>
            <Image src={image} width={600} height={600} alt={name}></Image>
            <div className={styles.cardInfoDiv}>
              <div className={styles.namePrice}>
                <h1 className="title1 font1">{name}</h1>
                <p className={`${styles.dotted}`}></p>
                <h6>{price} sek</h6>
              </div>
              <h2 className="title0 font1 textMedium">
                {ingredients.length > 40
                  ? ingredients.substring(0, 40) + "..."
                  : ingredients}
              </h2>
              <div className={styles.details}>
                {portions && <h5 className="title0 font1">{portions}</h5>}
                {vegan && <p className={`menuTags ${styles.vegan}`}>VEGAN</p>}
                {special && (
                  <p className={`menuTags ${styles.special}`}>SPECIAL</p>
                )}
                {season && (
                  <p className={`menuTags ${styles.season}`}>SEASON</p>
                )}
                {spicy && <p className={`menuTags ${styles.spicy}`}>SPICY</p>}
                {newItem && <p className={`menuTags ${styles.newItem}`}>NEW</p>}
              </div>
            </div>
          </div>

          <div className="pb-40 w-full h-1"></div>
        </div>
      </Link>
    </>
  );
}
