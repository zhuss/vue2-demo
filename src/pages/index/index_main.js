import Vue from 'vue'
import App from './Index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'
import VueX from 'vuex'
import store from '../../store'

Vue.use(ElementUI)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  components: { App }
})
