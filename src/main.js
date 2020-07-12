import Vue from 'vue'
import router from './router.js'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  el : "#app",
  router,
  render: h => h(App),
}).$mount('#app')
