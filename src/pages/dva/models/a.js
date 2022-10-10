export default {
  namespace:'a',//页面级别下必须给命名空间
  state:{
    carname:'奔驰',
    price:40000
  },
  reducers:{
    setPrice(state){
      return{
        ...state,
        price:state.price+10000
      }
    }
  }
}
