import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import routes from './router/router';
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
  render: h => h(App),
}).$mount('#app')
