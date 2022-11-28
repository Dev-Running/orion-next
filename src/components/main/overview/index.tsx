import { Stat, StatArrow } from '@chakra-ui/react'
import { useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { MdPlayLesson } from 'react-icons/md'
import { TbActivity } from 'react-icons/tb'
import { MainContext } from '../../../contexts/main'

export const Overview = ({ pendingActivities }) => {
  const { isOpen, setIsOpen } = useContext(MainContext)
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const d = new Date()
  return (
    <section
      className={`${
        isOpen ? 'px-6' : 'px-32'
      } flex flex-col gap-14 pt-10 transition-all duration-300 `}
    >
      <div className="flex flex-wrap justify-between">
        <div className="flex h-52 w-60 flex-col rounded-md bg-gradient-to-br from-blue-600 to-blue-900 drop-shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer">
          <div className="flex items-center gap-2 px-4 pt-5 ">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-100 bg-opacity-50">
              <FaUser />
            </div>
            <h1 className="mt-1 font-raj font-bold">Users</h1>
          </div>
          <p className="flex h-full w-full items-center justify-center pb-10 text-7xl font-bold">
            1
          </p>
        </div>
        <div className="flex h-52 w-60 flex-col rounded-md bg-gradient-to-br from-primary to-orange-500 drop-shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer">
          <span className="flex items-center gap-2 px-4 pt-5 ">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-100 bg-opacity-50">
              <MdPlayLesson className="text-xl" />
            </div>
            <h1 className="mt-1 font-raj font-bold">Courses</h1>
          </span>
          <p className="flex h-full w-full items-center justify-center pb-10 text-7xl font-bold">
            0
          </p>
        </div>
        <div
          className={`${
            pendingActivities == 0
              ? 'from-green-600 to-green-900'
              : 'from-red-600 to-red-900'
          }  flex h-52 w-60 flex-col rounded-md bg-gradient-to-br  drop-shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer`}
        >
          <span className="flex items-center gap-2 px-4 pt-5 ">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-100 bg-opacity-50">
              <TbActivity className="text-xl" />
            </div>
            <h1 className="mt-1 font-raj font-bold">Pending activities</h1>
          </span>
          <p className="flex h-full w-full items-center justify-center pb-10 text-7xl font-bold">
            0
          </p>
        </div>
        <div className="flex h-52 w-60 flex-col rounded-md bg-gradient-to-br from-neutral-600 to-neutral-900 drop-shadow-xl transition-all duration-300  hover:scale-105 hover:cursor-pointer">
          <div className="flex h-full w-full flex-col items-center justify-center  text-4xl font-bold">
            <Stat className="-mt-6 flex h-full w-full flex-row items-center justify-center ">
              <StatArrow className="text-green-600 " type="increase" />
              <a className="font-raj font-medium">R$ 0,00</a>
            </Stat>
          </div>
          <div className="-mt-24 flex justify-center font-raj font-bold uppercase">
            {monthNames[d.getMonth()]}
          </div>
        </div>
      </div>
      <div>
        <h1 className="ml-10 text-2xl font-medium">Total access</h1>
      </div>
      <div id="main" className="h-[30rem] "></div>
    </section>
  )
}
