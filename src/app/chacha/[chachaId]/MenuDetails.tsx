"use client";
import { useEffect, useState } from "react";
import { get, ref, getDatabase } from "firebase/database";
import { app } from "../firebase";
import styles from "./MenuDetails.module.css";
import Image from "next/image";
import { MenuItemProps } from "../page";

interface MenuDetailsProps {
  chachaId: string;
}

export default function MenuDetails({ chachaId }: MenuDetailsProps) {
  const [menuData, setMenuData] = useState<MenuItemProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const db = getDatabase(app);
        const dbRef = ref(db, `chachaab/menu`);
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          const categories = snapshot.val();

          // Iterate over each category
          for (const categoryKey in categories) {
            const category = categories[categoryKey];

            // Check if the provided ID exists in the current category
            if (Object.keys(category).includes(chachaId)) {
              // If found, set the menu data and exit the loop
              setMenuData(category[chachaId] as MenuItemProps);
              setLoading(false);
              return;
            }
          }

          // If the ID is not found in any category
          console.log("Menu item not found");
        } else {
          console.log("No section data available");
        }
      } catch (error) {
        console.error("Error fetching menu item:", error);
        alert("Error fetching menu item");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, [chachaId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!menuData) {
    return (
      <div>
        Menu item not found
        <h1>{chachaId}</h1>
      </div>
    );
  }

  return (
    <div className={styles.menuDetailsWrapper}>
      <div className={styles.imgWrapper}>
        <Image
          priority
          src={menuData.image}
          alt={menuData.name}
          height={500}
          width={500}
        />
      </div>
      <div className={styles.infoWrapper}>
        <h1 className="title6 font1 color1">{menuData.name}</h1>
        <h2 className="title2 font1 textLight">
          INGREDIENTS: {menuData.ingredients}
        </h2>
        <h3 className="text1 textMedium">{menuData.description}</h3>
        <h4 className="textLight title1 font1">{menuData.portions}</h4>
        <div className={styles.specifications}>
          {menuData.special ? (
            <p className={`menuTags ${styles.special}`}>special</p>
          ) : null}
          {menuData.season ? (
            <p className={`menuTags ${styles.season}`}>season</p>
          ) : null}
          {menuData.vegan ? (
            <p className={`menuTags ${styles.vegan}`}>vegan</p>
          ) : null}
          {menuData.spicy ? (
            <p className={`menuTags ${styles.spicy}`}>spicy</p>
          ) : null}
          {menuData.newItem ? (
            <p className={`menuTags ${styles.newItem}`}>new</p>
          ) : null}
        </div>
        <h4 className={`font1 textLight title3 ${styles.price}`}>
          Price: {menuData.price} Sek
        </h4>
      </div>
    </div>
  );
}
