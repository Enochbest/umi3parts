import { defineConfig } from 'umi';
import routes from './routes'
import theme from './theme';
import proxy from './proxy';
export default defineConfig({
  //引入反向代理
  proxy,
  nodeModulesTransform: {//node_modules目录下依赖文件的编译模式
    type: 'none',//all 慢 兼容性好,none快兼容性一般
  },
  //路由配置
  routes:routes,
  //快速属性,可以保持组件状态
  fastRefresh: {},
  devServer:{
    port:8081,//.env里面权限更高一点
    // https:true,//启用https安全访问,
  },
  //网页名称
  title:'MYUMI3',
  //图标
  // favicon:'/images/avator.jpg'
  //启用按需加载
  dynamicImport:{
    //指定按需加载的loading加载
    loading:'@/components/Loading',
  },
  theme:theme,

});
