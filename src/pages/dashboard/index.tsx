import { Avatar, AvatarGroup } from '@chakra-ui/react'
import * as echarts from 'echarts'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { MdNotifications } from 'react-icons/md'
import { Sidebar } from '../../components/aside'
import { Overview } from '../../components/main/overview'
import { RightSidebarRecents } from '../../components/sidebarRight/recent'

export default function Dashboard() {
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    var chartDom = document.getElementById('main')
    var myChart = echarts.init(chartDom, null, {
      renderer: 'svg',
    })
    var option: echarts.EChartsOption

    option = {
      grid: { show: false, tooltip: { show: false } },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        minorTick: { show: false },
        axisTick: { show: false, lineStyle: { width: 0 } },
        axisLine: { show: false },
        splitLine: { show: false },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        axisTick: { show: false },
        type: 'value',
        axisLine: {
          lineStyle: {},
        },
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',

          areaStyle: {
            color: '#212121',
            shadowBlur: 30,
            origin: 'start',
          },
          color: '#fff',
        },
      ],
    }
    myChart.resize()
    myChart.setOption(option)
    myChart.renderToSVGString()
  }, [])

  const pendingActivities = 0

  return (
    <main className="flex gap-0">
      <Head>
        <title>Orion - Dashboard</title>
      </Head>
      <Sidebar />
      <div
        className={`  min-h-screen w-full bg-dark  pb-8 text-white transition-all duration-300`}
      >
        <section className="flex h-24 w-full items-center justify-center gap-8 border-b border-neutral-900 px-8">
          <div
            className={`${
              focus
                ? 'border-primary hover:bg-neutral-900 '
                : 'border-transparent'
            }  flex  w-96 items-center gap-0 rounded-md border-2 bg-neutral-900 pl-4 transition-colors hover:bg-neutral-800`}
          >
            <FiSearch className="text-neutral-white text-3xl" />
            <input
              type="text"
              onFocus={(e) => setFocus(true)}
              onBlur={(e) => setFocus(false)}
              className="h-10 w-full rounded-r-md bg-transparent px-4 font-medium focus:outline-none"
            />
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 transition-colors duration-200 hover:bg-neutral-800">
            <MdNotifications className="text-2xl" />
            <div className="absolute -mt-3 ml-3 h-2 w-2 rounded-full bg-red-500"></div>
          </button>
        </section>
        <Overview pendingActivities={pendingActivities} />
      </div>
      <div className="min-h-full">
        <div className="sticky top-0 flex min-h-screen w-[23rem] min-w-[23rem] flex-col gap-8 border-l-2  border-neutral-900  bg-dark px-4 pt-10 text-neutral-300">
          <RightSidebarRecents />
          <section>
            <h1 className="mb-4 font-medium ">Managers</h1>
            <AvatarGroup
              size="md"
              max={8}
              color="#212121"
              borderColor="#212121"
            >
              <Avatar
                src=""
                className="transition-all duration-300  hover:-translate-y-2"
              />
              <Avatar
                src=""
                className="transition-all duration-300  hover:-translate-y-2"
              />
              <Avatar
                src=""
                className="transition-all duration-300  hover:-translate-y-2"
              />
              <Avatar
                src=""
                className="transition-all duration-300  hover:-translate-y-2"
              />
              <Avatar
                src=""
                className="transition-all duration-300  hover:-translate-y-2"
              />
              <Avatar
                src=""
                className="transition-all duration-300  hover:-translate-y-2"
              />
              <Avatar
                src=""
                className="transition-all duration-300  hover:-translate-y-2"
              />
              <Avatar
                src=""
                className="transition-all duration-300  hover:-translate-y-2"
              />
              <Avatar
                src=""
                className="transition-all duration-300  hover:-translate-y-2"
              />
            </AvatarGroup>
            <div className="mt-4 flex w-full justify-end">
              <Link href="" className="text-xs text-primary hover:opacity-80">
                See all
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
