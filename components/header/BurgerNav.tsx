"use client";

import { usePathname } from "next/navigation";
import styles from "./BurgerNav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

type BurgerNavProps = {
  closeNav: () => void;
  isOpen: boolean;
  toggleNav: () => void;
};

export default function BurgerNav({
  closeNav,
  toggleNav,
  isOpen,
}: BurgerNavProps) {
  const pathname = usePathname();

  return (
    <>
      <p className={styles.icon} onClick={toggleNav}>
        {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </p>
      <nav
        className={`${styles.burgerNavWrap} ${isOpen ? styles.active : null}`}
      >
        <ul className={styles.burgerNavUl}>
          <Link
            className={`${styles.link} ${
              pathname === "/" ? styles.activeLink : ""
            }`}
            href="/"
            onClick={closeNav}
          >
            HOME
          </Link>
          <Link
            className={`${styles.link} ${
              pathname.startsWith("/about") ? styles.activeLink : ""
            }`}
            href={"/about"}
            onClick={closeNav}
          >
            ABOUT
          </Link>
          <Link
            className={`${styles.link} ${
              pathname.startsWith("/projects") ? styles.activeLink : ""
            }`}
            href={"/projects"}
            onClick={closeNav}
          >
            PROJECTS
          </Link>
          <Link
            className={`${styles.link} ${
              pathname.startsWith("/contact") ? styles.activeLink : ""
            }`}
            href={"/contact"}
            onClick={closeNav}
          >
            CONTACT
          </Link>
        </ul>
      </nav>
    </>
  );
}
