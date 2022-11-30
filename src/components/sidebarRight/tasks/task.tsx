import { useEffect, useState } from 'react'
import { BsCheck } from 'react-icons/bs'

export const Task = ({ priority }) => {
  const [checked, setChecked] = useState(false)
  const [highTime, setHighTime] = useState(0)
  const [mediumTime, setMediumTime] = useState(0)

  useEffect(() => {
    function changeMediumTime() {
      setTimeout(() => {
        if (mediumTime === 0) {
          setMediumTime(1)
        } else {
          setMediumTime(0)
        }
      }, 5000)
    }

    changeMediumTime()
  }, [mediumTime])

  useEffect(() => {
    function changeHighTime() {
      setTimeout(() => {
        if (highTime === 0) {
          setHighTime(1)
        } else {
          setHighTime(0)
        }
      }, 10000)
    }

    changeHighTime()
  }, [highTime])

  return (
    <div
      className={` ${
        checked
          ? ' bg-green-500'
          : priority == 'high' && !checked
          ? `${
              highTime === 0 ? '' : 'animate-[pulse_.5s_ease-in-out_infinite]'
            } bg-red-500`
          : priority == 'medium'
          ? `${
              mediumTime === 0 ? '' : 'animate-[pulse_.5s_ease-in-out_infinite]'
            } bg-yellow-500`
          : 'bg-blue-500'
      } group flex w-full rounded-md transition-all duration-200 hover:cursor-pointer hover:bg-opacity-80`}
    >
      <div className="flex h-16 w-16 items-center justify-center  ">
        <button
          onClick={(e) => setChecked(!checked)}
          className="hover:bg min-w-7 flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 group-hover:bg-neutral-800"
        >
          {checked ? <BsCheck className="text-3xl" /> : ''}
        </button>
      </div>
      <div className="flex w-full items-center">
        <h1
          className={`${checked ? 'line-through' : ''} font-medium text-dark`}
        >
          Any task title
        </h1>
      </div>
    </div>
  )
}
