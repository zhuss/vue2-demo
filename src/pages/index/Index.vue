<template>
  <div class="index">
    <!--top-->
    <top class="top"></top>
    <!--top-->
    <!--content-->
    <el-row>
      <el-col :span="4">
        <left class="left" v-on:select="select"></left>
      </el-col>
      <el-col :span="20">
        <div class="right">
          <users v-if="index == 'users'"></users>
          <videos v-if="index == 'videos'"></videos>
          <user-data v-if="index == 'userData'"></user-data>
          <data-tpl v-if="index == 'dataTpl'"></data-tpl>
        </div>
      </el-col>
    </el-row>
    <!--content-->
  </div>
</template>
<script>
require('../../assets/css/common.css')

import Top from '../../components/Top'
import Left from '../../components/Left'
import Users from '../../components/Users'
import Videos from '../../components/Videos'
import UserData from '../../components/UserData'
import DataTpl from '../../components/DataTpl'

export default {
  name: 'index',
  components: {
    Top,
    Left,
    Users,
    Videos,
    UserData,
    DataTpl
  },
  methods: {
    select(index) {
      this.index = index;
    }
  },
  mounted() {
    if (!localStorage.getItem("token")) {
      location.assign("login.html")
    }
  },
  data() {
    return {
      index: "users"
    }
  }

}
</script>
<style lang="less" scoped>
.index {
  height: 100%;
  .top {
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
  .el-row {
    height: 100%;
    padding-top: 60px;
    box-sizing: border-box;
  }
  .el-col {
    height: 100%;
  }
  .left {
    height: 100%;
  }
  .right {
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
    overflow-y: scroll;
  }
}
</style>
