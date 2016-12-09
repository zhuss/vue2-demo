<template>
	<div class="user-data">
		<div class="main" ref="main1"></div>
		<div class="main" ref="main2"></div>
		<div class="main" ref="main3"></div>
	</div>
</template>

<script>
var echarts = require('echarts')

export default{
	data(){
		return{
			main1:null,
			main2:null,
			main3:null
		}
	},
	mounted(){

		var self = this;
		// 基于准备好的dom，初始化echarts实例
		this.main1 = echarts.init(this.$refs.main1);
		this.main2 = echarts.init(this.$refs.main2);
		this.main3 = echarts.init(this.$refs.main3);


		var option1 = {
			title: {
		        text: 'Customized Pie',
		        left: 'center',
		        top: 20,
		        textStyle: {
		            color: '#ccc'
		        }
		    },
		    tooltip: {},
		    xAxis: {
		        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		    },
		    yAxis: {},
		    series: [{
		        type: 'bar',
		        data: [5, 20, 60, 10, 10, 20]
		    }]
		}
		// 绘制图表
		this.main1.setOption(option1);



		var option2 = {
			title: {
		        text: 'Customized Pie',
		        left: 'center',
		        top: 20,
		        textStyle: {
		            color: '#ccc'
		        }
		    },
		    tooltip: {},
		    xAxis: {
		        data: ['1月','2月','3月','4月','5月']
		    },
		    yAxis: {},
		    series: [{
		        type: 'line',
		        data: [
		        		{value:100, name:'1月'},
			            {value:233, name:'2月'},
			            {value:700, name:'3月'},
			            {value:1300, name:'4月'},
			            {value:6000, name:'5月'}
			           ]
		    }]
		}

		// 绘制图表
		this.main2.setOption(option2);

		var  option3 = {
				title: {
			        text: 'Customized Pie',
			        left: 'center',
			        top: 20,
			        textStyle: {
			            color: '#ccc'
			        }
			    },
				tooltip: {
					formatter:"{d}%"
				},
				/*legend: {
			        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			    },*/
			    series : [
			        {
			        	/*labelLine:{
			        		normal:{
			        			show:false
			        		}
			        	},*/
			            type:'pie',
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:274, name:'联盟广告'},
			                {value:235, name:'视频广告'},
			                {value:400, name:'搜索引擎'}
			            ]
			        }
			    ]
			};

		// 绘制图表
		this.main3.setOption(option3);

	},
	methods:{

	}
}
</script>

<style lang="less" scoped>
.user-data{
	.main{
		width: 400px;
		height: 300px;
		border: 1px solid #EEE;
		float: left;
		margin-right: 30px;
	}
}
</style>