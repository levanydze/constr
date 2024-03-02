"use client";
import React from "react";
import styles from "./Navigation.module.css";
import EachNav from "./EachNav";
import { usePathname } from "next/navigation";

export default function Navigation2() {
  const pathname = usePathname();

  return (
    <div className={styles.mainNavWrap}>
      <ul className={styles.listWrap}>
        <EachNav title="HOME" url="/" isActive={pathname === "/"} />
        <EachNav
          title="MENU"
          url="/menu"
          isActive={pathname.startsWith("/menu")}
        />
        <EachNav
          title="ABOUT"
          url="/about"
          isActive={pathname.startsWith("/about")}
        />
        <EachNav
          title="CONTACT"
          url="/contact"
          isActive={pathname.startsWith("/contact")}
        />
        <EachNav
          title="RESERVATION"
          url="/reservation"
          isActive={pathname.startsWith("/reservation")}
          button
        />
      </ul>
    </div>
  );
}
