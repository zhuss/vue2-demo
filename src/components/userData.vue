<template>
  <div class="user-data">
    <div class="top-bar">
      <div class="box">
        <h3 class="title">下载总量</h3>
        <p>1000000</p>
      </div>
      <div class="box">
        <h3 class="title">注册总量</h3>
        <p>1000000</p>
      </div>
      <div class="box">
        <h3 class="title">平均日活</h3>
        <p>1000000</p>
      </div>
    </div>
    <div class="main" ref="main1"></div>
    <div class="main" ref="main2"></div>
    <div class="main" ref="main3"></div>
  </div>
</template>
<script>
var echarts = require('echarts')

export default {
  data() {
      return {
        main1: null,
        main2: null,
        main3: null
      }
    },
    mounted() {

      var self = this;
      // 基于准备好的dom，初始化echarts实例

      this.main1 = echarts.init(this.$refs.main1);
      this.main2 = echarts.init(this.$refs.main2);
      this.main3 = echarts.init(this.$refs.main3);


      var option1 = {
          color: ['#20A0FF'],
          title: {
            text: 'Customized Pie',
            left: 'center',
            top: 20,
            textStyle: {
              color: '#324057'
            }
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            axisLine: {
              lineStyle: {
                color: '#20A0FF'
              }
            }
          },
          yAxis: {
            axisLine: {
              lineStyle: {
                color: '#20A0FF'
              }
            }
          },
          series: [{
            type: 'bar',
            data: [5, 20, 60, 10, 10, 20]
          }]
        }
        // 绘制图表
      this.main1.setOption(option1);



      var option2 = {
        color: ['#20A0FF'],
        title: {
          text: 'Customized Pie',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#324057'
          }
        },
        tooltip: {},
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月']
        },
        yAxis: {},
        series: [{
          type: 'line',
          data: [{
            value: 100,
            name: '1月'
          }, {
            value: 233,
            name: '2月'
          }, {
            value: 700,
            name: '3月'
          }, {
            value: 1300,
            name: '4月'
          }, {
            value: 6000,
            name: '5月'
          }]
        }]
      }

      // 绘制图表
      this.main2.setOption(option2);

      var option3 = {
        color: ['#20A0FF', '#1D8CE0', '#58B7FF'],
        title: {
          text: 'Customized Pie',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#324057'
          }
        },
        tooltip: {
          formatter: "{d}%"
        },
        series: [{
          type: 'pie',
          /*label: {
              normal: {
                  show: false
              },
              emphasis: {
                  show: true
              }
          },*/
          radius: ['40%', '70%'],
          data: [{
            value: 335,
            name: '直接访问'
          }, {
            value: 310,
            name: '邮件营销'
          }, {
            value: 274,
            name: '联盟广告'
          }, {
            value: 235,
            name: '视频广告'
          }, {
            value: 400,
            name: '搜索引擎'
          }]
        }]
      };

      // 绘制图表
      this.main3.setOption(option3);

    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.user-data {
  .top-bar {
    width: 100%;
    overflow: hidden;
    .box {
      float: left;
      background: #EFF2F7;
      margin-right: 30px;
      margin-bottom: 20px;
      padding: 0 30px;
      .title {
        height: 40px;
        line-height: 40px;
        margin: 0;
        padding: 0;
        text-align: center;
        color: #1F2D3D;
      }
      p {
        height: 60px;
        line-height: 60px;
        font-size: 50px;
        color: #20A0FF;
        font-family: arial;
      }
    }
  }
  .main {
    width: 400px;
    height: 300px;
    border: 1px solid #EEE;
    float: left;
    margin-right: 30px;
    margin-bottom: 20px;
  }
}
</style>
