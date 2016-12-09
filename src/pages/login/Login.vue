<template>
	<div class="login">
		<div class="login-box">
			<el-card class="box-card" :header="title">
			  <el-input placeholder="请输用户名" v-model="userName">
			    <template slot="prepend">用户名</template>
			  </el-input>
			  <el-input placeholder="请输密码" v-model="password">
			    <template slot="prepend">密&nbsp;&nbsp;&nbsp;&nbsp;码</template>
			  </el-input>

			  <el-button type="primary" style="width:100%;" @click="submit">登录</el-button>
			</el-card>

			
	   </div>
	</div>
</template>
Edit
<script>
export default {
  name: 'login',
  data(){
  	return {
  		title:"登录",
  		userName:"",
  		password:""
  	}
  },
  methods:{
  	submit(){
  		if(this.userName&&this.password){
  			localStorage.setItem("token","123123")
  			location.assign("index.html")
  		}else{
  			this.$message('这是一条消息提示')
  		}
  		
  	}
  }
}	
</script>

<style lang="less" scoped>
.login{
	.login-box{
		margin: 100px auto;
		width: 400px;
		.el-input{
			margin: 20px 0;
		}
		.box-card{
			text-align: center;
			color: #20A0FF;
		}
	}

}
</style>