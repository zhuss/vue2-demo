<template>
  <div class="layout">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" @select="handleSelect" mode="horizontal">
      <el-menu-item index="1">{{title}}</el-menu-item>

      <el-submenu index="2" style="float: right;">
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
  },
  methods:{
    handleSelect(key,keyPath){
      if(key == "2-1"){
        this.logout();
      }
    },
    logout(){
      console.log("debug")
      localStorage.removeItem("token")
      location.assign("login.html")
    },

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
