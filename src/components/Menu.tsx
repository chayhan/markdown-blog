import styles from "./Menu.module.css"
import Link from "next/link"
import { categoryData } from "@/modules/MarkdownPost"

export default function Menu({type, selectIndex = 0}:{type:"main" | "sub", selectIndex?:number}) {
  return <>
    <ul className={`${type == "main" ? styles.listMain : styles.listSub} ${styles.list}`}>
      {
        categoryData.map((value, idx) => {
          return <li className="select" key={idx}>
            <Link href={`/blog/${value.name}`}>
              {`${value.name} (${value.length})`}
            </Link>
          </li>
        })
      }
    </ul>
  </>
}