import { createContext, useState } from 'react'

type MainContextProps = {
  isOpen: boolean
  setIsOpen: (data: boolean) => void
  section: string
  close: boolean
  opening: boolean
  setSection: (data: string) => void
  setClose: (data: boolean) => void
  setOpening: (data: boolean) => void
}
export const MainContext = createContext({} as MainContextProps)

export const MainProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [section, setSection] = useState('overview')
  const [close, setClose] = useState(false)
  const [opening, setOpening] = useState(false)
  return (
    <MainContext.Provider
      value={{
        isOpen,
        setIsOpen,
        section,
        setSection,
        setClose,
        setOpening,
        close,
        opening,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
