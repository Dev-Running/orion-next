import { Task } from './task'

export const RightSidebarTasks = () => {
  return (
    <section className="">
      <h1 className="mb-4 font-medium ">Tasks</h1>
      <div className="flex h-full flex-col gap-2 overflow-hidden">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </section>
  )
}
