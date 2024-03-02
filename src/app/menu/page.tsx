import React, { Suspense } from "react";
import PageHeadImage from "../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import MenuList from "./menuList/MenuList";
import LoadingComponent from "../../../components/sectionComponents/error-loading-notFound/LoadingComponent";

export const metadata = {
  title: "Menu ",
  description: "Delicious Food",
};

export default function MenuPage() {
  const { headImage } = imagesJson;
  return (
    <div>
      <PageHeadImage
        value="OUR DELICIOUS MENU"
        image={headImage}
        short={true}
      />
      <Suspense fallback={<LoadingComponent />}>
        <MenuList category="pizza" />
        <MenuList category="breakfast" />
        <MenuList category="lunch" />
        <MenuList category="dinner" />
        <MenuList category="dessert" />
        <MenuList category="drink" />
      </Suspense>
    </div>
  );
}
