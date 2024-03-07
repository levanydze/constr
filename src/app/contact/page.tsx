import React from "react";
import ContactForm from "../../../components/sectionComponents/CotactForm/ContactForm";
import PageHeadImage from "../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import MapTimes from "../../../components/sectionComponents/map&times/MapTimes";
export const metadata = {
  title: "Contact",
};
export default function ContactPage() {
  const { headImage } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="CONTSCT US" image={headImage} short={true} />
      <ContactForm />
      <MapTimes />
    </div>
  );
}
