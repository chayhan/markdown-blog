import Link from "next/link";
import styles from "./SideMenu.module.css";
import Image from "next/image";

export default function SideMenu() {
  return <div className={styles.wrap}>
    <Link className={styles.logoLink} href="/">
      {/* <Image src={`${prefix}/favicon-128.png`} alt="favicon" width={32} height={32} style={{ borderRadius: 6 }}></Image> */}
      <span className={styles.logoCharacter}>Chayhan.</span>
    </Link>
    <Image className={styles.pfp} width={130} height={130} src="https://avatars.githubusercontent.com/u/65532873?v=4" alt="profile-picture-error" />
    <div className={styles.title}>Chayhan’s blog</div>
    <div className={styles.desc}>이 녀석에게 친추 줘서 무료로 훈수 주기</div>
    <div className={styles.links}>
      <div>
        <Link href="https://github.com/chayhan">
          Github
        </Link>
      </div>
      <div>
        <Link href="https://discord.gg/w8xnMDgcxA">
          Discord
        </Link>
      </div>
      <div>
        <Link href="https://solved.ac/profile/blu3fishez">
          Solved.ac
        </Link>
      </div>
    </div>
  </div>
}