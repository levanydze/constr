import React from "react";
import PageHeadImage from "../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import FramerSlider from "../../../components/sectionComponents/SliderAnimation/FramerSlider";
import Dashboard from "../../../components/sectionComponents/SliderPeople/Dashboard";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  const { headImage } = imagesJson;
  return (
    <div>
      <PageHeadImage value="ABOUT US" image={headImage} short={true} />
      <FramerSlider />
      <Dashboard />
    </div>
  );
}
