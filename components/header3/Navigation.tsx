"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Logo from "../header2/components/Logo";
import { navItems } from "./NavArray";
import BurgerNav from "./BurgerNav";
import StandartNav from "./StandartNav";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => {
    setIsNavOpen((prev) => !prev);
  };
  const navClose = () => {
    setIsNavOpen(false);
  };

  return (
    <div className={styles.navigationWrapper}>
      <StandartNav />
      <BurgerNav
        navClose={navClose}
        navToggler={navToggler}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
    </div>
  );
};

export default Navigation;
