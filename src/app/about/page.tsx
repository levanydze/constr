import React from "react";
import PageHeadImage from "../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import FramerSlider from "../../../components/sectionComponents/SliderAnimation/FramerSlider";

export const metadata = {
  title: "about levani",
};

export default function AboutPage() {
  const { headImage } = imagesJson;

  return (
    <div>
      <PageHeadImage value="About Us" image={headImage} short={false} />
      <div>
        <FramerSlider />
      </div>
    </div>
  );

  /*

*/
}
