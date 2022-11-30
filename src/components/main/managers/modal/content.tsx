import { InputText } from 'primereact/inputtext'

export const ContentModalNewManager = () => {
  return (
    <div className="w-2/3">
      <div className="flex w-full  justify-center gap-5 ">
        <span className="p-float-label ">
          <InputText
            id="in"
            className=" w-full rounded  bg-neutral-800 py-2 px-4 font-medium text-neutral-300 outline-none transition-all focus:text-white  "
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
          <label
            htmlFor="in"
            className="absolute left-2 font-medium  transition-all "
          >
            Firstname
          </label>
        </span>
        <span className="p-float-label ">
          <InputText
            id="in"
            className=" w-full rounded  bg-neutral-800 py-2 px-4 font-medium text-neutral-300 outline-none transition-all focus:text-white  "
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
          <label
            htmlFor="in"
            className="absolute left-2 font-medium  transition-all "
          >
            Lastname
          </label>
        </span>
      </div>

      <div className="mt-10">
        <span className="p-float-label ">
          <InputText
            id="in"
            keyfilter="email"
            required
            type="email"
            className=" w-full rounded  bg-neutral-800 py-2 px-4 font-medium text-neutral-300 outline-none transition-all focus:text-white  "
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
          <label
            htmlFor="in"
            className="absolute left-2 font-medium  transition-all "
          >
            E-mail
          </label>
        </span>
      </div>
    </div>
  )
}
