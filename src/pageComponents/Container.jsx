export default function Container({ children }) {
  return (
    <div className="min-w-full min-h-full flex flex-col items-center justify-center bg-gray-300 overflow-y-hidden overflow-x-auto py-0 md:py-14">
      {children}
    </div>
  )
}