import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Noto_Sans_KR } from "next/font/google";
import { prefix, isDebug } from "@/config";
import 'prismjs/themes/prism-tomorrow.css';
import Menu from "@/components/Menu";
import { categoryData } from "@/modules/MarkdownPost";

const font = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase:new URL("https://johannblue.github.io/markdown-blog"),
  title: "Johann blog",
  description: "Generated by create next app",
  openGraph:{
    siteName:"Johann Kim's blog",
    title:"Johann Kim's blog",
    description:"Visit our site for more detail information.",
    images:`${prefix}/favicon-128.png`,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const navbar = (
    <div className="nav-container">
      <Menu categoryData={categoryData} />
    </div>
  );

  const footer = (
    <footer>    
      <p>designed by @johannblue</p>
      <p>powered by github.io</p>
    </footer>
  );

  return (
    <html lang="en" suppressHydrationWarning={isDebug}>
      <body className={font.className}>
        <div id="body-wrapper">
          {navbar}
          {children}
        </div>
        {footer}
      </body>
    </html>
  );
}
