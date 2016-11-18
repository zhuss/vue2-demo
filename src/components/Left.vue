<template>
  <div class="layout">
      <el-menu default-active="2" theme="dark">
      <el-submenu index="1">
        <template slot="title">导航一</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">导航二</el-menu-item>
      <el-menu-item index="3">导航三</el-menu-item>
    </el-menu>
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
  height: auto;
  min-height: 800px;
  background: #324057;
}
</style>
