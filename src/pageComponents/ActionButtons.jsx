export default function ActionButtons({ children }) {
  return (
    <div className='w-full flex flex-row justify-end gap-4'>
      {children}
    </div>
  )
}