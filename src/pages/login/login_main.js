import Vue from 'vue'
import App from './Login'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  components: { App }
})
