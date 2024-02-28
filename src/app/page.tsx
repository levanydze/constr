import GuyWithServices from "../../components/sectionComponents/GuyWithServices/GuyWithServices";
import ImageTextButton from "../../components/sectionComponents/ImageTextButton/ImageTextButton";
import FourBox from "../../components/sectionComponents/FourBoxes/FourBox";
import TextIntoPhoto from "../../components/sectionComponents/TextIntiPhoto/TextIntoPhoto";
import imagesJson from "../../json/images.json";
import assetsJson from "../../json/assets.json";
import PhotoText from "../../components/sectionComponents/PhotoText/PhotoText";

export default function Home() {
  const { houseIcon, chair } = assetsJson;
  const { textIntoPhoto, headImage, guy } = imagesJson;
  return (
    <main>
      <ImageTextButton />
      <div className="measaureLine"></div>
      <PhotoText
        image={guy}
        title1="Leader's Word"
        title2="MADE FOR FUTURE"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum beatae, sapiente dolorem veniam doloribus eum harum rerum nemo pariatur numquam repellat dicta non architecto voluptas quasi molestiae! Commodi, molestiae?"
        sign="Levani Levanidze"
      />
      <GuyWithServices />
      <TextIntoPhoto
        TextIntoPhotoIcon={houseIcon}
        TextIntoPhotoImage={textIntoPhoto}
        alt="chair"
        reverse={false}
        title="The Secret of Safe Roofing"
        text="11111 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quidem, modi sapiente sed perspiciatis fuga facilis laboriosam, necessitatibus accusamus temporibus id minima, doloremque tempora neque illo qui eveniet nobis optio?"
      />
      <TextIntoPhoto
        TextIntoPhotoIcon={chair}
        TextIntoPhotoImage={headImage}
        alt="chair"
        reverse={true}
        title="Garantee of 100 years"
        text="2222222 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quidem, modi sapiente sed perspiciatis fuga facilis laboriosam, necessitatibus accusamus temporibus id minima, doloremque tempora neque illo qui eveniet nobis optio?"
      />
      <FourBox />
    </main>
  );
}
