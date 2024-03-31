"use client";
import Link from "next/link";
import styles from "../../menu/[menuId]/page.module.css";
import { MenuItemProps } from "../page";
import imageJson from "../../../../json/images.json";
import PageHeadImage from "../../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import { RiArrowGoBackFill } from "react-icons/ri";
import MenuDetails from "./MenuDetails";

interface MenuDetailsPageProps {
  params: {
    chachaId: string;
  };
}

export default async function ChachaIdpage({ params }: MenuDetailsPageProps) {
  const { headImage } = imageJson;

  return (
    <div className={`fadeOut ${styles.pageDetailWrapper}`}>
      <PageHeadImage image={headImage} short={true} value="Yummy Yummy" />
      <div className={styles.lowerDiv}>
        <Link href="./">
          <RiArrowGoBackFill className={styles.goBackIcon} />
        </Link>
        <MenuDetails chachaId={params.chachaId} />
      </div>
    </div>
  );
}
