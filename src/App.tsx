import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Trips } from "./pages/Trips";
import { FaHome } from "react-icons/fa";
import { Lessons } from "./pages/Lessons";

function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate("/")}
      className="hidden md:block fixed md:top-15 md:left-16 z-50 bg-[#1234A7] hover:bg-[#43A324] transition-colors duration-300 text-black rounded-full p-2 shadow-md"
    >
      <FaHome className="text-xl text-white" />
    </button>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <BackButton />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path = "/lessons" element = {<Lessons />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
