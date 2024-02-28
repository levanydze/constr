"use client";
import React, { useState, useEffect } from "react";
import styles from "./menuDetails.module.css";
import Image from "next/image";
import { getData } from "../../../../../lib/DataFetch";

interface MenuDetailsProps {
  menuId: string;
}

interface MenuData {
  name: string;
  image: string;
  ingredients: string;
  description: string;
  portions: string;
  special: boolean;
  season: boolean;
  vegan: boolean;
  spicy: boolean;
  newItem: boolean;
  price: string;
}

const MenuDetails: React.FC<MenuDetailsProps> = ({ menuId }) => {
  const [data, setData] = useState<MenuData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuData: MenuData = await getData(menuId);
        setData(menuData);
      } catch (error) {
        console.error("Error fetching menu details:", error);
      }
    };

    fetchData();

    return () => {
      setData(null);
    };
  }, [menuId]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.menuDetailsWrapper}>
      <div className={styles.imgWrapper}>
        <Image
          priority
          src={data.image}
          alt={data.name}
          height={500}
          width={500}
        />
      </div>
      <div className={styles.infoWrapper}>
        <h1>{data.name}</h1>
        <h2 className="text1">INGREDIENTS: {data.ingredients}</h2>
        <h3 className="text1">{data.description}</h3>
        <h4>{data.portions}</h4>
        <div className={styles.specifications}>
          {data.special ? <p className={styles.special}>special</p> : null}
          {data.season ? <p className={styles.season}>season</p> : null}
          {data.vegan ? <p className={styles.vegan}>vegan</p> : null}
          {data.spicy ? <p className={styles.spicy}>spicy</p> : null}
          {data.newItem ? <p className={styles.newItem}>new</p> : null}
        </div>
        <h4 className={styles.price}>Price: {data.price} Sek</h4>
      </div>
    </div>
  );
};

export default MenuDetails;
