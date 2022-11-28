import { AppProps } from 'next/app'
import { MainProvider } from '../contexts/main'
import '../styles/global.css'
import '../styles/tailwind.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  )
}
