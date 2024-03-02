"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Logo from "../header2/components/Logo";

const Navigation = () => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => {
    setIsNavOpen((prev) => !prev);
  };
  const navClose = () => {
    setIsNavOpen(false);
  };

  const navItems = [
    { title: "HOME", url: "/", isActive: pathname === "/" },
    { title: "MENU", url: "/menu", isActive: pathname.startsWith("/menu") },
    { title: "ABOUT", url: "/about", isActive: pathname.startsWith("/about") },
    {
      title: "CONTACT",
      url: "/contact",
      isActive: pathname.startsWith("/contact"),
    },
    {
      title: "RESERVATION",
      url: "/reservation",
      isActive: pathname.startsWith("/reservation"),
      button: true,
    },
  ];

  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.mainNavWrap}>
        <Logo />
        <ul className={styles.listWrap}>
          {navItems.map(({ title, url, isActive, button }, index) => (
            <li key={index}>
              <Link
                className={`${styles.navLink} ${
                  isActive ? styles.active : ""
                } ${button ? "button1" : ""}`}
                href={url}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* burger menu */}

      <div className={styles.burgerWrapper}>
        <div className={`${styles.burgerMenu} `}>
          <ul
            className={`${isNavOpen ? styles.burgerActiveNav : ""} ${
              styles.burgerUl
            }`}
          >
            {navItems.map(({ title, url, isActive, button }, index) => (
              <li key={index} className={styles.burgerLi}>
                <Link
                  className={`${styles.burgerLink} ${button ? "button1" : ""}
                  ${isActive ? styles.burgerActiveLink : ""}`}
                  href={url}
                  onClick={navClose}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.logoBurgerDiv}>
          <Logo onClose={navClose} />
          {!isNavOpen ? (
            <div className={styles.openCloseIconDiv}>
              <GiHamburgerMenu
                className={styles.openCloseIcon}
                onClick={navToggler}
              />
            </div>
          ) : (
            <div className={styles.openCloseIconDiv}>
              <IoClose className={styles.openCloseIcon} onClick={navToggler} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
