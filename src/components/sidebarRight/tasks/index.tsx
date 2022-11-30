import { Task } from './task'

export const RightSidebarTasks = () => {
  return (
    <section className="h-96">
      <h1 className="mb-4 font-medium ">Tasks of the day</h1>
      <div
        id="tasksContainer"
        className="flex h-[25.1rem] flex-col gap-2 overflow-scroll pt-2 pl-1 pb-10"
      >
        <div className="absolute z-10 -mt-5 -ml-5 h-14 w-full bg-gradient-to-b from-dark to-transparent drop-shadow-2xl " />
        <div className="absolute bottom-0 z-10 -ml-5  h-10 w-full bg-gradient-to-t from-dark to-transparent drop-shadow-2xl " />
        <Task priority="high" />
        <Task priority="high" />
        <Task priority="medium" />
        <Task priority="low" />
        <Task priority="low" />
        <Task priority="low" />
      </div>
    </section>
  )
}
