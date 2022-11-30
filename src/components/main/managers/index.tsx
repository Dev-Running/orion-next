import { useDisclosure } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { MainContext } from '../../../contexts/main'
import { ManagerLI } from './manager'
import { NewManagerModal } from './modal/newmanager'

export const Managers = () => {
  const { isOpen, close, opening, section } = useContext(MainContext)
  const [isNew, setNew] = useState(false)

  const { isOpen: open, onClose, onOpen } = useDisclosure()
  return (
    <section
      className={`${isOpen ? 'px-6' : 'px-32'} ${
        close ? 'opacity-0' : 'opacity-100'
      } ${
        close
          ? 'opacity-0'
          : opening
          ? 'opacity-[0.1%]'
          : opening && section === 'overview'
          ? 'opacity-50'
          : !opening && section === 'overview'
          ? 'opacity-100'
          : 'opacity-0'
      } flex flex-col gap-6 pt-10 opacity-0 transition-all duration-300 `}
    >
      <div className="flex h-16 w-full items-center justify-end">
        <button
          onClick={(e) => onOpen()}
          className="h-3/5 rounded-sm bg-neutral-800 px-4 font-medium transition-colors  hover:bg-primary/90 hover:text-neutral-800"
        >
          Add new
        </button>
        <NewManagerModal open={open} onClose={onClose} />
      </div>
      <div className="h-full w-full rounded-md bg-neutral-900">
        <div className="flex h-16 w-full items-center rounded-t-md bg-neutral-800 pl-6 font-medium drop-shadow-md">
          Managers
        </div>
        <ul className="flex w-full flex-col gap-0 pb-0">
          <li className="flex h-16 w-full items-center justify-between px-10  font-medium">
            <span className=" flex items-center justify-center">Avatar</span>
            <span className="flex w-40 items-center justify-start ">Name</span>
            <span className="flex w-48 items-center justify-start">E-mail</span>
            <span className="flex w-40 items-center justify-start">
              Section
            </span>
            <span className="flex w-20 items-center justify-start">Since</span>
          </li>
          <ManagerLI />
          <ManagerLI />
          <ManagerLI />
          <ManagerLI />
        </ul>
      </div>
    </section>
  )
}
