// 글들의 제목을 게시판 형태로 나열하는 컴포넌트이다.
import { MarkdownDocument, getCategory } from "@/modules/ContentParser";
import Link from "next/link";
import styles from "./BoardList.module.css";

const BLOG_LINK = '/blog';

export default function BoardList({ categoryName }: { categoryName:string }) {
  const categoryItems:MarkdownDocument[] = getCategory(categoryName);
  return (
    <div className={styles.itemWrapper}>
      {categoryItems.map((item: MarkdownDocument, idx: number) => {
        return (
          <div className={styles.item} key={idx}>
            <div className={styles.itemTitle}>
              <Link href={`${BLOG_LINK}/${categoryName}/${idx}`}>
                {item.title}
              </Link>
            </div>
            <div className={styles.itemDate}>{item.getParsedDate()}</div>
          </div>
        );
      })}
    </div>
  );
}
