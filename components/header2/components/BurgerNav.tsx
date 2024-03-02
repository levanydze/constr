"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import styles from "./BurgerNav.module.css";
import Button from "../../miniComponents/Button2";

export default function BurgerNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => {
    setIsNavOpen((prev) => !prev);
  };
  const navClose = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <div className={`${styles.mainWrapper} `}>
        <ul
          className={` ${isNavOpen ? styles.activeNav : ""} ${
            styles.menuWrapper
          }`}
        >
          <Link onClick={navClose} className={styles.menuList} href={"/"}>
            HOME
          </Link>
          <Link onClick={navClose} className={styles.menuList} href={"/menu"}>
            MENU
          </Link>
          <Link onClick={navClose} className={styles.menuList} href={"/about"}>
            ABOUT
          </Link>
          <Link
            onClick={navClose}
            className={styles.menuList}
            href={"/contact"}
          >
            CONTACT
          </Link>
          <div className={styles.menuList} onClick={navClose}>
            <Button
              value="Reservation"
              styling="button1"
              target="/reservation"
            />
          </div>
        </ul>
      </div>

      {!isNavOpen ? (
        <div>
          <GiHamburgerMenu className={styles.navIcon} onClick={navToggler} />
        </div>
      ) : (
        <div>
          <IoClose className={styles.navIcon} onClick={navToggler} />
        </div>
      )}
    </>
  );
}
