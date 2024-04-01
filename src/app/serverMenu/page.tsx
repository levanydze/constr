import Image from "next/image";
import { fireData } from "./functions";
import ServerCard from "./ServerCard";
import imagesJson from "../../../json/images.json";
import PageHeadImage from "../../../components/sectionComponents/PageHeadImage/PageHeadImage";
export const revalidate = 3600; // revalidate at most every hour

export default async function ServerMenu() {
  const data = await fireData();
  const { headImage, pizza3High } = imagesJson;

  return (
    <>
      <PageHeadImage
        value="OUR DELICIOUS MENU"
        image={pizza3High}
        short={true}
      />
      <div className="container2 ">
        {data
          ? data.map((section) => (
              <div
                key={section.menuCategory}
                className="text-center capitalize  "
              >
                <h3 className="font4 title3 mt-10 color1">MENU</h3>
                <h2 className="text-3xl  mb-10  font2">
                  {section.menuCategory}
                </h2>
                <div className="flex items-center flex-wrap justify-center">
                  {section.menuItems.map((item) => (
                    <ServerCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      description={item.description}
                      disable={item.disable}
                      portions={item.portions}
                      price={item.price}
                      priority={item.priority}
                      season={item.season}
                      special={item.special}
                      spicy={item.spicy}
                      vegan={item.vegan}
                      newItem={item.newItem}
                      ingredients={item.ingredients}
                    />
                  ))}
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
