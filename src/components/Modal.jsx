export const ModalStyles = {
  DEFAULT: 'items-center',
  TOP: 'pt-32 items-start',
}

export default function Modal({ type, isHide=true, children }) {
  const modalStyle = type || ModalStyles.DEFAULT

  return (
    <div className={`${isHide ? 'hidden' : 'fixed flex'} top-0 left-0 right-0 bottom-0 w-full h-full z-50 bg-gray-700 bg-opacity-80 justify-center ${modalStyle}`}>
      {children}
    </div>
  )
}