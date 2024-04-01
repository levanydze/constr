"use server";
import { getDatabase, ref, get } from "firebase/database";
import { app } from "./firebaseConfig";

export interface MenuItemProps {
  id: string;
  name: string;
  image: string;
  ingredients: string;
  description: string;
  disable: boolean;
  portions: string;
  price: number | string;
  priority: number;
  newItem: boolean;
  season: boolean;
  special: boolean;
  spicy: boolean;
  vegan: boolean;
}

export interface MenuSection {
  menuCategory: string;
  menuItems: MenuItemProps[];
}

export const fireData = async (id: string): Promise<MenuSection[] | null> => {
  try {
    const db = getDatabase(app);
    const dbRef = ref(db, `chachaab/menu`);
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const menuListArray: MenuSection[] = Object.entries(data).map(
        ([category, items]) => ({
          menuCategory: category,
          menuItems: Object.values(
            items as { [key: string]: MenuItemProps }
          ) as MenuItemProps[],
        })
      );
      return menuListArray;
    } else {
      console.log("No section data available");
      return null;
    }
  } catch (error) {
    console.error("Error section fetching data:", error);
    alert("Error fetching section data");
    return null;
  }
};

export async function fireEachData(id: string): Promise<MenuItemProps | null> {
  try {
    const db = getDatabase(app);
    const dbRef = ref(db, `chachaab/menu/breakfast/${id}`);
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return data as MenuItemProps; // Cast the data to MenuItemProps
    } else {
      console.error(`No data available for menu with ID: ${id}`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching menu data:", error);
    return null;
  }
}
