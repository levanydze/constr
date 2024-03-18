import React from "react";
import styles from "./Second.module.css";
import Link from "next/link";
import { navItems } from "../header3/NavArray";

export default function Second() {
  return (
    <div>
      <h5 className="title3">Navigation</h5>

      <div className={styles.menuWrap}>
        {navItems.map((nav, index) => (
          <Link className={styles.menu} href={nav.url} key={index}>
            {nav.title}
            {nav.title === "MENU" ? <p className="updated">updated</p> : ""}
          </Link>
        ))}
      </div>
    </div>
  );
}
