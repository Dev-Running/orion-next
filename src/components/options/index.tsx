import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillTags } from 'react-icons/ai'
import { FaUserCog } from 'react-icons/fa'
import { MdPlayLesson } from 'react-icons/md'
import { TfiWrite } from 'react-icons/tfi'
export const OptionsDashboard = () => {
  const { push } = useRouter()
  return (
    <section className="w-full z-50 flex justify-evenly items-center gap-10  gap-y-24  flex-wrap">
      <Link href="/dashboard/courses">
        <div className="h-52 group w-72 rounded-sm    hover:cursor-pointer  transition-all hover:-translate-y-2 duration-300 flex flex-col justify-center items-center">
          <MdPlayLesson className="text-dark text-7xl group-hover:text-primary transition-colors" />
          <h1 className="text-dark group-hover:text-[#222222] text-sm font-medium mt-4">
            GERENCIAR <b>CURSOS</b>
          </h1>
        </div>
      </Link>
      <Link href="/dashboard/posts">
        <div className="h-52 group w-72 rounded-sm    hover:cursor-pointer  transition-all hover:-translate-y-2 duration-300 flex flex-col justify-center items-center">
          <TfiWrite className="text-dark text-7xl group-hover:text-primary transition-colors" />
          <h1 className="text-dark group-hover:text-[#222222] text-sm font-medium mt-4">
            GERENCIAR <b>POSTAGENS</b>
          </h1>
        </div>
      </Link>
      <Link href="/dashboard/tags">
        <div className="h-52 group w-72 rounded-sm    hover:cursor-pointer  transition-all hover:-translate-y-2 duration-300 flex flex-col justify-center items-center">
          <AiFillTags className="text-dark  text-7xl group-hover:text-primary transition-colors" />
          <h1 className="text-dark group-hover:text-[#222222] text-sm font-medium mt-4">
            GERENCIAR <b>TAGS</b>
          </h1>
        </div>
      </Link>
      <Link href="/dashboard/orion">
        <div className="h-52 group w-72 rounded-sm    hover:cursor-pointer  transition-all hover:-translate-y-2 duration-300 flex flex-col justify-center items-center">
          <FaUserCog className="text-dark  text-7xl group-hover:text-primary transition-colors" />
          <h1 className="text-dark group-hover:text-[#222222] text-sm font-medium mt-4">
            GERENCIAR <b>ORION</b>
          </h1>
        </div>
      </Link>
    </section>
  )
}
