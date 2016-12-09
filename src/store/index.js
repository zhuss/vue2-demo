import Vue from 'vue'
import VueX from "vuex"
import video from './modules/video/index'

Vue.use(VueX)

module.exports =  new VueX.Store({
	modules:{
		video
	}
}) 