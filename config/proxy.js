export default {
'/api':{
  //代理的真实服务器
  target:'https://localhost/:9001',
  //配置可以从http代理到https
  https:true,
  changeOrigin:true,
  pathRewrite:{'^/api' :''}
}
}
