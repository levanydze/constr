"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import infoJson from "../../json/info.json";
import Link from "next/link";
import BurgerNav from "./BurgerNav";
import Nav from "./Nav";
import TopBar from "./TopBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  const { name } = infoJson;

  return (
    <header>
      <TopBar />
      <div className="measaureLine"></div>
      <div className={styles.logoNav}>
        <Link className="title5 font2 textDark" href="./" onClick={handleClose}>
          {name}
        </Link>
        <Nav />
        <BurgerNav
          closeNav={handleClose}
          toggleNav={toggleNav}
          isOpen={isOpen}
        />
      </div>
    </header>
  );
}

export default Header;
