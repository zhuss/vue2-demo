const video = [{
				date:"2016年12月1日",
				name:"阿三开挂集锦",
				url:"http://baidu.com"
			},{
				date:"2016年12月1日",
				name:"阿三开挂集锦",
				url:"http://baidu.com"
			}]

module.exports = {
	state:{
		all:[]
	},
	mutations:{
		getAll(state){
			state.all = video
		}
	},
	actions:{
		getAll({commit},params){
			console.log(params)
			setTimeout(function(){
				commit('getAll')
			},0)
			return;
			
		}
	},
	getters:{
		getAll(state){
			return state.all;
		}
	}
}