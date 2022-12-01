import { Calendar } from 'primereact/calendar'
import { useContext, useState } from 'react'
// import Calendar from 'react-calendar'
import { ColorPicker } from 'primereact/colorpicker'
import { MainContext } from '../../../contexts/main'
export const CalendarMain = () => {
  const { isOpen, close, opening, section } = useContext(MainContext)
  const [value, onChange] = useState<Date[] | Date>(new Date())
  const [color, setColor] = useState()
  let i = new Date()
  i.setDate(29)
  let dates = [i, new Date()]

  const dt = (date) => {
    if (
      date.day === new Date().getDate() &&
      date.month === new Date().getMonth() &&
      date.year === new Date().getUTCFullYear()
    ) {
      return (
        <button
          onClick={(e) => alert('ok')}
          className="rounded-full bg-dark px-2 py-[0.4rem] font-medium"
        >
          {date.day}
        </button>
      )
    }

    return <div className="my-5">{date.day}</div>
  }
  let maxDate = new Date().setFullYear(new Date().getFullYear() + 1)
  let minDate = new Date().setFullYear(new Date().getFullYear() - 2)
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
      {/* <Calendar
        className=" text-neutral-900"
        onChange={onChange}
        value={value}
        selectRange
      /> */}

      <div className="flex h-full w-full flex-col items-center justify-center">
        <Calendar
          inline
          className="w-[60rem] rounded-md bg-neutral-800 px-6 py-6"
          panelClassName=""
          hourFormat="24"
          maxDate={new Date(maxDate)}
          minDate={new Date(minDate)}
          onSelect={(e) => console.log(e)}
          todayButtonClassName="bg-red-500 text-neutral-100"
          clearButtonClassName=""
          dateFormat="dd/mm/yy"
          yearRange={`${new Date().getFullYear() - 1}:${
            new Date().getFullYear() + 1
          }`}
          footerTemplate={() => <div>footer</div>}
          selectionMode="single"
          // value={value}
          dateTemplate={dt}
          onChange={(e) => onChange(e.value)}
        />

        <br />

        <ColorPicker
          format="hex"
          value={color}
          className=" h-10 w-10 rounded-full"
          style={{ width: '5px', height: '5px' }}
          onChange={(e) => setColor(e.value)}
        />
      </div>
    </section>
  )
}
