<template>
  <div class="StudentList">
    <el-table
        :data="$store.state.Student"
        stripe
        height="800"
        style="width: 100%">
      <template solt="extra">
        <el-button>添加</el-button>
      </template>
      <el-table-column
          prop="id"
          label="学号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="grade"
          label="班级"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="sex"
          label="性别"
          width="180">
      </el-table-column>
      <el-table-column
          prop="resultMath"
          label="数学成绩"
          width="180">
      </el-table-column>
      <el-table-column
          prop="resultChinese"
          label="语文成绩"
          width="180">
      </el-table-column>
      <el-table-column
          prop="resultEnglish"
          label="英语成绩"
          width="180">
      </el-table-column>
      <el-table-column
          prop="AllResult"
          label="总成绩">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="80">
        <template slot-scope="scope">
          <el-button
              @click.native.prevent="deleteRow(scope.$index, $store.state.Student)"
              type="text"
              size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "StudentList",
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    update(){
      this.$store.commit('Vupdata')
    }
    },
  data(){
    var AllResult
    return AllResult=store.getters.resultAll
  }
}

</script>
<style scoped>
.el-table-column{
  text-align: center;
}
.modification{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
}
</style>