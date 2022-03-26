import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-9xl">
        404
      </h1>

      <p className="text-2xl mb-5">
        Page not found
      </p>

      <p className="text-base">
        <Link to={'/'} title="Go home" className="text-blue-700 border-b border-blue-700 pb-px uppercase">
          Go home
        </Link>
      </p>
    </div>
  )
}