import React from "react";
import PageHeadImage from "../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";

export const metadata = {
  title: "Projects",
};
export default function ProjectsPage() {
  const { headImage } = imagesJson;

  return (
    <div>
      <PageHeadImage
        value="Projects
      "
        image={headImage}
        short={false}
      />
    </div>
  );
}
