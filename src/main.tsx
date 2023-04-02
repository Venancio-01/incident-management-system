import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as echarts from 'echarts/core'
import { MapChart, PieChart, LineChart } from 'echarts/charts'
import { GeoComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { StyleProvider } from '@ant-design/cssinjs'
import chinaGeoJSON from '@/assets/china.json'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './index.css'

echarts.use([MapChart, PieChart, LineChart, GeoComponent, CanvasRenderer])
echarts.registerMap('china', chinaGeoJSON as any)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <App></App>
    </StyleProvider>
  </React.StrictMode>
)
