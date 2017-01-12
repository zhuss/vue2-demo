<template>
  <div class="layout">
    <el-menu default-active="1-1" theme="dark" @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">数据管理</template>
        <el-menu-item index="users">用户数据</el-menu-item>
        <el-menu-item index="videos">视频数据</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">数据报表</template>
        <el-menu-item index="userData">用户数据</el-menu-item>
        <el-menu-item index="dataTpl">通用模板</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'layout-left',
  data() {
    return {

    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$emit("select", key);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.layout {
  width: 100%;
  background: #324057;
}
</style>
