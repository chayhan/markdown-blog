---
title: "다크모드 테마 시 깜빡거리는 증상"
date: 2023-12-25
description : "내가 시스템에서 설정한 테마 색이 먼저 적용이 되고, 그 다음에 다크 모드로 설정된 테마가 나중에 적용되는 현상"
---

## 증상 원인

내 마크다운 블로그를 개발하던 중 이게 왠일?

블로그에 테마 토글 기능을 추가해서 다크모드를 사용할 때에도 라이트 모드를, 또는 그 반대를 활용할 수 있도록 만들었는데, 내가 시스템에서 설정한 테마 색이 시스템 설정을 따라 가다보니 시스템 테마가 먼저 적용이 되고, 그 다음에 토글 기능으로 설정된 테마가 나중에 적용된다.

일명 깜빡거리는 증상인데 어떻게 된일인지 생각해봤다.

## HTML Blocking

보통 `DOM` 이 생성될 때,  중간에 script 태그를 만나게 되면 DOM 생성 과정이 중단됩니다.

이걸 이용하면 body 가 처음에 흰색이던 아니던 우리가 보기전에 `head` 태그에서 배경색을 지정해버리면 처음부터 페이지 색상이 그랬던 것처럼 로딩이 잘 될거라 생각했습니다.

---

# 대망의 첫 시도. 그리고 실패

실패했습니다. 하하. 하지만 생각보다 실패의 원인은 넥스트에 깊은 곳에 자리 잡고 있는 것으로 보입니다. 실패한 원인에 대해 얘기해보고자 합니다.

## 내 index 페이지에서의 로딩 방식이 사뭇 다르다?

제 블로그는 Next.js Static Site Generation을 이용합니다. 정적 페이지를 생성을 해주어 정적 페이지로도 라우팅이 가능하게끔 구성되어 있는데요. 이 방식에 따르면 제 페이지는 반드시 정적 페이지가 생성되어야 하고, 클라이언트 사이드 코드는 극소수만 존재해야했다.

### 그런데 `__next_error__` 값의 `id` 속성이 html에 붙어있었다.

이게 뭐지? 싶었는데 알고보니 클라이언트 단에서 에러가 난 것이였다. 이걸 어떻게 알았냐고?

`Postlist` 컴포넌트를 주석처리하니 놀랍게도 해당 속성이 없이 제대로 인덱스 페이지가 렌더링 되었다. 어떻게 된 일인지 생각을 해봤는데 놀랍게도 `useSearchParam` 이 원인이였다.

## 진짜는 `useSearchParam` 에 있었다..

어떻게 알아냈냐면 결국 넥스트가 SSG를 할 때 나는 오류구문을 어떻게든 찾아내게 계속 빌드를 해서 알아냈는데, 

[Entire page deopted into client-side rendering](https://nextjs.org/docs/messages/deopted-into-client-rendering)

위와 같은 사이트로 이동 되었는데 역시나,, 다른 것들도 아니고 useSearchParam 때문이였다.

이게 뭐냐면 클라이언트의 페이지에 링크에 저장된 파라미터값을 가져오는 훅이다. 이걸 사용할 때 `Suspense` 로 범위를 묶어주어야 전체 CSR이 안된다고 한다.

그래서 깜빡이는 현상이 생긴 것이다. 이것 때문에 CSR 렌더링이 전체 범위로 바뀌기 때문에 어떻게 똥꼬쇼를 해도 내가 만든 코드는 전부 페이지 로드가 끝이 나고 실행이 됐던 것이였다.

## Suspense 가 뭔지?

suspense는 CSR이 어디서부터 어디까지 되게 할 건지 범위를 지정해주는 것이다.

지금 내가 만들고 있는건 정적페이지인데, 어디서부터 `CSR`을 해야하는지 지정을 명확하게 해준다.

단순히 `use client;` 를 선언한다고 이게 딱딱 맞추어 지는 건 아닌게, 아래가 `page.tsx` 인데 잘보면 `Postlist` 컴포넌트는 그냥 다른 `div` 컴포넌트와 형제 관계이므로 이 형제 관계인 요소들도 전부 CSR이 되고, 이런식으로 CSR이 타고올라가다보면 전체 범위가 CSR이 되는 것이다…!

따라서 비동기로 생성되는 부분만 따로 선렌더링을 할 JSX 컴포넌트를 주고 후에 CSR로 렌더링되게 만들 게 해주는 것이 Suspense 인 것이다.

```jsx
import Postlist from "./Postlist";
import styles from "./page.module.css";
import { Article, getArticleList } from "@/ts/article";

export default function Page() {
  const articles = getArticleList();
  return <div className={styles.mainWrap}>
    <div className={styles.title}>Posts</div>
    <div className={styles.description}>다양한 주제로 글을 씁니다.</div>
    <div className={styles.hr} />
    
    <Postlist articleList={articles} />
  </div>
}
```

위 코드를 아래와 같이 바꿔주었다.

```jsx
import Postlist from "./Postlist";
import { Suspense } from "react";
import styles from "./page.module.css";
import { getArticleList } from "@/ts/article";

function PostlistFallback() {
  return <>
    loading...
  </>
}

export default function Page() {
  return <div className={styles.mainWrap}>
    <div className={styles.title}>Posts</div>
    <div className={styles.description}>다양한 주제로 글을 씁니다.</div>
    <div className={styles.hr} />
    
    <Suspense fallback={<PostlistFallback />}>
      <Postlist articleList={getArticleList()} />
    </Suspense>
  </div>
}
```

이렇게 바꾸고나니 놀랍게도 에러가 뜨지 않고 정상적으로 정적페이지가 렌더링 되었다! 더욱 내 블로그가 최적화 되었다고 생각하니 기쁘지 않을수가 없다.

아래는 `Suspense` 기능에 관한 더 자세한 AI 검색 결과이다.

안녕하세요, 이것은 Bing입니다. 😊

React.js에서 Suspense는 비동기 작업을 관리하는 기능입니다. Suspense를 사용하면 컴포넌트가 데이터를 기다리고 있는 것을 React에게 알릴 수 있고, 대신에 fallback 컴포넌트를 보여줄 수 있습니다. 예를 들어, 다음과 같이 코드를 작성하면 UserList 컴포넌트가 로딩될 때까지 Spinner 컴포넌트를 보여줍니다.

```jsx
<Suspense fallback={<Spinner />}>
  <UserList />
</Suspense>

```

Suspense는 React v16.6부터 실험적으로 도입되었고, React v18에서 정식으로 지원됩니다. Suspense를 사용하면 컴포넌트의 렌더링을 더 쉽고 세련되게 제어할 수 있습니다. Suspense에 대한 자세한 내용은 [공식 문서](https://react.dev/reference/react/Suspense)나 [이 블로그 포스트](https://www.daleseo.com/react-suspense/)를 참고하세요.