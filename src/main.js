import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router/router';
import App from './App'
import store from '@/store'
import { message } from '@/util/message'

Vue.config.productionTip = false;
Vue.prototype.$msg = message;

Vue.use(Element);

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})