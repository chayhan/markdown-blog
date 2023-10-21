"use client";
import Giscus from "@giscus/react";

export default function GiscusComponent() {
  return <Giscus
    repo="johannblue/markdown-blog"
    repoId="R_kgDOKUiJsQ"
    category="comments"
    categoryId="DIC_kwDOKUiJsc4CaU5s"

    strict="0"
    reactionsEnabled="1"

    emitMetadata="0"

    mapping="pathname"
    loading="lazy"
    lang="ko"

    theme="preferred_color_scheme"
    
    
  />;
}
