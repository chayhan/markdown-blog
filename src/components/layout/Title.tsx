import styles from "./Title.module.css";

type TitleProp = {
  titleName:string
  type:null | "main" | "sub"
}

export default function Title({titleName, type}:TitleProp) {
  if(type == null) type = "main";
  const fontStyle = {
    "main":{
      fontSize: "36px",
    },
    "sub":{
      fontSize: "24px",
      fontWeight:700,
    }
  };
  
  return <div className={styles.main} style={fontStyle[type]}>
    {titleName}
  </div>
}