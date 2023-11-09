import Postlist from "./Postlist";
import styles from "./page.module.css";
import { getArticleList } from "@/ts/Markdown";

export default function Page() {
  return <div className={styles.mainWrap}>
    <div className={styles.title}>Posts</div>
    <div className={styles.description}>다양한 주제로 글을 씁니다.</div>
    <div className={styles.hr} />
    
    <Postlist articleList={getArticleList()} />
  </div>
}