export const Header = () => {
  return (
    <header className="w-full h-20 flex justify-between px-28 items-center text-dark">
      <div className="font-raj font-bold text-3xl text-dark">ORION</div>
      <div className="flex gap-10">
        <div className="flex flex-col">
          <h2 className="text-sm font-medium">Lucas Laurentino</h2>
          <p className="text-xs font-medium">Manager</p>
        </div>
        <button className="align-middle  w-auto h-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}
