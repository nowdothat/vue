<template>
  <div>
    <LineChart
      :data = "lineData"
    />
  </div>
</template>
<script>
import createG2 from 'g2-vue'

let nowData = new Date()
let lineData = [
  {'time': (nowData.getMonth()+1)+"-"+(nowData.getDate() - 1), 'pm25': 10},
  {'time': (nowData.getMonth()+1)+"-"+nowData.getDate(), 'pm25': 20},
  {'time': (nowData.getMonth()+1)+"-"+(nowData.getDate()+1), 'pm25': 40}
]

const LineChart = createG2(chart => {
  chart.line().position('time*pm25').color('pm25').shape('spline').size(2)
  chart.render()
})

export default {
  components: {
    LineChart
  },
  data () {
    return {
      lineData: lineData
    }
  }
}
</script>