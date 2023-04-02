import ReactEcharts from 'echarts-for-react'

const PieChart = () => {
  const options = {
    series: [
      {
        type: 'pie',
        radius: ['36%', '70%'],
        data: [
          { value: 735, name: '公共卫生事件' },
          { value: 580, name: '社会安全事故' },
          { value: 580, name: '事故灾难' },
          { value: 1048, name: '自然灾害' }
        ]
      }
    ]
  }

  return <ReactEcharts option={options} style={{ height: '340px', width: '100%' }} />
}

export default PieChart
