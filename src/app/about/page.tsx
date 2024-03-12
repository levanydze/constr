import React from "react";
import PageHeadImage from "../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import FramerSlider from "../../../components/sectionComponents/SliderAnimation/FramerSlider";
import Dashboard from "../../../components/sectionComponents/SliderPeople/Dashboard";
import MapAndTimes from "../../../components/sectionComponents/map&times/MapTimes";
import TwoTextAbout from "../../../components/sectionComponents/TwoTextAbout/TwoTextAbout";
import PhotoText from "../../../components/sectionComponents/PhotoText/PhotoText";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  const { headImage, pizza1High, chef } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="ABOUT US" image={pizza1High} short={true} />
      <TwoTextAbout />
      <PhotoText
        image={chef}
        title1="Leader's Word"
        title2="MADE FOR FUTURE"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum beatae, sapiente dolorem veniam doloribus eum harum rerum nemo pariatur numquam repellat dicta non architecto voluptas quasi molestiae! Commodi, molestiae?"
        sign="Levani Levanidze"
      />
      <FramerSlider />
      <Dashboard />
      <MapAndTimes />
    </div>
  );
}
