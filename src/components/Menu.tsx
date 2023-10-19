"use client";

import styles from "./Menu.module.css";
import Link from "next/link";
import { Category } from "@/modules/MarkdownPost";
import { prefix } from "@/config";
import Image from "next/image";
import { useEffect, useState } from "react";

type MenuProps = {
  categoryData: Category[];
};

function setMenu(command: "hide" | "show" | "toggle", listEl: Element | null, lineBreakEl: Element | null): React.MouseEventHandler<HTMLElement> {
  
  return () => {
    if (listEl == null || lineBreakEl == null) {
      console.error("Menu Toggle Failed because there is no element which contains menu navigation bar.");
      return;
    }

    if (command == "hide") {
      listEl.classList.add(styles.hidden);
      lineBreakEl.classList.add(styles.hidden);
    }
    if (command == "show") {
      listEl.classList.remove(styles.hidden);
      lineBreakEl.classList.remove(styles.hidden);
    }
    if(command == "toggle") {
      if(!listEl.classList.contains(styles.hidden)) {
        listEl.classList.add(styles.hidden);
        lineBreakEl.classList.add(styles.hidden);
      }
      else {
        listEl.classList.remove(styles.hidden);
        lineBreakEl.classList.remove(styles.hidden);
      }
    }
  };
}

export default function Menu({ categoryData }: MenuProps) {
  const [listElement, setListElement] = useState<Element | null>(null);
  const [lineBreak, setLineBreak] = useState<Element | null>(null);
  useEffect(() => {
    setListElement(document.querySelector(`.${styles.list}`));
    setLineBreak(document.querySelector(`.${styles.lineBreak}`));
    console.log(listElement);
    console.log(lineBreak);
  }, [listElement, lineBreak]);
  return (
    <div className={styles.nav}>
      <Link className={styles.logo} href="/">
        <Image src={`${prefix}/favicon-128.png`} alt="favicon" width={32} height={32} style={{ borderRadius: 6 }}></Image>
        <span className={styles.logoCharacter}>johann blue</span>
      </Link>
      <button type="button" className={styles.collapseButton} onClick={setMenu("toggle", listElement, lineBreak)} />
      <div className={`${styles.lineBreak} ${styles.hidden}`}></div>
      <ul className={`${styles.list} ${styles.hidden}`}>
        {categoryData.map((value, idx) => {
          return (
            <li key={idx} onClick={setMenu("hide", listElement, lineBreak)}>
              <Link href={`/blog/${value.name}`}>{`${value.name}`}</Link>
            </li>
          );
        })}
        <li>
          <a href="https://github.com/johannblue">
            <Image className={styles.githubIcon} src={`${prefix}/github-icon.png`} alt="github" width={32} height={32} />
          </a>
        </li>
      </ul>
    </div>
  );
}
