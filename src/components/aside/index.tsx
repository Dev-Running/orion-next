import { Avatar } from '@chakra-ui/react'
import { useContext } from 'react'
import { BsFillCalendarWeekFill } from 'react-icons/bs'
import { FaTasks, FaUserTag } from 'react-icons/fa'
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io'
import { MdOutlineExitToApp, MdPlayLesson } from 'react-icons/md'
import { TbActivity, TbApiApp } from 'react-icons/tb'
import { MainContext } from '../../contexts/main'

export const Sidebar = () => {
  const { isOpen, setIsOpen, section, setSection } = useContext(MainContext)
  return (
    <div className="min-h-screen">
      <aside
        className={` ${
          isOpen ? 'w-80 min-w-[20rem]' : 'w-20 min-w-[5rem]'
        } sticky top-0 col-start-1 col-end-2 flex min-h-[100vh] flex-col items-center justify-between bg-neutral-900 py-8 text-neutral-500 transition-all duration-300 `}
      >
        <div className="flex w-full flex-col gap-20">
          <div
            className={` ${
              isOpen ? ' w-full' : 'w-20'
            } flex items-center justify-center gap-4`}
          >
            <div
              className={`${
                isOpen
                  ? 'absolute left-16 ml-0 -mr-0 rotate-12'
                  : 'absolute left-6 rotate-0  '
              } flex h-8 w-8 items-center justify-center rounded-sm bg-primary pt-[0.1rem] text-2xl font-bold text-dark transition-all duration-300  `}
            >
              O
            </div>
            <h1
              className={`${
                isOpen ? 'w-full  ' : ' w-0 opacity-0'
              } absolute left-[6.5rem] mt-1 overflow-hidden whitespace-nowrap font-raj text-4xl font-bold text-white transition-all duration-200 `}
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
              }  group absolute flex h-7 w-7 items-center justify-center rounded-full bg-neutral-800   shadow-sm shadow-dark transition-all  duration-300 hover:cursor-pointer  hover:bg-neutral-700`}
            >
              {isOpen ? (
                <IoIosArrowBack className="-ml-[0.20rem] text-xl  transition-colors duration-300 group-hover:cursor-pointer group-hover:text-white" />
              ) : (
                <IoIosArrowBack className="rotate-180  text-xl transition-colors duration-300 group-hover:cursor-pointer group-hover:text-white" />
              )}
            </button>
          </div>

          <ul
            className={` ${
              isOpen ? '' : 'max-w-20 w-20'
            } flex w-full flex-col gap-4 overflow-hidden`}
          >
            <li
              onClick={(e) => setSection('overview')}
              className={` ${
                isOpen
                  ? 'px-16 after:left-[19.25rem] after:w-3 '
                  : 'px-7 after:left-[4.74rem] after:w-1 '
              } ${
                section == 'overview'
                  ? 'bg-neutral-800/20 text-white after:bg-primary'
                  : ''
              }  flex  h-12 w-full items-center gap-4 font-medium  transition-all after:absolute   after:h-12 after:rounded-l-md  after:transition-all after:duration-300 hover:cursor-pointer hover:bg-neutral-800/20 hover:text-white `}
            >
              <span>
                <TbApiApp className="text-2xl" />
              </span>
              <span
                className={` ${
                  isOpen ? '' : ' opacity-0'
                }  overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-300 `}
              >
                Overview
              </span>
            </li>
            <li
              onClick={(e) => setSection('activities')}
              className={` ${
                isOpen
                  ? 'px-16 after:left-[19.25rem]'
                  : 'px-7 after:left-[4.74rem] after:w-1'
              } ${
                section == 'activities'
                  ? 'bg-neutral-800/20 text-white after:bg-primary'
                  : ''
              } flex  h-12 w-full items-center gap-4 font-medium text-neutral-500 transition-all after:absolute after:h-12  after:w-3 after:rounded-l-md after:duration-300 hover:cursor-pointer hover:bg-neutral-800/20 hover:text-white`}
            >
              <span>
                <TbActivity className="text-2xl" />
              </span>
              <span
                className={` ${
                  isOpen ? '' : ''
                }  overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-300 `}
              >
                Activities
              </span>
            </li>
            <li
              onClick={(e) => setSection('tasks')}
              className={` ${
                isOpen
                  ? 'px-16 after:left-[19.25rem]'
                  : 'px-7 after:left-[4.74rem] after:w-1'
              } ${
                section == 'tasks'
                  ? 'bg-neutral-800/20 text-white after:bg-primary'
                  : ''
              } flex  h-12 w-full items-center gap-4 font-medium text-neutral-500 transition-all after:absolute after:h-12 after:w-3 after:rounded-l-md after:duration-300 hover:cursor-pointer hover:bg-neutral-800/20 hover:text-white`}
            >
              <span>
                <FaTasks className="text-2xl " />
              </span>
              <span
                className={` ${
                  isOpen ? '' : ''
                }  overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-300 `}
              >
                Tasks
              </span>
            </li>
            <li
              onClick={(e) => setSection('courses')}
              className={` ${
                isOpen
                  ? 'px-16 after:left-[19.25rem]'
                  : 'px-7 after:left-[4.74rem] after:w-1'
              } ${
                section == 'courses'
                  ? 'bg-neutral-800/20 text-white after:bg-primary'
                  : ''
              } flex  h-12 w-full items-center gap-4 font-medium text-neutral-500 transition-all after:absolute after:h-12 after:w-3 after:rounded-l-md after:duration-300 hover:cursor-pointer hover:bg-neutral-800/20 hover:text-white`}
            >
              <span>
                <MdPlayLesson className="text-2xl" />
              </span>
              <span
                className={` ${
                  isOpen ? '' : ''
                } overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-300 `}
              >
                Courses
              </span>
            </li>
            <li
              onClick={(e) => setSection('managers')}
              className={` ${
                isOpen
                  ? 'px-16 after:left-[19.25rem]'
                  : 'px-7 after:left-[4.74rem] after:w-1'
              } ${
                section == 'managers'
                  ? 'bg-neutral-800/20 text-white after:bg-primary'
                  : ''
              } flex  h-12 w-full items-center gap-4 font-medium text-neutral-500 transition-all after:absolute after:h-12 after:w-3 after:rounded-l-md after:duration-300 hover:cursor-pointer hover:bg-neutral-800/20 hover:text-white`}
            >
              <span>
                <FaUserTag className="text-2xl" />
              </span>
              <span
                className={` ${
                  isOpen ? '' : ''
                } overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-300  `}
              >
                Managers
              </span>
            </li>
            <li
              onClick={(e) => setSection('calendar')}
              className={` ${
                isOpen
                  ? 'px-16 after:left-[19.25rem]'
                  : 'px-7 after:left-[4.74rem] after:w-1'
              } ${
                section == 'calendar'
                  ? 'bg-neutral-800/20 text-white after:bg-primary'
                  : ''
              } flex  h-12 w-full items-center gap-4 font-medium text-neutral-500 transition-all after:absolute after:h-12 after:w-3 after:rounded-l-md after:duration-300 hover:cursor-pointer hover:bg-neutral-800/20 hover:text-white`}
            >
              <span>
                <BsFillCalendarWeekFill className="text-2xl" />
              </span>
              <span
                className={` ${
                  isOpen ? '' : ''
                }  overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-300  `}
              >
                Calendar
              </span>
            </li>
            <li
              onClick={(e) => setSection('settings')}
              className={` ${
                isOpen
                  ? 'px-16 after:left-[19.25rem]'
                  : 'px-7 after:left-[4.74rem] after:w-1'
              } ${
                section == 'settings'
                  ? 'bg-neutral-800/20 text-white after:bg-primary'
                  : ''
              } flex  h-12 w-full items-center gap-4 font-medium text-neutral-500 transition-all after:absolute after:h-12 after:w-3 after:rounded-l-md after:duration-300 hover:cursor-pointer hover:bg-neutral-800/20 hover:text-white`}
            >
              <span>
                <IoMdSettings className="text-2xl transition-colors" />
              </span>
              <span
                className={` ${
                  isOpen ? '' : ''
                }  overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-300  `}
              >
                Settings
              </span>
            </li>
          </ul>
        </div>

        <div
          className={` ${
            isOpen ? 'w-full' : 'w-0 opacity-0'
          } flex items-center justify-center gap-4 overflow-hidden transition-all duration-300 `}
        >
          <Avatar className="w-14 rounded-full bg-neutral-800" src="" />
          <div className="flex flex-col">
            <h1 className="overflow-hidden text-ellipsis whitespace-nowrap font-inter text-base font-bold text-white transition-all duration-300">
              Lucas Laurentino
            </h1>
            <p className="text-xs font-medium">Manager</p>
          </div>
          <button className="group bg-neutral-800">
            <MdOutlineExitToApp className="text-2xl transition-colors group-hover:text-red-500" />
          </button>
        </div>
        <button
          className={` ${
            isOpen ? ' opacity-0' : ''
          } group absolute bottom-6 mb-4 bg-neutral-800 transition-all duration-300`}
        >
          <MdOutlineExitToApp className="text-2xl transition-colors group-hover:text-red-500" />
        </button>
      </aside>
    </div>
  )
}
