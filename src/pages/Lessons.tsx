import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { SeasonGrid } from "../components/SeasonalGrid";

export const Lessons = () => {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      <Background />
      <Navbar />
      <div className="relative z-10 p-6 flex justify-center">
        <SeasonGrid />
      </div>
    </div>
  );
};
