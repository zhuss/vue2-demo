<template>
  <div class="tpl">
    <p class="table-title">{{table.title}}</p>
    <el-table :data="table.tbody">
      <el-table-column :prop="item.prop" :label="item.label" v-for="item in table.thead"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      table: {
        title: "一级主题视频观看数统计",
        thead: [{
          prop: 'date',
          label: '日期'
        }, {
          prop: 'name',
          label: '姓名'
        }, {
          prop: 'address',
          label: '地址'
        }],

        tbody: [{
          date: '2017-12-05',
          name: 'zhuss',
          address: '杭州西湖'
        }, {
          date: '2017-12-05',
          name: 'zhuss',
          address: '杭州西湖'
        }]
      }
    }
  }
}
</script>
<style scoped>
.tpl {}

.table-title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #EFF2F7;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #e0e6ed;
  padding: 0 20px;
  font-size: 18px;
  font-weight: bolder;
}
</style>
