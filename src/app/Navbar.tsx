"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { prefix } from "@/config";
import Image from "next/image";


export default function Navbar() {
  return (
    <div className={styles.nav}>
      <Link className={styles.logo} href="/">
        <Image src={`${prefix}/favicon-128.png`} alt="favicon" width={32} height={32} style={{ borderRadius: 6 }}></Image>
        <span className={styles.logoCharacter}>johann blue</span>
      </Link>
    </div>
  );
}
