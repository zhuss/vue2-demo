<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
      inline-template
      :context="_self"
      label="操作">
      <span>
        <el-button @click="handleClick(row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </span>
    </el-table-column>
    </el-table>

    <!-- <swipe class="my-swipe">
      <swipe-item class="slide1" v-for="item in tableData" >{{item.date}}</swipe-item>
    </swipe> -->

     <el-dialog title="详细信息" v-model="dialogTableVisible">
      {{row}}
    </el-dialog>
  </div>
</template>
<script>

require('vue-swipe/dist/vue-swipe.css')
import { Swipe, SwipeItem } from 'vue-swipe'

export default {
  name: 'users',
  components: {
    Swipe,
    SwipeItem
  },
  data () {
    return {
       dialogTableVisible:false,
       row:{},
        tableData:[{
          date:"2016年12月15日",
          name:"zhuss",
          address:"映兔科技"
        },
        {
          date:"2016年12月15日",
          name:"zhuss1",
          address:"映兔科技"
        }]
      }
    },
  methods:{ 
    handleClick(row){
      this.dialogTableVisible = true;
      this.row = row;
      console.log(row);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  background: #CCC;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>
