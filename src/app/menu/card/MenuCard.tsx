import React from "react";
import styles from "./MenuCard.module.css";
import Image from "next/image";
import Link from "next/link";

interface MenuCardProps {
  image: string;
  name: string;
  ingredients: string;
  portions: string;
  special: boolean;
  season: boolean;
  vegan: boolean;
  spicy: boolean;
  newItem: boolean;
  price: string;
  id: string;
}

export default async function MenuCard({
  image,
  name,
  ingredients,
  portions,
  special,
  season,
  vegan,
  spicy,
  newItem,
  price,
  id,
}: MenuCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <Link href={`/menu/${id}`}>
        <Image src={image} width={600} height={600} alt={name}></Image>
      </Link>
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
          {special && <p className={`menuTags ${styles.special}`}>SPECIAL</p>}
          {season && <p className={`menuTags ${styles.season}`}>SEASON</p>}
          {spicy && <p className={`menuTags ${styles.spicy}`}>SPICY</p>}
          {newItem && <p className={`menuTags ${styles.newItem}`}>NEW</p>}
        </div>
      </div>
    </div>
  );
}

// 12
