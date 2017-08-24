<template>
	<div class="edit">
		<div class="layout-head">
	     <top></top>
	  </div>
    <el-card class="box-card" header="编辑报表">
      <div class="from-group">
        <span>报表名称</span>
        <el-input type="text" placeholder="请输入内容" ></el-input> 
      </div>

      <div class="from-group">
        <span>sql语句</span>
        <el-input type="textarea" placeholder="请输入内容" ></el-input>
      </div>
    </el-card>
	</div>
</template>
<script>
require('../../assets/css/common.css')

import Top from '../../components/Top'

export default {
  name: 'edit',
  components: {
    Top
  },
  data(){
  	return {
  		
  	}
  }
}	
</script>

<style lang="less" scoped>
.edit{
 .box-card{
 	width: 800px;
 	margin: 20px auto;

    .from-group{
      margin:20px 0;
    }
 }
}
</style>