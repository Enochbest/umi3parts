export default {
  namespace:'dva',//页面级别下必须给命名空间
  state:{
    carname:'bwm',
    price:20000,
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
