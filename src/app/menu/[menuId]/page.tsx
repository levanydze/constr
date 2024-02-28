import React, { Suspense } from "react";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

import styles from "./page.module.css";
import MenuDetails from "./menuDetails/MenuDetails";
import PageHeadImage from "../../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import LoadingComponent from "../../../../components/sectionComponents/error-loading-notFound/LoadingComponent";

import imageJson from "../../../../json/images.json";

export const metadata: { title: string; description: string } = {
  title: "Our Delicious Food | ChaCha Restaurant",
  description: "Delicious Food",
};

interface MenuDetailsPageProps {
  params: {
    menuId: string;
  };
}

export default function MenuDetailsPage({ params }: MenuDetailsPageProps) {
  const { headImage } = imageJson;

  return (
    <div className={styles.pageDetailWrapper}>
      <PageHeadImage image={headImage} short={true} value="Menu" />
      <div className={styles.lowerDiv}>
        <Link href="./">
          <RiArrowGoBackFill className={styles.goBackIcon} />
        </Link>
        <Suspense fallback={<LoadingComponent />}>
          <MenuDetails menuId={params.menuId} />
        </Suspense>
      </div>
    </div>
  );
}
