"use client";

import { useTheme } from "@/ts/theme";
import styles from "./Navbar.module.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";

export default function Navbar() {
  const [theme, setTheme] = useTheme();
  return (
    <div className={styles.nav}>
      {/* 우측에 search 바, 다크/라이트 모드 토글 등 구현 */}
      <Link className={styles.home} href={"/"}>
        johannblue
      </Link>
      {theme == "dark" ? (
        <div
          className={`${styles.themeChanger} ${styles.dark}`}
          onClick={() => setTheme("light")}
        >
          {" "}
          <LightModeIcon />{" "}
        </div>
      ) : (
        <div
          className={`${styles.themeChanger} ${styles.dark}`}
          onClick={() => setTheme("dark")}
        >
          {" "}
          <DarkModeIcon />{" "}
        </div>
      )}
    </div>
  );
}
