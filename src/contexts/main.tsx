import { createContext, useState } from 'react'

type MainContextProps = {
  isOpen: boolean
  setIsOpen: (data: boolean) => void
}
export const MainContext = createContext({} as MainContextProps)

export const MainProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <MainContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MainContext.Provider>
  )
}
