import Head from 'next/head'
import { useContext } from 'react'
import { FiSearch } from 'react-icons/fi'
import { MdNotifications } from 'react-icons/md'
import { Sidebar } from '../../components/aside'
import { MainContext } from '../../contexts/main'

export default function Dashboard() {
  const { isOpen, setIsOpen } = useContext(MainContext)
  return (
    <main className="flex gap-0">
      <Head>
        <title>Orion - Dashboard</title>
      </Head>
      <Sidebar />
      <div
        className={`  w-full h-screen bg-dark  text-white pb-8 transition-all duration-300`}
      >
        <section className="h-24 w-full border-b border-neutral-900 flex gap-8 px-8 items-center justify-center">
          <FiSearch className="text-3xl text-neutral-700" />
          <input
            type="text"
            className="h-10 rounded-md w-96 bg-neutral-900 px-4 font-medium"
          />
          <button className="h-10 w-10 bg-neutral-900 rounded-md hover:bg-neutral-800 transition-colors duration-200 flex items-center justify-center">
            <MdNotifications className="text-2xl" />
            <div className="bg-red-500 w-2 h-2 rounded-full absolute -mt-3 ml-3"></div>
          </button>
        </section>
        <section
          className={`${
            isOpen ? 'px-6' : 'px-32'
          } pt-10 transition-all duration-300 `}
        >
          1{/* <div className="w-full bg-red-500 h-2"></div> */}
        </section>
      </div>
      <div className="w-[35rem] h-screen bg-dark border-l-2 border-neutral-900">
        123
      </div>
    </main>
  )
}
