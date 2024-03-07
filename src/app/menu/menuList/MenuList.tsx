import React from "react";
import styles from "./MenuList.module.css";
import MenuCard from "../card/MenuCard";
import { getDatas } from "../../../../lib/DataFetch";

interface MenuItem {
  id: string;
  name: string;
  image: string;
  ingredients: string;
  portions: string;
  special: boolean;
  season: boolean;
  vegan: boolean;
  spicy: boolean;
  newItem: boolean;
  price: string;
  [key: string]: any;
}

interface MenuListProps {
  category: string;
}

export default async function MenuList({ category }: MenuListProps) {
  const data: MenuItem[] = await getDatas();

  return (
    <div className="container2">
      <div className={`  ${styles.menuWrapper}`}>
        {data.filter((item) => item[category]).length > 0 && (
          <div className={styles.menuHead}>
            <h2 className="font3 title5 color1">Menu</h2>
            <h1 className="title5  ">{category}</h1>
            <p className="twoLines"></p>
          </div>
        )}
        <div className={styles.cardsMapWrap}>
          {data
            .filter((item) => item[category])
            .map((item: MenuItem, index) => (
              <div key={index}>{item && <MenuCard {...item} />}</div>
            ))}
        </div>
      </div>
    </div>
  );
}
