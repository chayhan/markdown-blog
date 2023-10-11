import styles from './page.module.css'
import ArticleHeader from "@/components/layout/ArticleHeader"
import Title from '@/components/layout/Title'
import ContentBox from '@/components/layout/ContentBox'
import Article from '@/components/layout/Article'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <main className={styles.container}>
      <ArticleHeader height={500}>
        <ContentBox width={1280} className={styles.headerWrap}>
          <div className={styles.logoContainer}>
            <div>Johannkim&apos;s blog</div>
            <div>@johannblue, also known as @blu3fishez</div>
          </div>
          <Menu type="main"/>
        </ContentBox>
      </ArticleHeader>
      <Article>
        <ContentBox width={1280}>
          <Title titleName='반갑습니다' type="main"/>
          <div className={styles.description}>
            <p>저는 프론트엔드를 지망하며 취미로 파이썬을 하는 개발자 지망생입니다.</p>
            <p>본 블로그는 Next.js SSG로 생성된 마크 다운 블로그이며,  직접 디자인 했습니다.</p>
            <p>제 일상과 코딩 생활, 알고리즘 문제 풀이들을 올리는 곳이기도 합니다.</p>
            <p>다양한 관심사와 제 프로젝트들도 둘러보세요.</p>
          </div>
        </ContentBox>
      </Article>
      
    </main>
  )
}
