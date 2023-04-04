import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as echarts from 'echarts/core'
import { MapChart, PieChart, LineChart } from 'echarts/charts'
import { GeoComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import chinaGeoJSON from '@/assets/china.json'
import './index.css'

echarts.use([MapChart, PieChart, LineChart, GeoComponent, CanvasRenderer])
echarts.registerMap('china', chinaGeoJSON as any)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)
