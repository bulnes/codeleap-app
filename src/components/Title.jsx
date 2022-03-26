export default function Title({ text, ...otherProps }) {
  return (
    <h1 className="font-bold text-2xl mb-8" {...otherProps}>
      {text}
    </h1>
  )
}