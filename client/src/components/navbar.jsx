import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-10 py-4 lg:px-20">
        <Link to="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            WorkoutBoy
          </span>
        </Link>
      </div>
    </nav>
  );
}
