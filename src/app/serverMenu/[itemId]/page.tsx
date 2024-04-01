import React, { Suspense } from "react";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

import styles from "./page.module.css";
import MenuDetails from "./menuDetails/MenuDetails";
import PageHeadImage from "../../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import imageJson from "../../../../json/images.json";

// import { fireData } from "../functions";

interface MenuDetailsPageProps {
  params: {
    itemId: string;
  };
}

export default function MenuDetailsPage({ params }: MenuDetailsPageProps) {
  const { headImage } = imageJson;
  console.log(params.itemId);
  return (
    <div className={`fadeOut ${styles.pageDetailWrapper}`}>
      <PageHeadImage image={headImage} short={true} value="Yummy Yummy" />
      <div className={styles.lowerDiv}>
        <Link href="./">
          <RiArrowGoBackFill className={styles.goBackIcon} />
        </Link>
        <MenuDetails itemId={params.itemId} />
      </div>
    </div>
  );
}
