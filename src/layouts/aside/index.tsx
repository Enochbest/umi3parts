import Menu from '@/components/Menu';
import styles from './index.less'
const AsideLyouts = (props:any)=>{
  return (
    <div className={styles.container}>
        <div className={styles.aside}>
          <Menu></Menu>
        </div>
        <div className={styles.content}>
          {props.children}
        </div>
    </div>
  )
}
export default AsideLyouts
