import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Trips } from "./pages/Trips";
import { Lessons } from "./pages/Lessons";
import { Eboard } from "./pages/Eboard";
import { About } from "./pages/About";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/eboard" element={<Eboard />} />
        <Route path="/about" element={<About />} />
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
