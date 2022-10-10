// import { history } from 'umi';
import {useHistory,useParams,useLocation,useRouteMatch} from 'umi'
const GoodsDetail = ()=>{

  const history = useHistory()
  const {id}:any = useParams()
  const {search} = useLocation()
  const Match = useRouteMatch()
  console.log(id)
  console.log(search)
  const getComment =()=>{
    console.log('跳转了')
    // history.push('/goods/3/comment')
    history.push({
      pathname:`/goods/${id}/comment`,
      // @ts-ignore
      query:{ a: 1 }
    })
  }

  //路由上下文获取参数
// const GoodsDetail = ({location:{search},match:{params}}:any)=>{
//   console.log(search,'======location========')
//   console.log(params,'======match========')
//   const history = useHistory()
//   const getComment =()=>{
//     console.log('跳转了')
//     // history.push('/goods/3/comment')
//     history.push({
//       pathname:'/goods/3/comment',
//       // @ts-ignore
//       query:{ a: 1 }
//     })
//   }
  return (
    <div>
      <h1>GoodsDetail</h1>
      <button onClick={getComment}>跳转评论</button>
      <div>接收到的Params:{id}</div>


      <div>接收到的search:{search}</div>
    </div>
  )
}
export default GoodsDetail
