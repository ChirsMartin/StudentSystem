<template>
  <div id="ResultsManagement">

  </div>
</template>

<script>
var echarts = require('echarts')
export default {
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      this.chart = echarts.init(this.$el);
      this.setOptions();
    },
    setOptions() {
      this.chart.setOption({
        title: {
          text: '计算机一班挂科人数'
        },
        tooltip: {},
        xAxis: {
          data: ["数学", "英语", "计组", "数据结构", "计算机网络", "算法"]
        },
        yAxis: {},
        series: [{
          name: '成绩',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
};
</script>

<style scoped>
#ResultsManagement{
  width: 100%;
  height: 100%;
}
</style>