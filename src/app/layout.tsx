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
    const root = document.querySelector(":root");
    const DARK_THEME_VAR = {
      '--main-background-color':'#1C1C1C',
      '--menu-background-color':'#181818',
      '--black': '#d9d9d9',
      '--black-weak': '#c7c7c7',
      '--gray': '#909090',
      '--gray-weak':'#7c7c7c',
      '--whitegray':'#5A5A5A',
      '--whitegray-weak':'rgb(71, 71, 71)',
      '--navbar-background-color':'#161616',
      '--code-background':'#2b2b2b',
    };
    
    const LIGHT_THEME_VAR = {
      '--main-background-color':'#f0f0f0',
      '--menu-background-color':'#ebebeb',
      '--black': '#1d1d1d',
      '--black-weak': '#2b2b2b',
      '--gray': '#737373',
      '--gray-weak':'#919191',
      '--whitegray':'#a5a5a5',
      '--whitegray-weak':'rgb(209, 209, 209)',
      '--navbar-background-color':'#fafafa',
      '--code-background':'#e3eaf2',
    };

    if(localTheme == "dark" || (!localTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      for(let key in DARK_THEME_VAR) {
        root.style.setProperty(key, DARK_THEME_VAR[key]);
      }
    }

    else {
      for(let key in LIGHT_THEME_VAR) {
        root.style.setProperty(key, LIGHT_THEME_VAR[key]);
      }
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
