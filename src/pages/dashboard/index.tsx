import Head from 'next/head'
import { Sidebar } from '../../components/aside'

export default function Dashboard() {
  return (
    <main className="flex gap-0">
      <Head>
        <title>Orion - Dashboard</title>
      </Head>
      <Sidebar />
      <div className="w-full  h-screen bg-dark text-9xl text-white">123</div>
      <div className="w-[35rem] h-screen bg-dark border-l-2 border-neutral-900">
        123
      </div>
    </main>
  )
}
