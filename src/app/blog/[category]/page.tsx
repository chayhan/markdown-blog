import BoardList from "@/components/BoardList";
import { getCategory, categoryData } from "@/modules/ContentParser";

import { Metadata } from "next";
import styles from "./page.module.css";
import SubPage from "@/components/pages/SubPage";

export const metadata: Metadata = {}

export default function Page({params}:{params:{category: string }}) {
  const contentWidth = 800;
  // 쿼리스트링으로 페이지 표시 목차 표현
  const categoryDocumentList = getCategory(params.category);
  const pages:number = categoryDocumentList.length;
  metadata.title = params.category + " 카테고리 최신 글 | johann blue";

  return <SubPage type={"category"} categoryName={params.category}>
    <div className={styles.title}>
      {params.category + " 카테고리 최신 글"}
    </div>
    <BoardList categoryName={params.category} />
  </SubPage>
}

export async function generateStaticParams() {
  return categoryData.map((item) => {
    return {category:item.name}
  })
}