<!--
 * @Author: your name
 * @Date: 2021-04-04 21:14:53
 * @LastEditTime: 2021-04-06 15:31:52
 * @LastEditors: daping
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\src\views\Table.vue
-->
<template>
  <div class="table">
    <el-table :data=" tableData" ref="refTable" v-bind="$attrs" style="width: 100%">
      <el-table-column v-for="(item, idx) in colsData" :label="item.label" :prop="item.prop" :key="idx">
        <template slot-scope="scope">
          <span v-show="!scope.row.isEdit">{{ scope.row['old' + item.prop] }}</span>
          <span v-show="scope.row.isEdit">
            <el-input type="text" v-model="scope.row[item.prop]" />
          </span>
        </template>
      </el-table-column>
      <slot name="after">
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </slot>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'DapingTable',
    data() {
      return {
        color1: '#409EFF',
        color2: null,
      }
    },
    props: {
      tableData: {
        type: Array,
        required: true
      },
      colsData: {
        type: Array,
        required: true
      },
      currentPage: {
        type: Number,
      },
      pageSizes: {
        type: Array,
        default: () => [10, 20, 50, 100]
      },
      pageSize: {
        type: Number,
        default: 10
      },
      total: {
        type: Number,
        default: 100
      },
    },
    mounted() {
      // console.log(this.tableData, '接受')
    },

    methods: {
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.$emit('handleSizePage', val)
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.$emit('handleCurrentPage', val)
      }
    }
  }
</script>