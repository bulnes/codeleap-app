export const TitleStyles = {
  DEFAULT: 'font-bold text-2xl',
  CONTRAST: 'font-bold text-2xl text-white'
}

export default function Title({ text, type, ...otherProps }) {
  const titleStyle = type || TitleStyles.DEFAULT

  return (
    <h1 className={titleStyle} {...otherProps}>
      {text}
    </h1>
  )
}