import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

require('@/assets/css/app.scss')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
