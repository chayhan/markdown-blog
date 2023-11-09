import { prefix } from "@/config";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.footerWrap}>
      <p className={styles.supportLog}>
        Support me by following on 
        <a href="https://github.com/johannblue">
          <Image className={styles.githubLogo} src={`${prefix}/github-icon.png`} alt="favicon" width={23} height={23} />
          <span style={{textDecorationLine: "underline"}}>github</span>
        </a>
      </p>
      <p className={styles.copyright}>© 2023 johannblue, Powered by github.io</p>
    </div>
  </footer>
}
