import { Navbar } from "../components/Navbar";
import { SeasonalGrid } from "../components/SeasonalGrid";

export const Lessons = () => {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      <Navbar />

      <div className="relative h-screen">
        <SeasonalGrid />
      </div>
    </div>
  );
};
