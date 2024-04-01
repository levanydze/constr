import styles from "./MenuDetails.module.css";
import Image from "next/image";
import { fireEachData } from "../../functions";
import { MenuItemProps } from "../../functions";

interface MenuDetailsProps {
  itemId: string;
}

export default async function MenuDetails({ itemId }: MenuDetailsProps) {
  const data = await fireEachData(itemId);

  if (!data) {
    // Handle the case where data is null
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.menuDetailsWrapper}>
      <div className={styles.imgWrapper}>
        <Image
          priority
          src={data.image}
          alt={data.name}
          height={500}
          width={500}
        />
      </div>
      <div className={styles.infoWrapper}>
        <h1 className="title6 font1 color1">{data.name}</h1>
        <h2 className="title2 font1 textLight">
          INGREDIENTS: {data.ingredients}
        </h2>
        <h3 className="text1 textMedium">{data.description}</h3>
        <h4 className="textLight title1 font1">{data.portions}</h4>
        <div className={styles.specifications}>
          {data.special ? (
            <p className={`menuTags ${styles.special}`}>special</p>
          ) : null}
          {data.season ? (
            <p className={`menuTags ${styles.season}`}>season</p>
          ) : null}
          {data.vegan ? (
            <p className={`menuTags ${styles.vegan}`}>vegan</p>
          ) : null}
          {data.spicy ? (
            <p className={`menuTags ${styles.spicy}`}>spicy</p>
          ) : null}
          {data.newItem ? (
            <p className={`menuTags ${styles.newItem}`}>new</p>
          ) : null}
        </div>
        <h4 className={`font1 textLight title3 ${styles.price}`}>
          Price: {data.price} Sek
        </h4>
      </div>
    </div>
  );
}
