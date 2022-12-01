import { Button } from 'primereact/button'
// import { Dialog } from 'primereact/dialog'
import * as Dialog from '@radix-ui/react-dialog'
import { useContext, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { MainContext } from '../../../contexts/main'
import { ManagerLI } from './manager'

export const Managers = () => {
  const { isOpen, close, opening, section } = useContext(MainContext)
  const [open, setOpen] = useState(false)

  const footerModal = (
    <div className="flex justify-end gap-10  px-4 pt-6 text-neutral-50">
      {/* <hr className="absolute left-0 -mt-6 h-2 w-full border-none bg-neutral-900 " /> */}
      <Button
        label="Add"
        icon="pi pi-check"
        className="p-button-text flex gap-2 rounded-md "
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
        {/* <Dialog
          visible={open}
          draggable
          className="w-2/5 gap-0 rounded-md border-none bg-neutral-900 "
          position="center"
          footer={footerModal}
          // icons={
          //   <button
          //     className="flex h-7 w-7 items-center justify-center rounded text-2xl text-neutral-400 transition-all duration-150 hover:text-neutral-300  "
          //     onClick={(e) => setOpen(false)}
          //   >
          //     <MdClose />
          //   </button>
          // }
          modal
          closable={true}
          header="Add new manager"
          contentClassName="bg-neutral-900 "
          headerClassName="bg-dark text-xl font-medium px-8 rounded-t-xl text-neutral-50 py-4"
          maskClassName="  backdrop-brightness-50  backdrop-opacity-100 bg-white/10 backdrop-blura bg-opacity-50 transition-all "
          onHide={() => setOpen(false)}
        >
          <div className="-mb-1 flex w-full flex-col  items-center justify-center bg-neutral-900  py-10 px-4 text-neutral-300  backdrop-contrast-50 backdrop-saturate-50">
            <ContentModalNewManager />
          </div>
        </Dialog> */}

        <button
          onClick={(e) => setOpen(true)}
          className="h-3/5 rounded-sm bg-neutral-800 px-4 font-medium transition-colors  hover:bg-primary/90 hover:text-neutral-800"
        >
          Add new
        </button>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          {/* <Dialog.Trigger asChild></Dialog.Trigger> */}
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-dark/80 motion-safe:animate-overlayShow " />
            <Dialog.Content className="fixed top-1/2 left-1/2 w-2/5 -translate-x-[50%] -translate-y-[50%] animate-contentShow rounded-md  drop-shadow-md">
              <Dialog.Title className="rounded-t-md bg-dark py-5 px-6 text-2xl font-medium text-white">
                Add new manager
              </Dialog.Title>
              <Dialog.Description className="w-full rounded-b-md bg-neutral-900 pt-10  text-neutral-300">
                <div className="flex w-full justify-center gap-4 px-6">
                  <div className="group">
                    <input
                      type="firstname"
                      id="firstname"
                      placeholder=" "
                      className="peer w-full rounded bg-neutral-800 px-4 py-2  outline-none ring-2 ring-neutral-800 transition-all duration-200 placeholder:text-neutral-300 focus:ring-primary"
                    />
                    <label
                      htmlFor="firstname"
                      className="absolute -ml-[17rem] -mt-6 text-xs font-medium transition-all peer-placeholder-shown:mt-2 peer-placeholder-shown:text-base peer-focus:-mt-6 peer-focus:text-xs "
                    >
                      Firstname
                    </label>
                  </div>
                  <div className="group">
                    <input
                      type="text"
                      id="lastname"
                      placeholder=" "
                      className="peer w-full rounded bg-neutral-800 px-4 py-2  outline-none ring-2 ring-neutral-800 transition-all duration-200 placeholder:text-neutral-300 focus:ring-primary"
                    />
                    <label
                      htmlFor="lastname"
                      className=" absolute -ml-[17rem] -mt-6 text-xs font-medium transition-all peer-placeholder-shown:mt-2 peer-placeholder-shown:text-base peer-focus:-mt-6 peer-focus:text-xs "
                    >
                      Lastname
                    </label>
                  </div>
                </div>
                <div className="mt-10  flex w-full justify-center px-[5.8rem]">
                  <div className="group w-full">
                    <input
                      type="email"
                      id="email"
                      placeholder=" "
                      autoComplete="off"
                      className="peer w-full rounded bg-neutral-800  px-4 py-2 outline-none  ring-2 ring-neutral-800 transition-all duration-200 placeholder:text-neutral-300 autofill:bg-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="email"
                      className=" absolute -ml-[35.7rem] -mt-6 text-xs font-medium transition-all  peer-placeholder-shown:mt-2 peer-placeholder-shown:text-base peer-focus:-mt-6 peer-focus:text-xs "
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="mt-10 flex h-20 w-full items-center justify-end gap-4 rounded-b-md  px-6">
                  <Dialog.Close>
                    <button className="px-6 py-2 transition-colors hover:text-white">
                      Cancel
                    </button>
                  </Dialog.Close>
                  <button
                    onClick={(e) => e}
                    className=" rounded-md bg-primary px-6 py-2 text-dark transition-colors hover:bg-primary/80"
                  >
                    Add
                  </button>
                </div>
              </Dialog.Description>
              <Dialog.Close className="">
                <button className="absolute top-[1.6rem] right-5 text-2xl text-neutral-300 transition-colors hover:text-white">
                  <MdClose />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
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
