import GuyWithServices from "../../components/sectionComponents/GuyWithServices/GuyWithServices";
import ImageTextButton from "../../components/sectionComponents/ImageTextButton/ImageTextButton";
import FourBox from "../../components/sectionComponents/FourBoxes/FourBox";
import TextIntoPhoto from "../../components/sectionComponents/TextIntiPhoto/TextIntoPhoto";
import imagesJson from "../../json/images.json";
import assetsJson from "../../json/assets.json";

export default function Home() {
  const { houseIcon, chair } = assetsJson;
  const { textIntoPhoto, headImage } = imagesJson;
  return (
    <main>
      <ImageTextButton />
      <div className="measaureLine"></div>
      <GuyWithServices />
      <TextIntoPhoto
        TextIntoPhotoIcon={houseIcon}
        TextIntoPhotoImage={textIntoPhoto}
        alt="chair"
        reverse={false}
        title="The Secret of Croissant"
        text="11111 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quidem, modi sapiente sed perspiciatis fuga facilis laboriosam, necessitatibus accusamus temporibus id minima, doloremque tempora neque illo qui eveniet nobis optio?"
      />
      <TextIntoPhoto
        TextIntoPhotoIcon={chair}
        TextIntoPhotoImage={headImage}
        alt="chair"
        reverse={true}
        title="Full With Chocolate"
        text="2222222 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quidem, modi sapiente sed perspiciatis fuga facilis laboriosam, necessitatibus accusamus temporibus id minima, doloremque tempora neque illo qui eveniet nobis optio?"
      />
      <FourBox />
    </main>
  );
}
