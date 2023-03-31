import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import * as echarts from 'echarts/core'
import { MapChart } from 'echarts/charts'
import { GeoComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import chinaGeoJSON from '@/assets/china.json'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './index.css'

echarts.use([MapChart, GeoComponent, CanvasRenderer])
echarts.registerMap('china', chinaGeoJSON as any)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
