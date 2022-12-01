import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css' //core css
import { ContextMenuComponent } from '../components/contextMenu'
// import 'primereact/resources/themes/tailwind-light/theme.css' //theme css
import { MainProvider } from '../contexts/main'
import '../styles/calendar.css'
import '../styles/global.css'
import '../styles/tailwind.css'
import '../styles/theme.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <ChakraProvider>
        <ContextMenuComponent>
          <Component {...pageProps} />
        </ContextMenuComponent>
      </ChakraProvider>
    </MainProvider>
  )
}
