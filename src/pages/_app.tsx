import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import { MainProvider } from '../contexts/main'
import '../styles/calendar.css'
import '../styles/global.css'
import '../styles/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </MainProvider>
  )
}
