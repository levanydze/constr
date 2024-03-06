import GuyWithServices from "../../components/sectionComponents/GuyWithServices/GuyWithServices";
import ImageTextButton from "../../components/sectionComponents/ImageTextButton/ImageTextButton";
import FourBox from "../../components/sectionComponents/FourBoxes/FourBox";
import TextIntoPhoto from "../../components/sectionComponents/TextIntiPhoto/TextIntoPhoto";
import imagesJson from "../../json/images.json";
import assetsJson from "../../json/assets.json";
import PhotoText from "../../components/sectionComponents/PhotoText/PhotoText";
import HomePageMain from "../../components/sectionComponents/HomePageMain/HomePageMain";

export default function Home() {
  const { houseIcon, chair } = assetsJson;
  const { textIntoPhoto, headImage, guy, olivOilApple } = imagesJson;
  return (
    <main>
      <HomePageMain image={olivOilApple} alt="headImage" outline={true} />
      <ImageTextButton
        image={headImage}
        title="Professional Tiling & Painting Services"
        text="We combine quality workmanship, superior knowledge and low prices to
            provide you with service unmatched by our competitors."
        button="Get A Qoute"
      />
      <div className="measaureLine"></div>
      <PhotoText
        image={textIntoPhoto}
        title1="Leader's Word"
        title2="MADE FOR FUTURE"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum beatae, sapiente dolorem veniam doloribus eum harum rerum nemo pariatur numquam repellat dicta non architecto voluptas quasi molestiae! Commodi, molestiae?"
        sign="Levani Levanidze"
      />
      <GuyWithServices image={guy} />
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
