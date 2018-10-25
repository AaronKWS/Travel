import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'       //防止点击延迟
import './registerServiceWorker'
import './assets/styles/reset.css'      //页面样式初始化
import './assets/styles/border.css'     //防止移动端像素异常

Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
