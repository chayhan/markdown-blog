import { ReactElement } from "react";
import styles from "./ArticleHeader.module.css";

interface MenuProp {
  children:ReactElement,
  height:number,
  className?:string
}

export default function Menu ({children, height, className = ''}:MenuProp) {
  return <div className={styles.container + ' ' + className} style={{height:height}}>
    {children}
  </div>
}