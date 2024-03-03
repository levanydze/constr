import Link from "next/link";
import Logo from "../../miniComponents/Logo/Logo";
import styles from "./StandartNav.module.css";
import { navItems } from "../NavArray";
import { usePathname } from "next/navigation";

export default function StandartNav() {
  const pathname = usePathname();
  return (
    <div className={styles.mainNavWrap}>
      <ul className={styles.listWrap}>
        {navItems.map(({ title, homePage, url, button }, index) => (
          <li key={index}>
            <Link
              className={`${styles.navLink} ${
                pathname === url || (pathname.startsWith(url) && !homePage)
                  ? styles.active
                  : ""
              } ${button ? "button1" : ""}`}
              href={url}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
