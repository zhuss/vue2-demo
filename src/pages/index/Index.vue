<template>
  <div class="index">
    <!--top-->
   <top></top>
    <!--top-->

    <!--content-->
    <el-row>
      <el-col :span="4">
        <left></left>
      </el-col>
      <el-col :span="16">
        <div>wqweqwe</div>
      </el-col>
    </el-row>
    <!--content-->
  </div>
</template>

<script>
require('../../assets/css/common.css')

import Top from '../../components/Top'
import Left from '../../components/Left'
import Right from '../../components/Right'

export default {
  name: 'index',
  components: {
    Top,
    Left,
    Right
  },

}
</script>

<style lang="less" scoped>
.index {
}
</style>
