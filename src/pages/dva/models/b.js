export default {
  namespace:'b',//页面级别下必须给命名空间
  state:{
    carname:'大众',
    price:30000
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
