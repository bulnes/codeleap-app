export const ButtonStyles = {
  DEFAULT: {
    buttonStyle: 'w-28 h-8 border border-solid border-black text-center bg-white capitalize',
    labelStyle: 'font-bold text-base text-black',
  },
  CONTRAST: {
    buttonStyle: 'w-28 h-8 border border-solid border-black text-center bg-black',
    labelStyle: 'font-bold text-base text-white uppercase',
  }
}

export const ButtonIconsTypes = {
  EDIT: '/icons/edit.png',
  DELETE: '/icons/delete.png'
}

export function ButtonIcon({ text, type, ...otherProps}) {
  const buttonIcon = process.env.PUBLIC_URL + type

  return (
    <button className='border-none flex items-center justify-center' {...otherProps}>
      <img src={buttonIcon} alt={text} title={text} width='30' height='30' loading='lazy' />
    </button>
  )
}

export default function Button({ text, type, ...otherProps}) {
  const { buttonStyle, labelStyle } = type || ButtonStyles.DEFAULT

  return (
    <button className={buttonStyle} {...otherProps}>
      <span className={labelStyle}>{text}</span>
    </button>
  )
}