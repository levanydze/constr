"use client";
import React, { useEffect, useState } from "react";
import styles from "./menuList.module.css";
import MenuCard from "../card/MenuCard";
import { getDatas } from "../../../../lib/DataFetch";

interface MenuListProps {
  category: string;
}

export default function MenuList({ category }: MenuListProps) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getDatas();
      setData(fetchedData);
    }
    fetchData();
  }, []);

  return (
    <div className={` container1 ${styles.menuWrapper}`}>
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
          .map((item, index) => (
            <div key={index}>{item && <MenuCard {...item} />}</div>
          ))}
      </div>
    </div>
  );
}
