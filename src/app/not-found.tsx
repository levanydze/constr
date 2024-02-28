import Link from "next/link";
import React from "react";
import PageHeadImage from "../../components/sectionComponents/PageHeadImage/PageHeadImage";
import imagesJson from "../../json/images.json";
import NotFoundComponent from "../../components/sectionComponents/error-loading-notFound/NotFoundComponent";

export default function error() {
  const { headImage } = imagesJson;
  return (
    <>
      <PageHeadImage short image={headImage} value="Something Went Wrong " />
      <NotFoundComponent />
    </>
  );
}
