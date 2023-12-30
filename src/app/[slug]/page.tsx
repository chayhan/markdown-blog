import styles from "./page.module.css";
import "./Markdown.css";

// load local data
import { SITE_TITLE_SUFFIX, prefix } from "@/config";
// load dependencies
import { getArticleList, fetchArticle } from "@/ts/article";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import Giscus from "./Giscus";
import Image from "next/image";
import path from "node:path";
import { Metadata } from "next";

import { Source_Code_Pro } from "next/font/google";

const monofont = Source_Code_Pro({ subsets: ["latin", "latin-ext"] });

interface StaticParams {
  slug: string;
}

interface SlugPageParams {
  params:StaticParams;
}

export const metadata:Metadata = {
};

export default function SlugPage(params:SlugPageParams) {
  const { slug } = params.params;
  const articleData = fetchArticle(slug);

  if(articleData == null) {
    return <></>;
  }

  metadata.title = articleData.article.title + SITE_TITLE_SUFFIX;
  metadata.openGraph = {
    title : articleData.article.title,
    description:articleData.article.description,
    images:`${prefix}/ogimage.png`,
    siteName:"chayhan's blog",
  }

  return <div className={styles.wrap}>
    <div className={styles.title}>{articleData.article.title}</div>
    <div className={styles.date}>
      {articleData.article.dateString}
    </div>
    <div className={styles.line}></div>
    <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypePrism]}
        className={styles.markdown}
        components={{
          img: (props) => {
            let {src, alt} = props;
            
            src = src ?? "";
            const {width, height} = articleData.imageSizes[path.join(src) ?? ""];

            src = `${prefix}/docs/${src}`;

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
          code: (props) => {
            return <code className={`${monofont.className} ${props.className}`}>
              {props.children}
            </code>
          }
        }}
      >
        {articleData.article.content}
      </Markdown>
      <Giscus />
  </div>
}

export async function generateStaticParams() {
  return getArticleList().map(value => {return {slug:value.slug}});
}