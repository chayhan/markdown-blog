import Link from "next/link";
import styles from "./SideMenu.module.css";

export default function SideMenu() {
  return <div className={styles.wrap}>
    <Link className={styles.logoLink} href="/">
      {/* <Image src={`${prefix}/favicon-128.png`} alt="favicon" width={32} height={32} style={{ borderRadius: 6 }}></Image> */}
      <span className={styles.logoCharacter}>johann blue</span>
    </Link>
    <img className={styles.pfp} src="https://avatars.githubusercontent.com/u/65532873?v=4" alt="profile-picture-error" />
    <div className={styles.title}>Johannkim’s blog</div>
    <div className={styles.desc}>이 녀석에게 친추 줘서 무료로 훈수 주기</div>
    <div className={styles.links}>
      <div>Github</div>
      <div>Discord</div>
      <div>Solved.ac</div>
    </div>
  </div>
}