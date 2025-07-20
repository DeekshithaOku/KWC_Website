import { Plane, BookOpen, Users, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="absolute top-12 left-1/2 transform -translate-x-1/2 z-40 w-full">
      {/* Large Screen Buttons */}
      <div className="relative hidden md:flex justify-center gap-8">
        <button
          onClick={() => navigate("/")}
          className="hidden md:block fixed top-2 left-24 z-50 bg-[#1234A7] hover:bg-[#43A324] transition-colors duration-300 text-black rounded-full p-2 shadow-md"
        >
          <FaHome className="text-xl text-white" />
      </button>
        <Link to="/trips" className="btn btn-md md:btn-lg rounded-full bg-sky-400 text-white border-none hover:brightness-110">
          Trips
        </Link>
        <Link to="/lessons" className="btn btn-md md:btn-lg rounded-full bg-pink-400 text-white border-none hover:brightness-110">
          Lessons
        </Link>
        <Link to="/eboard" className="btn btn-md md:btn-lg rounded-full bg-lime-400 text-white border-none hover:brightness-110">
          E-Board
        </Link>
        <Link to="/about" className="btn btn-md md:btn-lg rounded-full bg-amber-400 text-white border-none hover:brightness-110">
          About
        </Link>
      </div>
    <div className="absolute left-1/2 transform -translate-x-1/2 flex w-[275px] items-center justify-center md:hidden z-50 ">
  <ul className="menu menu-horizontal shadow-md rounded-box gap-4">
            <li>
                <Link
                  to="/" className="bg-blue-800 text-white rounded-full p-2 hover:brightness-110"
                >
                  <FaHome className="h-5 w-5" />
                </Link>
          </li>
            <li>
                <Link to="/trips" className="bg-sky-400 text-white rounded-full p-2 hover:brightness-110">
                <Plane className="h-5 w-5" />
                </Link>
            </li>
            <li>
                <Link to="/lessons" className="bg-pink-400 text-white rounded-full p-2 hover:brightness-110">
                <BookOpen className="h-5 w-5" />
                </Link>
            </li>
            <li>
                <Link to="/eboard" className="bg-lime-400 text-white rounded-full p-2 hover:brightness-110">
                <Users className="h-5 w-5" />
                </Link>
            </li>
            <li>
                <Link to="/about" className="bg-amber-400 text-white rounded-full p-2 hover:brightness-110">
                <Info className="h-5 w-5" />
                </Link>
            </li>
      </ul>
      </div>
    </nav>
  );
};
