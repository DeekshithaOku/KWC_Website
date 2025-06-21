import { Plane, BookOpen, Users, Info } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="absolute top-12 left-1/2 transform -translate-x-1/2 z-40 w-full">
      {/* Large Screen Buttons */}
      <div className="hidden md:flex justify-center gap-8">
        <a href="/trips" className="btn btn-md md:btn-lg rounded-full bg-sky-400 text-white border-none hover:brightness-110">
          Trips
        </a>
        <a href="/lessons" className="btn btn-md md:btn-lg rounded-full bg-pink-400 text-white border-none hover:brightness-110">
          Lessons
        </a>
        <a href="/eboard" className="btn btn-md md:btn-lg rounded-full bg-lime-400 text-white border-none hover:brightness-110">
          E-Board
        </a>
        <a href="/about" className="btn btn-md md:btn-lg rounded-full bg-amber-400 text-white border-none hover:brightness-110">
          About
        </a>
      </div>
    <div className="absolute left-1/2 transform -translate-x-1/2 flex w-[250px] items-center justify-center md:hidden z-50 ">
  <ul className="menu menu-horizontal shadow-md rounded-box gap-4">
            <li>
                <a href="/trips" className="bg-sky-400 text-white rounded-full p-2 hover:brightness-110">
                <Plane className="h-5 w-5" />
                </a>
            </li>
            <li>
                <a href="/lessons" className="bg-pink-400 text-white rounded-full p-2 hover:brightness-110">
                <BookOpen className="h-5 w-5" />
                </a>
            </li>
            <li>
                <a href="/eboard" className="bg-lime-400 text-white rounded-full p-2 hover:brightness-110">
                <Users className="h-5 w-5" />
                </a>
            </li>
            <li>
                <a href="/about" className="bg-amber-400 text-white rounded-full p-2 hover:brightness-110">
                <Info className="h-5 w-5" />
                </a>
            </li>
      </ul>
      </div>
    </nav>
  );
};
