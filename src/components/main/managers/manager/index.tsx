import { Avatar } from '@chakra-ui/react'

export const ManagerLI = () => {
  return (
    <li className="mb-4 flex h-16 w-full items-center justify-between px-10 text-sm font-medium hover:cursor-pointer hover:bg-dark/20">
      <Avatar className="flex w-48 items-center justify-start" />
      <span className="flex w-40 items-center justify-start">
        Lucas Laurentino
      </span>
      <span className="flex w-48 items-center justify-start">
        laurentino14@outlook.com
      </span>
      <span className="flex w-40  items-center justify-start ">
        Software Engineer
      </span>
      <span className="flex w-20 items-center justify-start">
        {new Date().getDay() +
          '/' +
          new Date().getMonth() +
          '/' +
          new Date().getFullYear()}
      </span>
    </li>
  )
}
