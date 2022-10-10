import { connect } from '@@/plugin-dva/exports';
const Dva = (props:any)=>{
  console.log(props)
  const setText = ()=>{
    props.dispatch({
      type:'global/setText',
      text:'1'
    })
  }
  const setPrice = ()=>{
    props.dispatch({
      type:'dva/setPrice',
    })
  }
  const getVegList = ()=>{
    props.dispatch({
      type:'global/getList',
    })
  }
  return (
    <div>
      <h1>Dva</h1>
      <h3>{props.title}</h3>
      <h3>{props.text}</h3>
      <h3>{props.login}</h3>
      {props.vip ? <div>VIP</div> : <div>不是Vip</div>}
      <h3>修改全局</h3>
      <button onClick={setText}>点击</button>

    {/*  页面级数据*/}
      <hr/>
      <div>
        <span>carname：{props.dva.carname}</span>
        <span>price：{props.dva.price}</span>
      </div>
      <div>
        <span>carname：{props.dva.carname}</span>
        <span>price：{props.dva.price}</span>
      </div>
      <div>
        <span>carname：{props.dva.carname}</span>
        <span>price：{props.dva.price}</span>
      </div>
      <div>
        菜的种类
        {props.vegList.map((item:any,index:any)=>{
          return <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.id}</span>
          </div>
        })}
      </div>
      <button onClick={setPrice}>点击修改价格</button>
      <button onClick={getVegList}>发送异步请求修改数据</button>
    </div>
  )
}
// @ts-ignore
export default connect((state:any)=>({
  //抓取全局，重命名
  title:state.global.title,
  text:state.global.text,
  login:state.global.login,
  vip:state.global.vip,
  vegList:state.global.vegList,
  //抓取页面
  dva:state.dva,
  a:state.a,
  b:state.b,
}))(Dva)
