import { Plane, BookOpen, Users, Info } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="absolute top-[130px] left-0 z-50 w-full">
      <button
        onClick={() => navigate("/")}
        className="fixed top-[70px] left-[95px] z-50 bg-[#1234A7] hover:bg-[#43A324] transition-colors duration-300 text-white rounded-full p-3 shadow-md"
      >
        <FaHome className="text-xl" />
      </button>

      <div className="hidden md:flex justify-center gap-26">
        <Link to="/trips" className="btn rounded-full bg-[#73B8E5] text-white border-none min-h-[85px] px-17 text-3xl font-bold shadow-md hover:brightness-110">
          Trips
        </Link>

        <Link to="/lessons" className="btn rounded-full bg-[#F362AF] text-white border-none min-h-[85px] px-17 text-3xl font-bold shadow-md hover:brightness-110">
          Lessons
        </Link>

        <Link to="/eboard" className="btn rounded-full bg-[#A0DB6C] text-white border-none min-h-[85px] px-17 text-3xl font-bold shadow-md hover:brightness-110">
          E-Board
        </Link>

        <Link to="/about" className="btn rounded-full bg-[#FFBA3D] text-white border-none min-h-[85px] px-17 text-3xl font-bold shadow-md hover:brightness-110">
          About
        </Link>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex w-[275px] items-center justify-center md:hidden z-50">
        <ul className="menu menu-horizontal shadow-md rounded-box gap-4">
          <li>
            <Link to="/" className="bg-blue-800 text-white rounded-full p-2 hover:brightness-110">
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