<!--
 * @Author: your name
 * @Date: 2021-04-04 21:14:53
 * @LastEditTime: 2021-04-07 14:07:22
 * @LastEditors: daping
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\src\views\Table.vue
-->
<template>
  <div class="tableParent">
    <edit-table :colsData='colsData' :tableData='tableData' :tableData.sync="tableData"
      @handleCurrentPage="setCurrentPage" @handleSizePage="setSizePage" :total="form.total"
      :currentPage="form.currentPage" :pageSize="form.pageSize">
      <template #after>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button v-show="!scope.row.isEdit" size="mini" @click="editRow(scope.$index, scope.row)">编辑</el-button>
            <el-button v-show="scope.row.isEdit" size="mini" @click="cancel(scope.$index, scope.row)">取消</el-button>
            <el-button v-show="scope.row.isEdit" size="mini" @click="save(scope.$index, scope.row)">保存</el-button>
          </template>
        </el-table-column>
      </template>
    </edit-table>
  </div>
</template>


<script>
  import EditTable from '../components/Table'
  export default {
    components: {
      EditTable
    },
    data() {
      return {
        colsData: [
          { prop: 'id', label: 'id' },
          { prop: 'name', label: 'name' },
          { prop: 'age', label: 'age', render: row => `${row.age}岁` },
          { prop: 'job', label: 'job' }
        ],
        tableData: [],
        form: {
          currentPage: 2,
          pageSize: 20,
          total: 200
        }
      }
    },
    mounted() {

    },
    created() {
      this.getList()
    },

    methods: {
      setCurrentPage(e) {
        console.log(e, 'currnetPage')
      },
      setSizePage(e) {
        console.log(e, 'setSizePage')
      },
      getList() {
        var _this = this
        this.$axios.get('/parameter/query')
          .then(res => {
            if (res.status === 200) {
              // 编辑列备用old数据
              _this.tableData = res.data.data.map(v => {
                for (let key in v) {
                  v[`old${key}`] = v[key]
                }
                // 增加edit按钮显示
                this.$set(v, 'isEdit', false)
                return v
              })
            }

          })
          .catch(err => {
            console.log(err)
          })
      },
      editRow(index, row) {
        row.isEdit = !row.isEdit
      },
      // 保存
      save(index, row) {
        // 本地端测试。
        // !! 如果是发异步，则忽略以下逻辑
        for (let obj in row) {
          let str = '';
          if (obj.indexOf('old') > -1) {
            str = obj.replace('old', '');
            // console.log(str)
            row[obj] = row[str];

          }
        }
        row.isEdit = false
      },
      // 点击取消
      cancel(index, row) {
        for (let obj in row) {
          let str = '';
          if (obj.indexOf('old') > -1) {
            str = obj.replace('old', '');
            row[str] = row[obj];
          }
        }
        row.isEdit = false;
      }
    }

  }
</script>