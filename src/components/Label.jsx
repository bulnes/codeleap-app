export const LabelStyles = {
  DEFAULT: 'text-base font-normal text-black block',
}

export default function Label({ text, htmlFor, type, ...otherProps}) {
  const labelStyle = type || LabelStyles.DEFAULT

  return (
    <label htmlFor={htmlFor} className={labelStyle} {...otherProps}>
      {text}
    </label>
  )
}