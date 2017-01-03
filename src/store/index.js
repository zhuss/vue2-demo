import Vue from 'vue'
import VueX from "vuex"
Vue.use(VueX)

module.exports = new VueX.Store({
  state: {
    videos: []
  },
  mutations: {
    getAllVideo(state) {
      state.videos = [{
        date: "2016年12月1日",
        name: "阿三开挂集锦",
        url: "http://baidu.com"
      }, {
        date: "2016年12月1日",
        name: "阿三开挂集锦",
        url: "http://baidu.com"
      }]
    }
  },
  actions: {
    getAllVideo({ commit }, params) {
      console.log(params);
      commit('getAllVideo');
    }
  },
  getters: {
    getAllVideo(state) {
      return state.videos;
    }
  }
})
