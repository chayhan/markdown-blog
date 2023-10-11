
## 이미지 가져오기

이미지를 가져오는 건 리액트처럼 그냥 해당  프로젝트 내에서도 가져올 수 있는데

문제는 asset들은 모두 `public` 폴더 를 root로 하기 때문에 해당 폴더 내에만 배치를 해야한다.

본 문서들도 모두 public 에 배치된 이유가 그렇기 때문.

## 동적 라우팅

동적 라우팅은 app router 에서는 이전 레거시 버전처럼

폴더 이름의 양 끝을 대괄호로 감싼 다음, 그 안의 `page.ts` 에서 `params` 라는 속성을 받게 만든다면,

알아서 서버 컴포넌트에서 params 에 폴더 이름에 대응하는 값을 params 에 해당 폴더 이름으로 속성으로 넣어준다.

## 페이지의 타이틀 변경

타이틀 부분은 중요하다.

같은 솔루션 페이지를 여러군데를 띄워놓앗을 때 어떤 탭의 페이지가 어떤 내용을 함축하고있는지 나타내주어야하는데

가장 간단한 방법이 타이틀을 바꾸는 방법이다. 

- 해결방법 : `<Head>` 기능을 사용하면 된다.

일단 아래처럼 가져온다.

```js
import Head from 'next/head'
```

그런데 알고보니 이게 app router 에서는 이렇게 사용하지 않는다고 한다.

![Alt text](image.png)

해결방법은 아래와 같이 Metadata 값을 재정의 해주는 것만으로 새롭게 바뀌는 가보다.

작동방식이 상당히 특이하다. 아마 해당 Functional Component의 default export 값만 보는게 아닌 것 같다.

![Alt text](image-1.png)

## Typescript on React : 자식 설정

`This JSX tag's 'children' prop expects a single child of type 'ReactElement<any, string | JSXElementConstructor<any>>', but multiple children were provided.`

위와 관련된 에러 해결이다. 아래와 같이 설정하자.

```js
children: JSX.Element|JSX.Element[];
```