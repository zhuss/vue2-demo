<template>
	<div class="user-data">
		<div><button @click="btnClick">刷新</button></div>
		<div id="main"></div>
	</div>
</template>

<script>
var echarts = require('echarts')

export default{
	data(){
		return{
			msg:"hahh",
			main:null
		}
	},
	mounted(){
		this.msg = "jaii"

		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('main'));
		this.main = myChart;
		// 绘制图表
		myChart.setOption({
		    title: { text: 'ECharts 入门示例' },
		    tooltip: {},
		    xAxis: {
		        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		    },
		    yAxis: {},
		    series: [{
		        name: '销量',
		        type: 'bar',
		        data: [5, 20, 60, 10, 10, 20]
		    }]
		});
	},
	methods:{
		btnClick(){
			this.main.setOption({
			    title: { text: 'ECharts 入门示例' },
			    tooltip: {},
			    xAxis: {
			        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			    },
			    yAxis: {},
			    series: [{
			        name: '销量',
			        type: 'bar',
			        data: [5, 20, 70, 10, 10, 20]
			    }]
			});
		}
	}
}
</script>

<style lang="less" scoped>
.user-data{
	#main{
		width: 400px;
		height: 300px;
		border: 1px solid #EEE;
	}
}
</style>