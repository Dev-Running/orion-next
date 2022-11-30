import { useContext, useState } from 'react'
import Calendar from 'react-calendar'
import { MainContext } from '../../../contexts/main'
export const CalendarMain = () => {
  const { isOpen, close, opening, section } = useContext(MainContext)
  const [value, onChange] = useState(new Date())
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
      <Calendar
        className=" text-neutral-900"
        onChange={onChange}
        value={value}
        selectRange
      />
    </section>
  )
}
