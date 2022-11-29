import { Avatar, AvatarGroup } from '@chakra-ui/react'
import Link from 'next/link'

export const RightSidebarManagers = () => {
  return (
    <section>
      <h1 className="mb-4 font-medium ">Managers</h1>
      <AvatarGroup size="md" max={7} color="#212121" borderColor="#212121">
        <Avatar
          src=""
          className="transition-all duration-300  hover:-translate-y-2"
        />
        <Avatar
          src=""
          className="transition-all duration-300  hover:-translate-y-2"
        />
        <Avatar
          src=""
          className="transition-all duration-300  hover:-translate-y-2"
        />
        <Avatar
          src=""
          className="transition-all duration-300  hover:-translate-y-2"
        />
        <Avatar
          src=""
          className="transition-all duration-300  hover:-translate-y-2"
        />
        <Avatar
          src=""
          className="transition-all duration-300  hover:-translate-y-2"
        />
        <Avatar
          src=""
          className="transition-all duration-300  hover:-translate-y-2"
        />
        <Avatar
          src=""
          className="transition-all duration-300  hover:-translate-y-2"
        />
        <Avatar
          src=""
          className="transition-all duration-300  hover:-translate-y-2"
        />
      </AvatarGroup>
      <div className="mt-4 flex w-full justify-end">
        <Link href="" className="text-xs text-primary hover:opacity-80">
          See all
        </Link>
      </div>
    </section>
  )
}
