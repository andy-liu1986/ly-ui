import Vue from 'vue'
import App from './App.vue'
import router from './router'
import demoBlock from './components/demo-block.vue'
import plugins from '../ui-components'
Vue.component('demo-block', demoBlock)
Vue.config.productionTip = false
Vue.use(plugins)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
