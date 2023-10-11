import Article from "@/components/layout/Article";
import ArticleHeader from "@/components/layout/ArticleHeader";
import ContentBox from "@/components/layout/ContentBox";
import Title from "@/components/layout/Title";
import BoardList from "@/components/BoardList";
import { getCategory } from "@/modules/ContentParser";

import { Metadata } from "next";
import styles from "./page.module.css";
import Menu from "@/components/Menu";

export const metadata: Metadata = {}

export default function Page({params}:{params:{category: string }}) {
  const contentWidth = 800;
  // 쿼리스트링으로 페이지 표시 목차 표현
  const categoryDocumentList = getCategory(params.category);
  const pages:number = categoryDocumentList.length;
  metadata.title = params.category + " 카테고리 최신 글 | johann blue";
  
  return <>
    <main className={styles.container}>
      <ArticleHeader height={160}>
        <ContentBox width={contentWidth} className={styles.headerWrap}>
          <div className={styles.subTitle}>
            {params.category}
          </div>
        </ContentBox>
      </ArticleHeader>
      <Article>
        <Menu type="sub" selectIndex={1}/>
        <ContentBox width={contentWidth}>
          <Title titleName={params.category + " 카테고리 최신 글"} type="sub"/>
          <BoardList categoryName={params.category} categoryItems={categoryDocumentList} />
        </ContentBox>
      </Article>
    </main>
  </>
}