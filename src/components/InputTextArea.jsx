export default function InputTextArea(props) {
  return (
    <textarea rows={'4'} className='block w-full py-1 px-3 text-sm font-normal placeholder:text-gray-400 rounded border border-black mb-4' {...props}></textarea>
  )
}