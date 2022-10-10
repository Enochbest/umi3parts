export default {
  'GET /umi/goods':{
    success:true,
    errCode:'000',
    showType:1,
    data:[
      {id:1,name:'韭菜'},
      {id:2,name:'西红柿'},
    ]
  },
  'POST /api/login':(req,res)=>{
    res.end('ok')
  }
}
