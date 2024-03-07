import React from "react";
import styles from "./TextIntoPhoto.module.css";
import Image from "next/image";

interface TextIntoPhotoProps {
  reverse: boolean;
  TextIntoPhotoIcon: string;
  TextIntoPhotoImage: string;
  alt: string;
  text: string;
  title: string;
}

export default function TextIntoPhoto({
  reverse,
  TextIntoPhotoIcon,
  TextIntoPhotoImage,
  alt,
  text,
  title,
}: TextIntoPhotoProps) {
  return (
    <div className="container2">
      <div
        className={` ${styles.TextIntoPhotoWrapper} ${
          reverse ? styles.reverse : null
        }`}
      >
        <Image
          className={` fadeUp ${styles.image}`}
          src={TextIntoPhotoImage}
          width={1000}
          height={1000}
          alt={alt}
        ></Image>
        <div className={`${styles.slideSide} ${styles.textDivWrapper}`}>
          <div className={` ${styles.textDiv}`}>
            <Image
              src={TextIntoPhotoIcon}
              alt="chair"
              width={60}
              height={60}
            ></Image>
            <h2 className="title4 ">{title}</h2>
            <p className="twoLines"></p>
            <h5 className="text1 textMedium">{text}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

// Parent component needs
// const { TextIntoPhotoIcon } = assetsJson;
// const { TextIntoPhotoImage } = imagesJson;

// import imagesJson from "../../../json/images.json";
// import assetsJson from "../../../json/assets.json";

//  <TextIntoPhoto
//    TextIntoPhotoIcon={chair}
//    TextIntoPhotoImage={textIntoPhoto}
//    alt="chair"
//    reverse={true}
//    title="Full With Chocolate"
//    text="2222222 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quidem, modi sapiente sed perspiciatis fuga facilis laboriosam, necessitatibus accusamus temporibus id minima, doloremque tempora neque illo qui eveniet nobis optio?"
//  />
