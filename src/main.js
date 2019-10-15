import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import routes from '@/router/router';
import './style/common.styl' 


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Element);

const router = new VueRouter({
  mode:'history',
  // base:'component',
  routes
});

new Vue({
  router,
}).$mount('#app')
