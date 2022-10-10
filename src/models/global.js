import { request } from '@@/plugin-request/request';
export default {
  // namespace:'global',所有models里面的namespace不能重名
  //初始化全局数据
  state:{
    title:'XXXX系统',
    text:'xxxxx欢迎你',
    login:false,
    vip:false,
    vegList:[]
  },
  //处理同步业务
  reducers:{
    setText(state,action){
      //更新并返回
      return{
        ...state,
        text:state.text+action.text
      }
    },
    setTitle(state,action){
      //更新并返回
      return{
        ...state,
        title:'XXXX系统'+1
      }
    },
    signin:(state)=>{
      return{
        ...state,
        login:true
      }
    },
    setList:(state,action)=>{
      return{
        ...state,
        vegList:action.payload
      }
    }
  },
  //处理异步请求
  effects:{
    //接收来自dispatch({type:'global/getList'})
    *getList(action,{call,put,select}){
      const data = yield call(request,'/umi/goods',{method:'get'})
      console.log(data)
      yield put({
        type:'setList',
        payload:data.data
      })

    }
  }
}
