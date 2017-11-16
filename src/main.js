import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './js/routes.js';
import 'normalize.css';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})