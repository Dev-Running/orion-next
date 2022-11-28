import { Avatar } from '@chakra-ui/react'
import { useState } from 'react'
import { BsFillCalendarWeekFill } from 'react-icons/bs'
import { FaUserTag } from 'react-icons/fa'
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io'
import { MdOutlineExitToApp, MdPlayLesson } from 'react-icons/md'
import { TbActivity, TbApiApp } from 'react-icons/tb'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <aside
      className={` ${
        isOpen ? 'w-80 min-w-[20rem]' : 'w-20 min-w-[5rem]'
      } min-h-[100vh] text-neutral-500 bg-neutral-900 col-start-1 col-end-2 flex flex-col py-8 items-center justify-between transition-all duration-300 `}
    >
      <div className="flex flex-col w-full gap-20">
        <div className="flex justify-center items-center gap-4">
          <div
            className={`${
              isOpen
                ? 'rotate-12 ml-0 -mr-0 absolute left-16'
                : 'absolute left-6 rotate-0  '
            } w-8 h-8 bg-primary rounded-sm flex items-center text-2xl font-bold text-dark justify-center transition-all duration-300  `}
          >
            O
          </div>
          <h1
            className={`${
              isOpen ? 'opacity-100  ' : 'w-0 opacity-0'
            } text-4xl font-raj absolute left-[6.5rem] font-bold mt-1 text-white transition-all duration-300 `}
          >
            ORION
          </h1>

          <div
            className={`${
              isOpen ? 'w-8' : 'w-0'
            }  h-8 transition-all duration-300 `}
          ></div>
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className={` ${
              isOpen ? 'ml-[19.95rem]' : 'ml-20'
            }  w-7 h-7 group flex items-center justify-center shadow-dark shadow-sm hover:bg-neutral-700   bg-neutral-800 rounded-full absolute  transition-all duration-300  hover:cursor-pointer`}
          >
            {isOpen ? (
              <IoIosArrowBack className="text-xl -ml-[0.20rem]  group-hover:text-white transition-colors duration-300 group-hover:cursor-pointer" />
            ) : (
              <IoIosArrowBack className="text-xl  rotate-180 group-hover:text-white transition-colors duration-300 group-hover:cursor-pointer" />
            )}
          </button>
        </div>

        <ul className="w-full flex flex-col gap-4">
          <li
            className={` ${
              isOpen
                ? 'px-16 after:w-3  '
                : 'px-7 after:left-[4.75rem] after:w-1 '
            } w-full  h-12 items-center flex gap-4 font-medium text-white after:h-12 after:absolute after:bg-primary  after:duration-300 after:transition-all after:left-[19.25rem] after:rounded-l-md hover:text-white hover:cursor-pointer transition-all `}
          >
            <span>
              <TbApiApp className="text-2xl" />
            </span>
            <span
              className={` ${
                isOpen ? '' : 'w-0 opacity-0'
              }  transition-all duration-300  `}
            >
              Overview
            </span>
          </li>
          <li
            className={` ${
              isOpen ? 'px-16 ' : 'px-7'
            } w-full  h-12 items-center flex gap-4 font-medium text-neutral-500 after:w-3 after:h-12 after:absolute after:left-[19.25rem] after:rounded-l-md hover:text-white hover:cursor-pointer transition-all `}
          >
            <span>
              <TbActivity className="text-2xl" />
            </span>
            <span
              className={` ${
                isOpen ? '' : 'w-0 opacity-0'
              }  transition-all duration-300  `}
            >
              Activity
            </span>
          </li>
          <li
            className={` ${
              isOpen ? 'px-16 ' : 'px-7'
            } w-full  h-12 items-center flex gap-4 font-medium text-neutral-500 after:w-3 after:h-12 after:absolute after:left-[19.25rem] after:rounded-l-md hover:text-white hover:cursor-pointer transition-all `}
          >
            <span>
              <MdPlayLesson className="text-2xl" />
            </span>
            <span
              className={` ${
                isOpen ? '' : 'w-0 opacity-0'
              }  transition-all duration-300  `}
            >
              Courses
            </span>
          </li>
          <li
            className={` ${
              isOpen ? 'px-16 ' : 'px-7'
            } w-full  h-12 items-center flex gap-4 font-medium text-neutral-500 after:w-3 after:h-12 after:absolute after:left-[19.25rem] after:rounded-l-md hover:text-white hover:cursor-pointer transition-all`}
          >
            <span>
              <FaUserTag className="text-2xl" />
            </span>
            <span
              className={` ${
                isOpen ? '' : 'w-0 opacity-0'
              }  transition-all duration-300  `}
            >
              Managers
            </span>
          </li>
          <li
            className={` ${
              isOpen ? 'px-16 ' : 'px-7'
            } w-full  h-12 items-center flex gap-4 font-medium text-neutral-500 after:w-3 after:h-12 after:absolute after:left-[19.25rem] after:rounded-l-md hover:text-white hover:cursor-pointer transition-all `}
          >
            <span>
              <BsFillCalendarWeekFill className="text-2xl" />
            </span>
            <span
              className={` ${
                isOpen ? '' : 'w-0 opacity-0'
              }  transition-all duration-300  `}
            >
              Calendar
            </span>
          </li>
          <li
            className={` ${
              isOpen ? 'px-16 ' : 'px-7'
            } w-full  h-12 items-center flex gap-4 font-medium text-neutral-500 after:w-3 after:h-12 after:absolute after:left-[19.25rem] after:rounded-l-md hover:text-white hover:cursor-pointer transition-all `}
          >
            <span>
              <IoMdSettings className="text-2xl transition-colors" />
            </span>
            <span
              className={` ${
                isOpen ? '' : 'w-0 opacity-0'
              }  transition-all duration-300  `}
            >
              Settings
            </span>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="bg-neutral-800 rounded-full w-14" src="" />
        <div className="flex flex-col">
          <h1 className="text-base font-bold text-white font-inter">
            Lucas Laurentino
          </h1>
          <p className="text-xs font-medium">Manager</p>
        </div>
        <button className="bg-neutral-800 group">
          <MdOutlineExitToApp className="text-2xl group-hover:text-red-500 transition-colors" />
        </button>
      </div>
    </aside>
  )
}