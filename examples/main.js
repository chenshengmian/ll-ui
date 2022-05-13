import Vue from 'vue'
import App from './App.vue'
import LlUI from '../packages'

Vue.config.productionTip = false

Vue.use(LlUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
