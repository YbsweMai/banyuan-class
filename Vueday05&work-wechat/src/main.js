import Vue from "vue";
import App from "./App.vue";
import Moment from "moment"
Moment.locale('zh-cn');



Vue.config.productionTip = false;


Vue.filter('globalFormatTime',(value)=>{  // 全局时间格式

  let time = Moment(value).format('YYYY-MM-DD, h:mm:ss a')
  return time
})

new Vue({
  render: h => h(App)
}).$mount("#app");
