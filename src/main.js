import Vue from 'vue'
import App from './App.vue'
import './plugin/flexible'
import BUS from './service/bus'


Vue.config.productionTip = false;
BUS(Vue);

new Vue({
  render: h => h(App),
}).$mount('#app');
