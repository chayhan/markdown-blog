import { categoryData, fetchDocument } from "@/modules/MarkdownPost";
import SubPage from "@/components/pages/SubPage";
import { Metadata } from "next";

import Image from "next/image";
import { prefix } from "@/config";
import path from "node:path";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

import styles from "./page.module.css";
import "./Markdown.css"

export const metadata: Metadata = {};

export default function Page({ params }: { params: { category: string; articleIdx: number } }) {
  const { doc, content, imageSizes } = fetchDocument({ category: params.category, articleIdx: params.articleIdx });
  /* metadata 설정 */
  metadata.title = doc.title + " | johann blue";
  if (metadata.openGraph) metadata.openGraph.title = metadata.title;

  return (
    <SubPage type={"document"} categoryName={params.category} date={doc.date}>
      <div className={styles.title}>{doc.title}</div>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypePrism]}
        className={styles.markdown}
        components={{
          img: (props) => {
            let {src, alt} = props;
            
            src = src ?? "";
            const {width, height} = imageSizes[path.join(src) ?? ""];
            src = `${prefix}/${doc.path.replace(/\\/g, "/").replace('public/', "")}/${src}`;
            console.log("FINAL SRC :: ", src);
            return (
              <Image
                className={styles.image}
                src={src ?? ""}
                alt={alt ?? ""}
                width={width}
                height={height}
              />
            );
          }
        }}
      >
        {content}
      </Markdown>
    </SubPage>
  );
}

export async function generateStaticParams() {
  const paramData: { category: string; articleIdx: string }[] = [];

  categoryData.forEach((item) => {
    for (let i = 0; i < item.length; ++i) {
      paramData.push({
        category: item.name,
        articleIdx: i.toString(),
      });
    }
  });

  return paramData;
}
