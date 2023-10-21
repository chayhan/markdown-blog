import { prefix } from "@/config";
import styles from "./SubPage.module.css";
import Link from "next/link";

type SubPageProps = {
  type:"category" | "document",
  date?:Date | undefined,
  children:React.ReactNode,
  categoryName:string,
};

export default function SubPage({children, type, date, categoryName}:SubPageProps) {
  return <main>
    <div className={styles.headerWrap}>
      <div>
        <div className={styles.subTitle}>
          {date && type === "document" ? 
          <>
            <Link className={styles.category} href={`/category/${categoryName}`}>
              {categoryName}
            </Link>
            <span className={styles.date}>
              {date.toLocaleString()}
            </span>
          </> : categoryName }
        </div>
      </div>
    </div>
    <div>
      <div className={styles.contentWrap}>
        {children}
      </div>
    </div>
  </main>
}

