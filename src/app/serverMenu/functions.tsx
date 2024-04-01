import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
const firebaseConfig = {
  databaseURL:
    "https://chacha-9137b-default-rtdb.europe-west1.firebasedatabase.app",
};
const app = initializeApp(firebaseConfig);
//  end of firebase

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

export async function fireData(): Promise<MenuSection[] | null> {
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
}

export async function fireEachData(id: string): Promise<MenuItemProps | null> {
  try {
    const db = getDatabase(app);
    const dbRef = ref(db, `chachaab/menu`);
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const data = snapshot.val();

      // Iterate through categories to find the menu item with the provided id
      for (const [category, items] of Object.entries(data)) {
        const menuItems = items as { [key: string]: MenuItemProps };
        const menuItem = menuItems[id];
        if (menuItem) {
          return menuItem as MenuItemProps;
        }
      }
      console.error(`No menu item found with ID: ${id}`);
      return null;
    } else {
      console.log("No  data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching menu data:", error);
    alert("Error fetching menu data");
    return null;
  }
}
