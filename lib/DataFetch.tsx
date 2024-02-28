// "use server";

let intervalId: NodeJS.Timeout | undefined; // Variable to hold the interval ID

export async function getDatas() {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
      "https://raw.githubusercontent.com/levanydze/restaurant2024support/main/test7.json",
      { cache: "no-store" }
    );
    // throw new Error("loading error");
    const data = await response.json();

    if (intervalId) {
      clearInterval(intervalId);
    }

    // fetch menus every 100000 milliseconds (100 second)
    intervalId = setInterval(getDatas, 100000);

    return data;
  } catch (error) {
    console.error("Error fetching menus:", error);
    return [];
  }
  // await getMenu(menu);
  // revalidatePath("/menu");
  // redirect("/menu");  must be fixed -----> lection 127.
  //  ----->  also need to import those functions again
}

export async function getData(id: string) {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
      "https://raw.githubusercontent.com/levanydze/restaurant2024support/main/test7.json",
      { cache: "no-store" }
    );

    // throw new Error("loading error");
    const data = await response.json();
    const menu = data.find((menu: any) => menu.id === id);
    if (menu) {
      return menu;
    } else {
      console.error(`Menu with  ${id} not found`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching Menu:", error);
    return null;
  }
}
