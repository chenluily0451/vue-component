import Vue from 'vue'
import App from './App.vue'
import Toast from "./toast"

Vue.config.productionTip = false;

Vue.prototype.$toast = Toast;


new Vue({
  render: h => h(App),
}).$mount('#app')
