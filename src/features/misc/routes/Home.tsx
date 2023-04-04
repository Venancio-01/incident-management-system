import ChinaMap from '@/components/ChinaMap'
import BasePanel from '@/components/BasePanel'
import PieChart from '@/components/PieChart'
import LineChart from '@/components/LineChart'

export const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-1 grid grid-cols-[492px_1fr_492px] grid-rows-[1fr_auto_295px] gap-4 px-10 py-4 text-white">
        <BasePanel title="本月事故类型统计">
          <PieChart></PieChart>
        </BasePanel>
        <div className="row-span-2">
          <ChinaMap></ChinaMap>
        </div>
        <BasePanel title="本月事故统计">本月事故统计</BasePanel>
        <BasePanel className="row-span-2" title="近期事故通报">
          近期事故通报
        </BasePanel>
        <BasePanel className="row-span-2" title="本月防范事故建议">
          <span>本月防范事故建议</span>
          <span>111</span>
        </BasePanel>
        <BasePanel title="事故统计">
          <LineChart></LineChart>
        </BasePanel>
      </div>
    </div>
  )
}
