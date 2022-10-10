import styles from './index.less';
import { Button } from 'antd'
import { Button as V5Button} from 'antd-mobile'
import { Button as V2Button} from 'antd-mobile-v2'
import avatar from '../assets/images/avator.jpg'
import Child from '@/pages/Child';
import AppContext from '@/pages/context';
import { useMemo, useState } from 'react';
export default function IndexPage() {
  const [count,setCount] = useState(0)
  const [value,setvalue] = useState('')

 const resNum = useMemo(()=>{
    console.log('执行了getNum')
    return count*100
  },[count])


  // @ts-ignore
  // @ts-ignore
  return (
    <div>
        <h1 className={styles.title}>Page index</h1>
        <h1>{count}</h1>
        <Button type='primary' onClick={()=>{setCount(count+1)}}>主要按钮</Button>
        <V5Button color='primary'>V5</V5Button>
        <V2Button type='primary'>V2主要按钮</V2Button>
        {/*<img src={avatar} alt='' />*/}
        {/*<img src={require('../assets/images/avator.jpg')} alt='' />*/}
        <h1>全局样式测试</h1>
        <h2 className='myLink'>全局变量</h2>
        <h2 className='test'>全局样式测试</h2>
        <h1>局部样式测试</h1>
        <h2 className={styles.header}>测试</h2>
        <hr/>
        <div className={styles.title}>
          <h1>我是父组件</h1>
          <Child></Child>
        </div>
        <hr/>
        <h1>MeMohooks</h1>
        <h2>计算后的Count的值:{resNum}</h2>
        <button onClick={()=>{setCount(count+1)}}>count+1</button>
        <input value={value} onChange={(ev) =>{setvalue(ev.target.value)}} />
        <hr/>
        {/*传递一个值*/}
        <Child count={count}></Child>
        <hr/>
        <Child count={count}></Child>

    </div>
  );
}
