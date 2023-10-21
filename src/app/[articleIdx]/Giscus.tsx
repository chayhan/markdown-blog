"use client";
import Giscus from "@giscus/react";

export default function GiscusComponent() {
  return <Giscus
    repo={"johannblue/markdown-blog"}
    repoId={"R_kgDOKUiJsQ"}

    category="General"
    category-id="DIC_kwDOKUiJsc4CaU3v"
    strict="0"
    
    mapping={"pathname"}
    loading="lazy"
    lang="ko"
    theme="preferred_color_scheme"
    reactionsEnabled="1"
    
  />;
}
