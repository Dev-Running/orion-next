import Head from 'next/head'
import { SignIn } from '../components/signIn/signin'

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Head>
        <title>Orion</title>
      </Head>
      <SignIn />
    </main>
  )
}
