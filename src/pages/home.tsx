import ChinaMap from '@/components/ChinaMap'
import BasePanel from '@/components/BasePanel'

function Index() {
  return (
    <div className="">
      <div className="h-[70px] text-white text-center leading-[70px] text-xl">事件智慧大数据管理系统</div>
      <div className="grid grid-cols-[492px_1fr_492px] grid-rows-[1fr_1fr_295px] gap-4 px-10 py-4 text-white">
        <BasePanel>左上</BasePanel>
        <div className="row-span-2">
          {/* <div className="h-[600px] overflow-hidden"> */}
          <ChinaMap></ChinaMap>
          {/* </div> */}
        </div>
        <BasePanel>右上</BasePanel>
        <BasePanel className="row-span-2">左下</BasePanel>
        <BasePanel className="row-span-2">右下</BasePanel>
        <BasePanel>中下</BasePanel>
      </div>
    </div>
  )
}

export default Index
