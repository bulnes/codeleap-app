export const LabelStyles = {
  DEFAULT: 'text-base font-normal text-black mb-3',
}

export default function Label(props) {
  const { text, htmlFor, type, ...otherProps} = props
  const labelStyle = type || LabelStyles.DEFAULT

  return (
    <label htmlFor={htmlFor} className={labelStyle} {...otherProps}>
      {text}
    </label>
  )
}