import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { useContext, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { MainContext } from '../../../contexts/main'
import { ManagerLI } from './manager'
import { ContentModalNewManager } from './modal/content'

export const Managers = () => {
  const { isOpen, close, opening, section } = useContext(MainContext)
  const [open, setOpen] = useState(false)

  const footerModal = (
    <div className="flex justify-end gap-10  bg-dark py-5 px-10 text-neutral-50">
      <hr className="absolute left-0 -mt-6 h-2 w-full border-none bg-neutral-900 " />
      <Button
        label="Add"
        icon="pi pi-check"
        className="p-button-warning flex gap-2 rounded-md bg-primary py-2 px-5 font-medium text-dark   hover:bg-primary/80"
        onClick={() => setOpen(false)}
      />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="flex gap-2 rounded-md  py-2 px-5 font-medium   text-neutral-300 hover:bg-neutral-700/60"
        onClick={() => setOpen(false)}
      />
    </div>
  )

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
          onClick={(e) => setOpen(true)}
          className="h-3/5 rounded-sm bg-neutral-800 px-4 font-medium transition-colors  hover:bg-primary/90 hover:text-neutral-800"
        >
          Add new
        </button>

        <Dialog
          visible={open}
          draggable
          className=" h-96 w-2/5 gap-0 rounded-md border-none bg-neutral-900 "
          position="center"
          footer={footerModal}
          icons={
            <button
              className="flex h-7 w-7 items-center justify-center rounded text-2xl text-neutral-400 transition-all duration-150 hover:text-neutral-300  "
              onClick={(e) => setOpen(false)}
            >
              <MdClose />
            </button>
          }
          modal
          closable={false}
          header="Add new manager"
          contentClassName="bg-neutral-900 h-full"
          headerClassName="bg-dark text-xl font-medium px-8 rounded-t-xl text-neutral-50 py-4"
          maskClassName="  backdrop-brightness-50  backdrop-opacity-100 bg-white/10 backdrop-blura bg-opacity-50 transition-all "
          onHide={() => setOpen(false)}
        >
          <div className="-mb-1 flex h-full w-full flex-col  items-center justify-center bg-neutral-900  py-10 px-4 text-neutral-300  backdrop-contrast-50 backdrop-saturate-50">
            <ContentModalNewManager />
          </div>
        </Dialog>
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
