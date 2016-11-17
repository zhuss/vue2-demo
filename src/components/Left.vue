<template>
  <div class="layout">
      <!-- <el-button type="primary" v-for="item in nav.links" @click="goPageIndex(item.id)">主要按钮</el-button> -->
      <ul class="nav">
        <li v-for="item in nav.links"><a href="">{{item.name}}</a></li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'layout-left',
  data () {
    return {
       nav:{
          links:[
            {name:"用户数据",id:1},
            {name:"视频数据",id:2},
            {name:"商品数据",id:3},
            {name:"用户数据",id:1},
            {name:"视频数据",id:2},
            {name:"商品数据",id:3},
            {name:"用户数据",id:1},
            {name:"视频数据",id:2},
            {name:"商品数据",id:3},
            {name:"用户数据",id:1},
            {name:"视频数据",id:2},
            {name:"商品数据",id:3},
            {name:"用户数据",id:1},
            {name:"视频数据",id:2},
            {name:"商品数据",id:3},
            {name:"用户数据",id:1},
            {name:"视频数据",id:2},
            {name:"商品数据",id:3},
            {name:"用户数据",id:1},
            {name:"视频数据",id:2},
            {name:"商品数据",id:3},
            {name:"用户数据",id:1},
            {name:"视频数据",id:2},
            {name:"商品数据",id:3},
            {name:"用户数据",id:1},
            {name:"视频数据",id:2},
            {name:"商品数据",id:3},
            {name:"用户数据",id:1},
            {name:"视频数据",id:2},
            {name:"商品数据",id:3}
          ]
       }
    }
  },
  methods:{
    goPageIndex(id){
      location.href="index.html?id="+id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.layout{
  width: 100%;
  min-height: 800px;
  background:#1F2D3D;
  .nav{
    width: 100%;
    li{
      height: 40px;
      line-height: 40px;
      a{
        display: block;
        padding: 0 20px;
        color: #F9FAFC;
        font-size: 12px;
      }
      a:hover{
        background: #475669;
      }
      
    }
  }
}
</style>
