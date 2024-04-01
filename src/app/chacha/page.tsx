"use client";
import React, { useEffect, useState } from "react";
import { get, ref, getDatabase } from "firebase/database";
import { app } from "../firebase";
import ChachaCard from "./ChachaCard";
import PageHeadImage from "../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";

export interface MenuItemProps {
  image: string;
  name: string;
  id: string;
  description: string;
  ingredients: string;
  portions: string;
  price: number;
  special: boolean;
  season: boolean;
  vegan: boolean;
  spicy: boolean;
  newItem: boolean;
  disable: boolean;
  priority: number;
}

export interface SectionsProps {
  menuCategory: string;
  menuItems: MenuItemProps[];
}

export default function Chacha() {
  const { headImage, pizza3High } = imagesJson;
  const [loading, setLoading] = useState(false);
  const [menuList, setMenuList] = useState<SectionsProps[]>([]);

  const fetchCategoryData = async () => {
    try {
      setLoading(true);
      const db = getDatabase(app);
      const dbRef = ref(db, `chachaab/menu`);
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const menuListArray: SectionsProps[] = Object.entries(data).map(
          ([category, items]) => ({
            menuCategory: category,
            menuItems: Object.values(
              items as { [key: string]: MenuItemProps }
            ) as MenuItemProps[],
          })
        );
        setMenuList(menuListArray);
      } else {
        console.log("No section data available");
      }
    } catch (error) {
      console.error("Error section fetching data:", error);
      alert("Error fetching section data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <>
      <PageHeadImage
        value="OUR DELICIOUS MENU"
        image={pizza3High}
        short={true}
      />
      <div className="bg-light text-center">
        <h1 className="text-4xl">Fetching Menu Data</h1>
        <div>
          <div className="border-4 border-teal-800 m-4">
            {menuList.map((section, index) => (
              <div key={index} className="flex gap-2 uppercase justify-center">
                <h2 className="px-4 py-2 mx-2 my-2 rounded-md cursor-pointer bg-teal-950 duration-200 text-3xl pb-10 ">
                  {section.menuCategory}
                  <div className="flex flex-wrap justify-center gap-5">
                    {section.menuItems.map((item) => (
                      <ChachaCard
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        id={item.id}
                        description={item.description}
                        ingredients={item.ingredients}
                        portions={item.portions}
                        price={item.price}
                        special={item.special}
                        season={item.season}
                        vegan={item.vegan}
                        spicy={item.spicy}
                        newItem={item.newItem}
                        disable={item.disable}
                        priority={item.priority}
                      />
                    ))}
                  </div>
                </h2>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
