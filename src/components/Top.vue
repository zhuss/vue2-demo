<template>
  <div class="layout">
    <div class="header">
      <span class="title">{{title}}</span>
      <ul class="nav">
        <li><a href="index.html">报表</a></li>
        <li><a href="edit.html">编辑</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-top',
  data () {
    return {
      title:"数据报表Admin"
    }
  }
}
</script>

<style lang="less" scoped>
.layout{
  width: 100%;
  height: 50px;
  .header{
    height: 50px;
    background: #324057;
    color: #FFF;
    line-height: 50px;
    padding: 0 20px;
    display: flex;
    .title{
      color: #8492A6;
    }
    .nav{
      flex:1;
      padding-left: 50px;
      li{
        float: left;
        a{
          display: block;
          padding: 0 20px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
