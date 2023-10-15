import styles from "./Article.module.css";

export default function Article({ children }: { children: React.ReactNode }) {
  return <div className={styles.main}>{children}</div>;
}