import { NavLink } from 'umi'
const Nav = ()=>{
  return (
    <div>
      <h1>Nav</h1>
      <NavLink to="/goods" activeStyle={{color:'red'}}>调转到商品</NavLink>
      <NavLink to="/login" activeStyle={{color:'red'}}>调转到登录</NavLink>
      <NavLink to="/reg" activeStyle={{color:'red'}}>调转到注册</NavLink>
    </div>
  )
}
export default Nav
