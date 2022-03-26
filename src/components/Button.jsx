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

export default function Button(props) {
  const { text, type, ...otherProps} = props
  const { buttonStyle, labelStyle } = type || ButtonStyles.DEFAULT

  return (
    <button className={buttonStyle} {...otherProps}>
      <span className={labelStyle}>{text}</span>
    </button>
  )
}