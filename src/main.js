import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import './assets/css/bootstrap.css'
import axios from 'axios'


Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.prototype.$backend = 'https://us-central1-portfolio-yanzhang.cloudfunctions.net/myWebsiteBackend/api/portfolio'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
