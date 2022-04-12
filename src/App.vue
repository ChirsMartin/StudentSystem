<template>
  <div id="app">
    <!--顶部标题-->
    <el-container>
        <el-header height="125px">
          <el-row class="Head" type="flex" justify="space-between"  align="middle" >
            <el-col  :span="4" tag="div">
              <a href="/"><div class="Student-System el-icon-s-custom"  title="学生管理系统">学生管理系统</div></a>
            </el-col>
          </el-row>
        </el-header>
      <el-container class="InBox">
        <el-aside>
          <el-menu
              default-active="1"
              background-color="#1781a1"
              text-color="#FFFFFFFF"
              active-text-color="#87CEEBFF">
              <router-link to="/StudentList"><el-menu-item index="1-1"> <li class="el-icon-s-custom"></li> 学生信息</el-menu-item></router-link>
              <router-link to="/TeacherList"><el-menu-item  index="1-2"> <li class="el-icon-s-custom"></li> 教师信息</el-menu-item></router-link>
            <router-link to="/ResultsManagement"><el-menu-item index="2"> <li class="el-icon-document"></li>成绩统计</el-menu-item></router-link>
          </el-menu>
        </el-aside>
        <!--主要区域-->
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer  height="0">
      </el-footer>
    </el-container>
  </div>
</template>
<style>
*{
  padding: 0;
  margin: 0;
}
.Head{
  padding-top: 25px;
}
.el-header{
  align-items: center;
  background-image: linear-gradient(to bottom right, #1a4673, #1781a1);
}
.Student-System{
  font-size: 35px;
  font-family:  "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  color: skyblue;
  padding-top: 10px;
}
.User{
  font-size: 3px;
  position: relative;
  display: inline;
}
a{
  text-decoration: none;
}
.InBox{
  height: 850px;
}
.el-aside{
  background-image: linear-gradient(to bottom right, #1a4673, #1781a1);
  width: auto;
  height: 100%;
}
</style>
