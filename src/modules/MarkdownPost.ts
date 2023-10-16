// parse markdown.
import fs from "node:fs";
import path from "node:path";
import sizeOf from "image-size";

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

export class MarkdownDocument {
  title: string = "";
  category:string;
  path: string = "";
  date: Date;
  constructor({ title, category, path, date }: {title:string, category:string, path:string, date:Date}) {
    this.title = title;
    this.category = category;
    this.path = path;
    this.date = date;
  }
  getParsedDate() {
    return `${MONTH_NAME_TABLE[this.date.getMonth()]} ${this.date.getDate()}, ${this.date.getFullYear()}`;
  }
}

export const documentData:MarkdownDocument[] = [];
export const categoryData:{name:string, length:number}[] = [];

fs.readdirSync(DOCUMENT_PATH).forEach((item, categoryIdx) => {
  categoryData.push({
    name:item,
    length:0
  });
  fs.readdirSync(path.join(DOCUMENT_PATH, item)).forEach((filename) => {
    const filestat = fs.statSync(path.join(DOCUMENT_PATH, item, filename));
    const data = new MarkdownDocument({
      title:filename,
      category:item,
      path:path.join(DOCUMENT_PATH, item, filename),
      date:filestat.ctime,
    });
    documentData.push(data);
    categoryData[categoryIdx].length++;
  });
});

documentData.sort((a, b) => {
  return Number(b.date) - Number(a.date);
});

export function getCategory(categoryName:string) {
  return documentData.filter((item:MarkdownDocument) => categoryName == item.category);
}

export function getCategorySlice(category:MarkdownDocument[], startIdx:number, endIdx:number) {
  if(endIdx < category.length) endIdx = category.length;
  return category.slice(startIdx, endIdx);
}


function fetchImageSizes(content: string, doc: MarkdownDocument) {
  /* 이미지의 가로세로 높이를 구하는 과정임. function으로 따로 빼야함. */
  const iterator = content.matchAll(/\!\[.*]\((.*)\)/g);

  let match: IteratorResult<RegExpMatchArray, any>;

  const imageSizes: Record<string, { width: number | undefined; height: number | undefined }> = {};

  while (!(match = iterator.next()).done) {
    const [, src] = match.value;

    try {
      const abs_src = path.join(doc.path, src);

      const { width, height } = sizeOf(abs_src);

      imageSizes[src] = { width, height };
    } catch (err) {
      console.error(err);
    }
  }

  return imageSizes;
}

export function fetchDocument(params: { category: string; articleIdx: number }) {
  const doc = getCategory(params.category)[params.articleIdx];
  const content = fs.readFileSync(path.join(doc.path, "doc.md"), 'utf-8');
  const imageSizes = fetchImageSizes(content, doc);
  
  return {
    doc,
    content,
    imageSizes,
  };
}