// parse markdown.
import fs from "node:fs";
import path from "node:path";
import sizeOf from "image-size";
import matter from "gray-matter";

const DOCUMENT_PATH = path.join("public", "docs");

const MONTH_NAME_TABLE = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

interface ArticleMetadata {
  title:string; // 글의 제목.
  date:Date; // 날짜까지만 표현된다는 점에 주의하자.
  dateString:string;
  description:string; // 대략적인 설명, 메인 사이트 부연설명에 나옴.
}

export interface Article extends ArticleMetadata{
  content:string;
  slug:string;
}

const articleData:Article[] = [];

// 데이터를 가져오는 과정은 처음 1번이면 됨.
fs.readdirSync(DOCUMENT_PATH).reverse().forEach((item) => {
  if(item.slice(-3) != ".md") return;
  const file = matter(fs.readFileSync(path.join(DOCUMENT_PATH, item)));
  const metadata = file.data as ArticleMetadata;
  metadata.dateString = `${MONTH_NAME_TABLE[metadata.date.getMonth()]} ${metadata.date.getDate()}, ${metadata.date.getFullYear()}`;

  const data:Article = {
    slug:item.slice(0, -3),
    content:file.content,
    ...metadata
  };

  articleData.push(data);
});

export function getArticleList() {
  // 빈 데이터를 받지 않기 위한 방지조치.
  return articleData;
}

export function searchArticle(word:string) {
  // 단어를 토큰화 시켜서 해당 단어들이 모두 포함되는 article들을 filter 해서 보내준다.
  // 아직 미구현
}

function fetchImageSizes(content: string) {
  /* 이미지의 가로세로 높이를 구하는 과정임. function으로 따로 빼야함. */

  // [] 안에 둘러 쌓여있고, 확장자로 연결되는 무언가를 받는거임. 즉, 마크다운 링크형태로 명시된 로컬 파일을 받아옴.
  // [] 안의 내용은 alt 이고, 뒤가 파일의 이름이니까 뒤에꺼를 받아야함.
  const iterator = content.matchAll(/\!\[.*]\((.*)\)/g);
  
  // 이터레이터 결과를 하나하나씩 받기 위한 데이터임
  let match: IteratorResult<RegExpMatchArray, any>;

  // record 는 그냥 자료구조(객체)임. string을 키로 갖는 객체를 별도로 타입스크립트에서 지원함.
  const imageSizes: Record<string, { width: number | undefined; height: number | undefined }> = {};

  while (!(match = iterator.next()).done) {
    const [, src] = match.value; // 위에서 명시한 대로 뒤에껄 받아오고 있음.

    try {
      const fileSrc = path.join(DOCUMENT_PATH, src); // 이미지 파일을 열음

      const { width, height } = sizeOf(fileSrc); // 이미지 파일의 사이즈 정보를 추출함.

      imageSizes[src] = { width, height }; // 해당 정보들을 레코드에 저장.
    } catch (err) {
      console.error(err);
    }
  }

  return imageSizes;
}

export function fetchArticle(slug : string) {
  const article: Article | undefined = articleData.find((value) => slug == value.slug);

  if(!article) {
    console.log("unable to find article");
    return;
  }

  const content = fs.readFileSync(path.join(DOCUMENT_PATH, slug + ".md"), 'utf-8');
  const imageSizes = fetchImageSizes(content); // 해당 파일과 연결된 모든 이미지 정보를 가져온다.

  return {
    article,
    imageSizes
  };
}