import styles from './index.less';
import { memo } from 'react';
// @ts-ignore
const Child = (count)=>{
  // const {count,setCount} = useContext(AppContext)
  function test() {
    console.log('子组件更新了')
  }
  // @ts-ignore
  return (
    <div className={styles.title}>
     子组件
      <h2>
        子组件count值:{count.count}
      </h2>
      <div>{test()}</div>
    </div>
  )
}
//memo包裹的子组件只有依赖的数据发生改变子组件才会更新
export default memo(Child)
