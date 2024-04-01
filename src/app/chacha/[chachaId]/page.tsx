"use client";
import Link from "next/link";
import styles from "../../menu/[menuId]/page.module.css";
import imageJson from "../../../../json/images.json";
import PageHeadImage from "../../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import { RiArrowGoBackFill } from "react-icons/ri";
import MenuDetails from "./MenuDetails";

interface MenuDetailsPageProps {
  params: {
    chachaId: string;
  };
}

export default function ChachaIdpage({ params }: MenuDetailsPageProps) {
  const { headImage } = imageJson;

  return (
    <div className={`fadeOut ${styles.pageDetailWrapper}`}>
      <PageHeadImage image={headImage} short={true} value="Yummy Yummy" />
      <div className={styles.lowerDiv}>
        <Link href="./">
          <RiArrowGoBackFill className={styles.goBackIcon} />
        </Link>
        {/* <h2> {params.chachaId}</h2> */}
        <MenuDetails chachaId={params.chachaId} />
      </div>
    </div>
  );
}
