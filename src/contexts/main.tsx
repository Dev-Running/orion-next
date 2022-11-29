import { createContext, useState } from 'react'

type MainContextProps = {
  isOpen: boolean
  setIsOpen: (data: boolean) => void
  section: string
  setSection: (data: string) => void
}
export const MainContext = createContext({} as MainContextProps)

export const MainProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [section, setSection] = useState('overview')
  return (
    <MainContext.Provider value={{ isOpen, setIsOpen, section, setSection }}>
      {children}
    </MainContext.Provider>
  )
}
