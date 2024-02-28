import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EachFourBoxProps {
  image: string;
  alt: string;
  title: string;
  link?: boolean;
}

export default function EachFourBox({
  image,
  alt,
  title,
  link,
}: EachFourBoxProps) {
  return (
    <>
      {!link ? (
        <div>
          <Image src={image} width={70} height={70} alt={alt} />
          <p className="twoLines"></p>
          <h4 className="text1 textMedium">{title}</h4>
        </div>
      ) : (
        <Link href="/contact">
          <Image src={image} width={70} height={70} alt={alt} />
          <p className="twoLines"></p>
          <h4 className="text1 textMedium">{title}</h4>
        </Link>
      )}
    </>
  );
}
