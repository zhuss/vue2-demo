<template>
  <div class="layout">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">{{title}}</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">订单管理</el-menu-item>

      <el-submenu index="4" style="float: right;">
        <template slot="title">{{name}}</template>
        <el-menu-item index="2-1">登出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'layout-top',
  data () {
    return {
      title:"数据报表Admin",
      name:"admin"
    }
  }
}
</script>

<style lang="less" scoped>
.layout{
    .el-menu-demo{
      border-radius: 0;
      padding-right: 20px;
    }
}
</style>
