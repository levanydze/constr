import styles from "./MenuDetails.module.css";
import Image from "next/image";
import { getData } from "../../../../../lib/DataFetch";

interface MenuDetailsProps {
  menuId: string;
}

interface MenuDataProps {
  name: string;
  image: string;
  ingredients: string;
  description: string;
  portions: string;
  special: boolean;
  season: boolean;
  vegan: boolean;
  spicy: boolean;
  newItem: boolean;
  price: string;
}

export default async function MenuDetails({ menuId }: MenuDetailsProps) {
  const data: MenuDataProps = await getData(menuId);

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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quaerat
      animi facere praesentium iusto quod molestiae delectus neque atque ullam!
      Blanditiis inventore earum possimus delectus, placeat voluptates ipsa
      minima aperiam.
    </div>
  );
}
