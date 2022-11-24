import Head from 'next/head'
import { useState } from 'react'
import { OptionsDashboard } from '../../components/options'

export default function Dash() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <Head>
        <title>Orion - Dashboard</title>
      </Head>
      <OptionsDashboard />
    </>
  )
}
