import Vue from "vue";
import App from "./App.vue";
import Config from "./utils/config"
import Moment from "moment"
import Header from "./components/header"

Vue.config.productionTip = false;

Vue.directive('oss-src',function(el,binding){

  console.log('el',el)
  let imgURL = binding.value //获取图片地址
  
  if(imgURL) el.setAttribute('src',Config.ossPath + imgURL)
})

Vue.directive('oss-src1',function(el,binding){ // 全局图片路径

  console.log('el',el)
  let imgURL = binding.value //获取图片地址
  
  if(imgURL) el.setAttribute('src',Config.ossPath1 + imgURL)
})

Vue.filter('globalFormatTime',(value)=>{  // 全局时间格式

  let time = Moment(value).format('YYYY-MM-DD, h:mm:ss a')
  return time
})

Vue.component('global-header',Header)  // 定义全局组件页面 需引入页面 并且主页面不引进组件页面

new Vue({
  render: h => h(App)
}).$mount("#app");
