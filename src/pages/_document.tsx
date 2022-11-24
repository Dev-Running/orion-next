import { Head, Html, Main, NextScript } from 'next/document'
import { Header } from '../components/header'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Header />
        <main className="flex w-screen flex-col justify-center items-center min-h-[calc(100vh-5rem)]">
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  )
}
