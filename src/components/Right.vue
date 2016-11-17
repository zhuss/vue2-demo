<template>
  <div class="layout">
    <table class="table table-bordered">
    <thead>
      <tr><th v-for="item in table.header">{{item}}</th></tr>
    </thead>
    <tbody>
      <tr v-for="item in table.body">
        <td v-for="i in table.header">{{item[i]}}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'layout-content',
  data () {
    return {
        page:1,
        size:10,
        table:{
          header:["name1","name2","name3"],
          body:[
                {name1:"1",name2:"2",name3:"3"},
                {name1:"11",name2:"22",name3:"33"},
                {name1:"11",name2:"22",name3:"33"},
                {name1:"11",name2:"22",name3:"33"},
                {name1:"11",name2:"22",name3:"33"},
                {name1:"11",name2:"22",name3:"33"},
                {name1:"11",name2:"22",name3:"33"},
                {name1:"11",name2:"22",name3:"33"},
                {name1:"11",name2:"22",name3:"33"}
          ],
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.layout{
  width: 100%;
}
</style>
