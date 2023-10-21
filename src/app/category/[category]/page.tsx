import BoardList from "@/components/BoardList";
import { getCategory, categoryData } from "@/modules/MarkdownPost";

import { Metadata } from "next";
import styles from "./page.module.css";
import SubPage from "@/components/pages/SubPage";
import { prefix } from "@/config";

export const metadata: Metadata = {}

export default function Page({params}:{params:{category: string }}) {
  

  const categoryDocumentList = getCategory(params.category);
  const pages:number = categoryDocumentList.length;
  
  metadata.title = params.category + " 카테고리 최신 글 | johann blue";
  metadata.openGraph = {
    title : metadata.title,
    images:`${prefix}/favicon-128.png`,
  };

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