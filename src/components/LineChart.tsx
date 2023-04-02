import ReactEcharts from 'echarts-for-react'

const LineChart = () => {
  // q: 如何取消折线上的点？
  // a: https://echarts.apache.org/examples/zh/editor.html?c=line-smooth
  const options = {
    xAxis: {
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      }
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320, 1200, 1100, 1000, 900, 800],
        type: 'line',
        smooth: true,
        showSymbol: false
      },
      {
        data: [758, 842, 801, 834, 1200, 1230, 1220, 1100, 1000, 900, 800, 700],
        type: 'line',
        smooth: true,
        showSymbol: false
      }
    ]
  }

  return <ReactEcharts option={options} style={{ height: '240px', width: '100%' }} />
}

export default LineChart
