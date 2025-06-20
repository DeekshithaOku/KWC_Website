import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes location={location} key={location.pathname}>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
