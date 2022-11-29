import Head from 'next/head'
import { useContext, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { MdNotifications } from 'react-icons/md'
import { Sidebar } from '../../components/aside'
import { Activities } from '../../components/main/activities'
import { Calendar } from '../../components/main/calendar'
import { Courses } from '../../components/main/courses'
import { Managers } from '../../components/main/managers'
import { Overview } from '../../components/main/overview'
import { Settings } from '../../components/main/settings'
import { Tasks } from '../../components/main/tasks'
import { RightSidebarManagers } from '../../components/sidebarRight/managers'
import { RightSidebarRecents } from '../../components/sidebarRight/recent'
import { RightSidebarTasks } from '../../components/sidebarRight/tasks'
import { MainContext } from '../../contexts/main'

export default function Dashboard() {
  const [focus, setFocus] = useState(false)
  const { section } = useContext(MainContext)

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
        {section == 'overview' ? (
          <Overview pendingActivities={pendingActivities} />
        ) : section == 'managers' ? (
          <Managers />
        ) : section == 'tasks' ? (
          <Tasks />
        ) : section == 'courses' ? (
          <Courses />
        ) : section == 'settings' ? (
          <Settings />
        ) : section == 'calendar' ? (
          <Calendar />
        ) : section == 'activities' ? (
          <Activities />
        ) : (
          <>NOT FOUND</>
        )}
      </div>
      <div className=" min-h-screen ">
        <div className="sticky top-0 box-border flex   max-h-screen min-h-screen w-[21rem] min-w-[21rem] flex-col gap-8 overflow-scroll border-l-2  border-neutral-900  bg-dark px-4 pt-10 text-neutral-300">
          <RightSidebarRecents />
          <RightSidebarManagers />
          <RightSidebarTasks />
        </div>
      </div>
    </main>
  )
}
