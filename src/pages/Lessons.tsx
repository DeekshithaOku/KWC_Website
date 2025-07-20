import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { SeasonalGrid } from "../components/SeasonalGrid";

export const Lessons = () => {

  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      <Background />
      <Navbar />

      <div className="relative z-10 p-10 flex justify-center">
        <SeasonalGrid />
      </div>
    </div>
  );
};
