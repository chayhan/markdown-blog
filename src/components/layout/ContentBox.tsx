import styles from './ContentBox.module.css'

type Prop = {
  children:React.ReactElement | React.ReactElement[],
  className?:string,
  width:number,
}

export default function ContentBox({children, className = '', width}:Prop) {
  const style = {
    width:width + 'px'
  }
  return <div className={styles.main + ' ' + className} style={style}>
    {children}
  </div>
}