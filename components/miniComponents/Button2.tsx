import Link from "next/link";
import React from "react";

interface button2Props {
  value: string;
  styling: string;
  target: string;
}
export default function Button2({ value, styling, target }: button2Props) {
  return (
    <>
      <Link href={target} className={styling}>
        {value}
      </Link>
    </>
  );
}
