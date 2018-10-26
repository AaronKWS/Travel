import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'       //防止点击延迟
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './registerServiceWorker'
import 'styles/reset.css'      //页面样式初始化
import 'styles/border.css'     //防止移动端像素异常
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
