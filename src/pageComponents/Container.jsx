export default function Container({ children }) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-300">
      {children}
    </div>
  )
}