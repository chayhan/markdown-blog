
import Markdown from "react-markdown";
import { MarkdownDocument, categoryData, getCategory, getDocument } from "@/modules/ContentParser";

import { Metadata } from "next";
import styles from "./page.module.css";
import Image from "next/image";
import path from "node:path";

import sizeOf from "image-size";

import { prefix } from "@/config";
import SubPage from "@/components/pages/SubPage";

export const metadata: Metadata = {};

export default async function Page({ params }: { params: { category: string; articleIdx: number } }) {
  const {
    documentMetadata,
    content,
    imageSizes
  } = await fetchDocument({category:params.category, articleIdx:params.articleIdx});

  return (
    <SubPage type={"document"} categoryName={params.category} date={documentMetadata.date}>
      <div className={styles.title}>
        {documentMetadata.title}
      </div>
      <Markdown
        className={styles.markdown}
        components={{
          img: (props) => {
            let {src, alt} = props;
            
            src = src ?? "";
            const {width, height} = imageSizes[path.join(src) ?? ""];
            src = `${prefix}/${documentMetadata.path.replace(/\\/g, "/").replace('public/', "")}/${src}`;
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
          },
        }}
      >
        {content}
      </Markdown>
    </SubPage>
  );
}

async function fetchDocument(params: { category: string; articleIdx: number }) {
  const categoryDocumentList = getCategory(params.category);
  const documentMetadata: MarkdownDocument = categoryDocumentList[params.articleIdx];
  metadata.title = documentMetadata.title + " | johann blue";
  const content = await getDocument(documentMetadata);
  const iterator = content.matchAll(/\!\[.*]\((.*)\)/g);
  let match: IteratorResult<RegExpMatchArray, any>;

  const imageSizes: Record<string, { width: number | undefined; height: number | undefined }> = {};

  while (!(match = iterator.next()).done) {
    const [, src] = match.value;
    console.log(src);
    try {
      const abs_src = path.join(documentMetadata.path, src);
      console.log("ABS_SRC :: ", abs_src);
      const { width, height } = await sizeOf(abs_src);
      console.log("WIDTH :: ", width);
      imageSizes[src] = { width, height };
    } catch (err) {
      console.error(err);
    }
  }

  return {
    categoryDocumentList,
    documentMetadata,
    content,
    imageSizes
  }
}

export async function generateStaticParams() {
  const paramData:{category:string, articleIdx:string}[] = [];
  categoryData.forEach((item) => {
    for(let i=0; i<item.length; ++i) {
      paramData.push({
        category:item.name,
        articleIdx:i.toString()
      })
    }
  })
  return paramData;
}