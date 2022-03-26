export default function Card({ children }) {
  return (
    <div className='border border-solid border-black py-8 px-7 bg-white w-full max-w-lg mx-auto'>
      {children}
    </div>
  )
}