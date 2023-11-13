'use client';

import styles from "./Postlist.module.css";
import { useSearchParams } from "next/navigation";
import { Article } from "@/ts/article";

import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface PostlistParam {
  articleList:Article[];
}

export default function Postlist(params:PostlistParam) {
  let pageNumberQuery = Number(useSearchParams().get('page'));
  const {articleList} = params;
  
  if(Number.isNaN(pageNumberQuery) || pageNumberQuery == 0) pageNumberQuery = 1;

  let pageNumbers:JSX.Element[] = [];
  const lastPageIdx = Math.floor(articleList.length / 4) + (articleList.length % 4 ? 1 : 0);

  for(let i=1; i<=lastPageIdx; ++i) {
    if(pageNumberQuery == i || pageNumberQuery == i-1 || pageNumberQuery == i + 1)
      pageNumbers.push(<Link key={i} className={`${styles.pageNumberButton} ${pageNumberQuery == i ? styles.clicked : ""}`} href={`/?page=${i}`}>
        {i}
      </Link>);
  }
  
  const displayArticles = articleList.slice((pageNumberQuery-1)*4, (pageNumberQuery-1)*4 + 4 > articleList.length ? articleList.length : (pageNumberQuery-1)*4 + 4);

  return <div className={styles.wrapper}>
    <div className={styles.posts}>
      {displayArticles.map((value, index) => {
        return <div className={styles.postWrap} key={index}>
        <div className={styles.postTitle}>
          <Link href={`/${value.slug}`}>
            {value.title}
          </Link>
        </div>
        <div className={styles.postDesc}>
          {value.description}
        </div>
        <div className={styles.postDate}>
          {value.dateString}
        </div>
      </div>
      })}
    </div>
    <div className={styles.pageNumber}>
      <div className={styles.toFirst}>
        <Link href={"/?page=1"} >
          <ArrowBackIcon />
        </Link>
      </div>
      {pageNumbers}
      <div className={styles.toLast}>
        <Link href={`/?page=${lastPageIdx}`} >
          <ArrowForwardIcon />
        </Link>
      </div>
    </div>
  </div>
}