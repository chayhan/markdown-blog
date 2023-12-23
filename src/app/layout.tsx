import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { prefix, isDebug, SITE_TITLE_SUFFIX } from "@/config";
import 'prismjs/themes/prism-tomorrow.css';
import styles from "./layout.module.css";
import Navbar from "@/app/Navbar";
import Footer from "./Footer";
import SideMenu from "@/components/SideMenu";
import Toc from "@/components/Toc";

const font = Noto_Sans_KR({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase:new URL("https://chayhan.github.io/markdown-blog"),
  description: "개발자 chayhan 의 블로그 입니다.",
  openGraph:{
    siteName:"chayhan's blog",
    title:"chay의 깃허브 블로그",
    description:"chayhan.github.io 블로그",
    images:`${prefix}/ogimage.png`,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  metadata.title = "Main" + SITE_TITLE_SUFFIX;
  const navbar = (
    <div className="nav-container">
      <Navbar />
    </div>
  );
  
  const codeThemeCheck = `
    
    const localTheme = localStorage.getItem("theme");

    if(!localTheme) {
      localTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      localStorage.setItem("theme", localTheme);
    }

    if(localTheme == "dark") {
      const html = document.querySelector("html");
      html.dataset.theme = "dark";
    }
  `

  return (
    <html lang="en" suppressHydrationWarning={isDebug}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: codeThemeCheck }}>
          {
            // local storage 에 따른 다크모드 또는 라이트모드 일 경우 html 로딩 전에 배경색을 바꿔준다.
          }
        </script>
      </head>
      <body className={`${font.className} ${styles.layout}`}>
        <div id={styles.layout}>
          <SideMenu />
          <div id={styles.contentWrap}>
            <div id={styles.content}>
              <div id={styles.article}>
                {navbar}
                <div id={styles.contentWrapper}>
                  {children}
                </div>
              </div>
              <Toc />
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
