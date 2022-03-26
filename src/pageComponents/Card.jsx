export const CardStyles = {
  DEFAULT: 'max-w-lg',
  LARGE: 'max-w-3xl'
}

export const CardHeaderStyles = {
  DEFAULT: 'w-full bg-black h-20 px-9 flex items-center justify-between',
  SIMPLE: 'w-full flex items-center justify-between py-8 px-7 pb-0'
}

export function CardHeader({ type, children }) {
  const headerStyles = type || CardHeaderStyles.DEFAULT

  return (
    <header className={headerStyles}>
      {children}
    </header>
  )
}

export function CardBody({ children }) {
  return (
    <main className='py-8 px-7 w-full'>
      {children}
    </main>
  )
}

export default function Card({ type, children }) {
  const styleType = type || CardStyles.DEFAULT

  return (
    <div className={`border border-solid border-black bg-white w-full mx-auto ${styleType}`}>
      {children}
    </div>
  )
}