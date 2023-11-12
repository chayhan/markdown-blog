import styles from "./page.module.css";
import "./Markdown.css";

// load local data
import { prefix } from "@/config";
// load dependencies
import { getArticleList, fetchArticle } from "@/ts/Markdown";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import Giscus from "./Giscus";
import Image from "next/image";
import path from "node:path";

interface StaticParams {
  slug: string;
}

interface SlugPageParams {
  params:StaticParams;
}

export default function SlugPage(params:SlugPageParams) {
  const { slug } = params.params;
  const articleData = fetchArticle(slug);
  
  if(articleData == null) {
    return <></>;
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