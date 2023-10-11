import styles from "./Article.module.css";

type ArticleProp = {
  children:React.ReactElement | React.ReactElement[],
}

export default function Article({children}:ArticleProp) {
  return <div className={styles.main}>
    {children}
  </div>
}