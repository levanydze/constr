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

interface MenuSection {
  menuCategory: string;
  menuItems: MenuItemProps[];
}

export const fireData = async (): Promise<MenuSection[] | null> => {
  try {
    const db = getDatabase(app);
    const dbRef = ref(db, `chachaab/menu`);
    const snapshot = await get(dbRef);
    {
      next: {
        revalidate: 60;
      }
    }
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
