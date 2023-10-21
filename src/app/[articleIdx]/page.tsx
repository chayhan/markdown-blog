import { documentData, fetchDocument } from "@/modules/MarkdownPost";
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
import Giscus from "./Giscus";

export const metadata: Metadata = {};

export default function Page({ params }: { params: { articleIdx: number } }) {
  const { doc, content, category, imageSizes } = fetchDocument(params.articleIdx);
  /* metadata 설정 */
  metadata.title = doc.title + " | johann blue";
  metadata.openGraph = {
    title : metadata.title,
    description : content.replace(/#|[\r\n]|`/g, "").slice(0, 70),
    images:`${prefix}/favicon-128.png`,
  };
  return (
    <SubPage type={"document"} categoryName={category} date={doc.date}>
      
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
      <Giscus />
    </SubPage>
  );
}

export async function generateStaticParams() {
  const paramData: { articleIdx: string }[] = [];

  documentData.forEach((item) => {
    paramData.push({
      articleIdx: item.no.toString(),
    });
  });

  return paramData;
}
