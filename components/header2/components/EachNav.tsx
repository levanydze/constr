"use client";
import Link from "next/link";
import styles from "./EachNav.module.css";
import { usePathname } from "next/navigation";

interface EachNavProps {
  title: string;
  url: string;
  isActive: boolean;
  button?: boolean;
}

export default function EachNav({
  title,
  url,
  isActive,
  button,
}: EachNavProps) {
  return (
    <li>
      <Link
        className={`${styles.navLink} ${isActive ? styles.active : ""} ${
          button ? "button1" : ""
        }`}
        href={url}
      >
        {title}
      </Link>
    </li>
  );
}
{
  /* <Link
  className={`${styles.navLink} ${
    pathname.startsWith(url) ? styles.active : ""
  } ${button ? "button1" : ""}`}
  href={url}
>
  {title}
</Link>; */
}
