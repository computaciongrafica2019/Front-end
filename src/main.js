import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vb from 'vue-babylonjs';

Vue.config.productionTip = false
Vue.use(vb);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
