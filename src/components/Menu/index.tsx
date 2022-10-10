import { NavLink } from 'umi'

const Menu = ()=>{
  return (
    <div>
      <h1>Menu</h1>
      <NavLink to={{pathname:"/goods/1",search:'?a=1'}} activeStyle={{color:'red'}}>商品分类1</NavLink>
      <NavLink to={{pathname:"/goods/2",query:{a:2}}} activeStyle={{color:'red'}}>商品分类2</NavLink>
      <NavLink to="/goods/3" activeStyle={{color:'red'}}>商品分类3</NavLink>
      <NavLink to="/goods/4" activeStyle={{color:'red'}}>商品分类4</NavLink>
      <NavLink to="/goods/5" activeStyle={{color:'red'}}>商品分类5</NavLink>
    </div>
  )
}
export default Menu
