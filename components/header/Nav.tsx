"use client";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navUl}>
        <Link
          className={`${styles.link} ${
            pathname === "/" ? styles.activeLink : ""
          }`}
          href="/"
        >
          HOME
        </Link>
        <Link
          className={`${styles.link} ${
            pathname.startsWith("/about") ? styles.activeLink : ""
          }`}
          href={"/about"}
        >
          ABOUT
        </Link>
        <Link
          className={`${styles.link} ${
            pathname.startsWith("/projects") ? styles.activeLink : ""
          }`}
          href={"/projects"}
        >
          PROJECTS
        </Link>
        <Link
          className={`${styles.link} ${
            pathname.startsWith("/contact") ? styles.activeLink : ""
          }`}
          href={"/contact"}
        >
          CONTACT
        </Link>
        <Link
          className={`${styles.link} ${
            pathname.startsWith("/menu") ? styles.activeLink : ""
          }`}
          href={"/menu"}
        >
          MENU
        </Link>
      </ul>
    </nav>
  );
}
