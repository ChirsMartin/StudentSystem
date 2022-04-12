<template>
  <div class="teacher">
  <el-row gutter="15">
    <el-col span="5"><el-card shadow="hover">
      <div class="gailun">
      <img class="img-1" src="@/imgs/gailun.png" alt="404 Not Found"  title="盖伦老师">
      </div>
      <el-descriptions class="margin-top" title="相关信息" :column="1">
        <el-descriptions-item label="姓名">盖伦</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">召唤师峡谷</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-card></el-col>
      <el-col span="5"><el-card shadow="hover">
        <div class="kate">
          <img class="img-2" src="@/imgs/kate.png" alt="404 Not Found"  title="卡特老师">
        </div>
        <el-descriptions class="margin-top" title="相关信息" :column="1">
          <el-descriptions-item label="姓名">卡特</el-descriptions-item>
          <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
          <el-descriptions-item label="居住地">召唤师峡谷</el-descriptions-item>
          <el-descriptions-item label="备注">
            <el-tag size="small">学校</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </el-card></el-col>
    <el-col span="5"><el-card shadow="hover">
      <div class="gailun">
        <img class="img-3" src="@/imgs/daomei.png" alt="404 Not Found"  title="刀妹老师">
      </div>
      <el-descriptions class="margin-top" title="相关信息" :column="1">
        <el-descriptions-item label="姓名">刀妹</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">召唤师峡谷</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-card></el-col>
      <el-col span="5"><el-card shadow="hover">
        <div class="kate">
          <img class="img-4" src="@/imgs/nanqiang.png" alt="404 Not Found"  title="男枪老师">
        </div>
        <el-descriptions class="margin-top" title="相关信息" :column="1">
          <el-descriptions-item label="姓名">男枪</el-descriptions-item>
          <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
          <el-descriptions-item label="居住地">召唤师峡谷</el-descriptions-item>
          <el-descriptions-item label="备注">
            <el-tag size="small">学校</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </el-card></el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: "TeacherList",
}
</script>

<style scoped>
.add{
  float: right;
}
.el-row{
  display: flex;
  justify: end;
}
.gailun{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}
.kate{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}
.img-1{
  position: relative;
  left: -100px;
  top: -80px;
}

.img-2{
  position: relative;
  left: -20px;
  top: -80px;
}
.img-3{
  position: relative;
  left: -50px;
}
.img-4{
  position: relative;
  left: -80px;
}
</style>