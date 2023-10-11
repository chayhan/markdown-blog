import Article from "@/components/layout/Article";
import ArticleHeader from "@/components/layout/ArticleHeader";
import ContentBox from "@/components/layout/ContentBox";
import Title from "@/components/layout/Title";
import Markdown from "react-markdown";
import { MarkdownDocument, getCategory, getDocument } from "@/modules/ContentParser";

import { Metadata } from "next";
import styles from "./page.module.css";
import Menu from "@/components/Menu";
import Image from "next/image";
import path from "node:path";

import sizeOf from "image-size";

export const metadata: Metadata = {};

export default async function Page({ params }: { params: { category: string; articleIdx: number } }) {
  const contentWidth = 800;
  // 쿼리스트링으로 페이지 표시 목차 표현
  const {
    documentMetadata,
    content,
    imageSizes
  } = await fetchDocument({category:params.category, articleIdx:params.articleIdx});

  return (
    <>
      <main className={styles.container}>
        <ArticleHeader height={160}>
          <ContentBox width={contentWidth} className={styles.headerWrap}>
            <div className={styles.subTitle}>{params.category}</div>
          </ContentBox>
        </ArticleHeader>
        <Article>
          <Menu type="sub" selectIndex={1} />
          <ContentBox width={contentWidth}>
            <Title titleName={documentMetadata.title} type="sub" />
            <Markdown
              className={styles.markdown}
              components={{
                img: (props) => {
                  let {src, alt} = props;
                  
                  src = src ?? "";
                  const {width, height} = imageSizes[path.join(src) ?? ""];
                  src = `/${documentMetadata.path.replace(/\\/g, "/").replace('public/', "")}/${src}`;
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
          </ContentBox>
        </Article>
      </main>
    </>
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
