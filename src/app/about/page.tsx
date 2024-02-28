import React from "react";
import PageHeadImage from "../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";

export default function AboutPage() {
  const { headImage } = imagesJson;

  return (
    <div>
      <PageHeadImage value="About Us" image={headImage} short={false} />
      <h1 className="title0"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="title1"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="title2"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="title3"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="title4"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="title5"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="title6"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="title7"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="title8"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="title9"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="title10"> Levani Levanidze LEVANI LEVANIDZE</h1>

      <h1 className="text1"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="text2"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="text3"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="text4"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="text5"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="text6"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="text7"> Levani Levanidze LEVANI LEVANIDZE</h1>
      <h1 className="text8"> Levani Levanidze LEVANI LEVANIDZE</h1>
    </div>
  );

  /*

*/
}
