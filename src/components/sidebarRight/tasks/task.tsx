import { useState } from 'react'
import { BsCheck } from 'react-icons/bs'

export const Task = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div
      className={` ${
        checked ? ' bg-green-500' : '   bg-yellow-500'
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
