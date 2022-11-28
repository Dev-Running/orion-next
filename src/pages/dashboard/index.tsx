import Head from 'next/head'
import { useContext } from 'react'
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
        className={` ${
          isOpen ? 'px-7' : 'px-32'
        }  w-full h-screen bg-dark  text-white py-8 transition-all duration-300`}
      >
        <h1 className=" ">123</h1>
      </div>
      <div className="w-[35rem] h-screen bg-dark border-l-2 border-neutral-900">
        123
      </div>
    </main>
  )
}
