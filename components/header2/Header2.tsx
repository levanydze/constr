import React from "react";
import styles from "./Header2.module.css";
import Navigation from "./Navigation";
import BurgerNav from "./BurgerNav";
import Logo from "./Logo";

export default function Header() {
  return (
    <main className={styles.headWrapper}>
      <Logo />
      <div>
        <Navigation />
        <BurgerNav />
      </div>
    </main>
  );
}
