import React from "react";
import styles from "./Header2.module.css";
import Navigation from "./components/Navigation";
import BurgerNav from "./components/BurgerNav";
import Logo from "./components/Logo";

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
