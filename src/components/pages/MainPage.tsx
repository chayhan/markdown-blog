
import styles from "./MainPage.module.css";

type MainPageProps = {
  params: {

  },
  children: React.ReactNode;
}

export default function MainPage() {
  return <main>
    <div className={styles.headerWrapper}>
      <div className={`${styles.contentWrapper}`}>
        <div className={styles.logoContainer}>
          <div>Johannkim&apos;s blog</div>
          <div>@johannblue, also known as @blu3fishez</div>
        </div>
        
      </div>
    </div>
    <div className={styles.main}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>
          반갑습니다.
        </div>
        <div className={styles.description}>
          <p>저는 파이썬을 취미로 하는 프론트엔드 개발 지망생입니다.</p>
          <p>본 블로그는 Next.js SSG로 생성된 마크 다운 블로그이며,  직접 디자인 했습니다.</p>
          <p>제 일상과 코딩 생활, 알고리즘 문제 풀이들을 올리는 곳이기도 합니다.</p>
          <p>다양한 관심사와 제 프로젝트 기록들도 둘러보세요.</p>
        </div>
      </div>
    </div>
  </main>
}