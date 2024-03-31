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

// "use client";
// import React, { useEffect, useState } from "react";
// import { get, ref, getDatabase } from "firebase/database";
// import { database } from "../firebaseConfig";
// import { app } from "../firebaseConfig";
// import Image from "next/image";
// import styles from "../menu/card/MenuCard.module.css";

// export interface MenuItemProps {
//   image: string;
//   name: string;
//   id: string;
//   description: string;
//   ingredients: string;
//   portions: string;
//   price: number;
//   special: boolean;
//   season: boolean;
//   vegan: boolean;
//   spicy: boolean;
//   newItem: boolean;
//   disable: boolean;
//   priority: number;
// }

// interface SectionsProps {
//   menuCategory: string;
//   menuItems: MenuItemProps[];
// }
// interface categoryProps {
//   menuCategory: string[];
// }

// export default function Chacha() {
//   const [menuItems, setMenuItems] = useState<MenuItemProps[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [emptyCategory, setEmptyCategory] = useState<boolean>(false);
//   const [menuList, setMenuList] = useState<SectionsProps[]>([]);

//   const fetchCategoryData = async () => {
//     try {
//       setLoading(true);
//       const db = getDatabase(app);
//       const dbRef = ref(db, `chachaab/menu`);
//       const snapshot = await get(dbRef);

//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         const menuListArray: SectionsProps[] = Object.entries(data).map(
//           ([category, items]) => ({
//             menuCategory: category,
//             menuItems: Object.values(
//               items as { [key: string]: MenuItemProps }
//             ) as MenuItemProps[],
//           })
//         );
//         setMenuList(menuListArray);
//       } else {
//         console.log("No section data available");
//       }
//     } catch (error) {
//       console.error("Error section fetching data:", error);
//       alert("Error fetching section data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategoryData();
//   }, []);

//   return (
//     <div className="bg-light text-center">
//       <h1 className="text-4xl">Fetching Menu Data</h1>
//       <div>
//         <div className="border-4 border-teal-800 m-4">
//           {menuList.map((section, index) => (
//             <div key={index} className="flex gap-2 uppercase justify-center">
//               <h2 className="px-4 py-2 mx-2 my-2 rounded-md cursor-pointer bg-teal-950 duration-200 ">
//                 {section.menuCategory}
//                 <div className="flex flex-wrap justify-center">
//                   {section.menuItems.map((item) => (
//                     <div
//                       key={item.id}
//                       className={`m-8 relative border-[2px] rounded-md border-teal-700  ${styles.cardWrapper}`}
//                     >
//                       <div className="flex justify-between  absolute top-0 p-2 w-full">
//                         <p className="button1"> {item.priority}</p>
//                       </div>
//                       <div className="absolute w-full bottom-1/2 ">
//                         {item.disable ? (
//                           <button
//                             className="bg-red-900 px-4 py-2  cursor-default w-full  h-12"
//                             onClick={(e) => {}}
//                           >
//                             Disabeled
//                           </button>
//                         ) : null}
//                       </div>

//                       <div className={styles.cardWrapper}>
//                         <Image
//                           src={item.image}
//                           width={600}
//                           height={600}
//                           alt={item.name}
//                         ></Image>
//                         <div className={styles.cardInfoDiv}>
//                           <div className={styles.namePrice}>
//                             <h1 className="title1 font1">{item.name}</h1>
//                             <p className={`${styles.dotted}`}></p>
//                             <h6>{item.price} sek</h6>
//                           </div>
//                           <h2 className="title0 font1 textMedium">
//                             {item.ingredients.length > 40
//                               ? item.ingredients.substring(0, 40) + "..."
//                               : item.ingredients}
//                           </h2>
//                           <div className={styles.details}>
//                             {item.portions && (
//                               <h5 className="title0 font1">{item.portions}</h5>
//                             )}
//                             {item.vegan && (
//                               <p className={`menuTags ${styles.vegan}`}>
//                                 VEGAN
//                               </p>
//                             )}
//                             {item.special && (
//                               <p className={`menuTags ${styles.special}`}>
//                                 SPECIAL
//                               </p>
//                             )}
//                             {item.season && (
//                               <p className={`menuTags ${styles.season}`}>
//                                 SEASON
//                               </p>
//                             )}
//                             {item.spicy && (
//                               <p className={`menuTags ${styles.spicy}`}>
//                                 SPICY
//                               </p>
//                             )}
//                             {item.newItem && (
//                               <p className={`menuTags ${styles.newItem}`}>
//                                 NEW
//                               </p>
//                             )}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="pb-40 w-full h-1"></div>
//                     </div>
//                   ))}
//                 </div>
//               </h2>
//             </div>
//           ))}
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
// }
