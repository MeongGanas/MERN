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
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            type="button"
            className=" mr-5 transition duration-300 ease-in-out hover:ring-2 focus:outline-none hover:ring-blue-800 focus:ring-2 focus:ring-blue-400 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="text-white transition duration-150 ease-in-out bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
