import Vue from 'vue'
import App from './App.vue'

import { ValidationProvider ,ValidationObserver } from 'vee-validate';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes}from './route.js'
Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.use ( VueResource );
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history'
  });
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
