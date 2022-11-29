import { Avatar } from '@chakra-ui/react'
import Link from 'next/link'

export const RightSidebarRecents = () => {
  return (
    <section className="flex flex-col gap-2">
      <h1 className="mb-4 font-medium ">Recent activities</h1>
      <button className="flex h-14 w-full items-center gap-2 rounded-md px-2   hover:cursor-pointer hover:bg-neutral-900">
        <Avatar src="" className="h-10 w-10 rounded-full   bg-neutral-800" />
        <p className=" w-64 overflow-hidden truncate text-ellipsis  text-xs ">
          <strong>Lucas Laurentino</strong> published a new course.
        </p>
      </button>
      <button className="flex h-14 w-full items-center gap-2 rounded-md px-2   hover:cursor-pointer hover:bg-neutral-900">
        <Avatar src="" className="h-10 w-10 rounded-full bg-neutral-800" />
        <p className="  w-64  overflow-hidden truncate text-ellipsis  text-xs ">
          <strong>Lucas Laurentino</strong> published a new course.
        </p>
      </button>
      <button className="flex h-14 w-full items-center gap-2 rounded-md px-2   hover:cursor-pointer hover:bg-neutral-900">
        <Avatar src="" className="h-10 w-10 rounded-full bg-neutral-800" />
        <p className="  w-64  overflow-hidden truncate  text-ellipsis  text-xs ">
          <strong>Lucas Laurentino</strong> published a new course.
        </p>
      </button>
      <button className="flex h-14 w-full items-center gap-2 rounded-md px-2   hover:cursor-pointer hover:bg-neutral-900">
        <Avatar src="" className="h-10 w-10 rounded-full bg-neutral-800" />
        <p className="  w-64  overflow-hidden truncate text-ellipsis  text-xs ">
          <strong>Lucas Laurentino</strong> published a new course.
        </p>
      </button>
      <div className="flex w-full justify-end ">
        <Link href="" className="text-xs text-primary hover:opacity-80">
          See all
        </Link>
      </div>
    </section>
  )
}
