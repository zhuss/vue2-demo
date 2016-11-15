<template>
	<div class="login">
		<p>login</p>
		<p>{{msg}}</p>
	</div>
</template>

<script>
export default {
  name: 'login',
  data(){
  	return {
  		msg:"message"
  	}
  }
}	
</script>

<style>
.login{
	p{
		line-height: 30px;
	}
}
</style>