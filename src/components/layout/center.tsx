export const LayoutCenter = ({ children }) => {
  return (
    <main className="flex w-screen flex-col justify-center items-center min-h-[calc(100vh-5rem)]">
      {children}
    </main>
  )
}
