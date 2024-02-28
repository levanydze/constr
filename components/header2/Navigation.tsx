"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Navigation.module.css";
import Button from "../../components/miniComponents/Button2";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <div className={styles.mainNavWrap}>
      <ul className={styles.listWrap}>
        <li>
          <Link
            className={`${styles.navLink} ${
              pathname === "/" ? styles.active : ""
            }`}
            href={"/"}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.navLink} ${
              pathname.startsWith("/menu") ? styles.active : ""
            }`}
            href={"/menu"}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.navLink} ${
              pathname === "/about" ? styles.active : ""
            }`}
            href={"/about"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.navLink} ${
              pathname === "/contact" ? styles.active : ""
            }`}
            href={"/contact"}
          >
            contact
          </Link>
        </li>
        <Button value="Reservation" styling="button1" target="/reservation" />
      </ul>
    </div>
  );
}
