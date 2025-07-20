import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import flower1 from "../assets/flower1.png";
import flower2 from "../assets/flower2.png";
import leaf1 from "../assets/leaf1.png";
import nut1 from "../assets/nut1.png";

interface SlideData {
  id: string;
  title: string;
  slideUrl: string;
}

const springLessons: SlideData[] = [
  {
    id: "spring-1",
    title: "Spring Flowers & Growth",
    slideUrl: "https://docs.google.com/presentation/d/1ABC123/edit",
  },
  {
    id: "spring-2",
    title: "Weather Patterns",
    slideUrl: "https://docs.google.com/presentation/d/1DEF456/edit",
  },
  {
    id: "spring-3",
    title: "Baby Animals",
    slideUrl: "https://docs.google.com/presentation/d/1GHI789/edit",
  },
  {
    id: "spring-4",
    title: "Garden Planning",
    slideUrl: "https://docs.google.com/presentation/d/1JKL012/edit",
  },
  {
    id: "spring-5",
    title: "Rain Cycle",
    slideUrl: "https://docs.google.com/presentation/d/1MNO345/edit",
  },
  {
    id: "spring-6",
    title: "Spring Activities",
    slideUrl: "https://docs.google.com/presentation/d/1PQR678/edit",
  },
];

const fallLessons: SlideData[] = [
  {
    id: "fall-1",
    title: "Autumn Leaves",
    slideUrl: "https://docs.google.com/presentation/d/1STU901/edit",
  },
  {
    id: "fall-2",
    title: "Harvest Time",
    slideUrl: "https://docs.google.com/presentation/d/1VWX234/edit",
  },
  {
    id: "fall-3",
    title: "Migration Patterns",
    slideUrl: "https://docs.google.com/presentation/d/1YZA567/edit",
  },
  {
    id: "fall-4",
    title: "Weather Changes",
    slideUrl: "https://docs.google.com/presentation/d/1BCD890/edit",
  },
  {
    id: "fall-5",
    title: "Thanksgiving Science",
    slideUrl: "https://docs.google.com/presentation/d/1EFG123/edit",
  },
  {
    id: "fall-6",
    title: "Preparing for Winter",
    slideUrl: "https://docs.google.com/presentation/d/1HIJ456/edit",
  },
];

export const SeasonalGrid = () => {
  const [activeTab, setActiveTab] = useState<"spring" | "fall">("spring");
  const [cardsVisible, setCardsVisible] = useState(true);

  const currentLessons = activeTab === "spring" ? springLessons : fallLessons;

  const handleSlideClick = (slideUrl: string) => {
    window.open(slideUrl, "_blank", "noopener,noreferrer");
  };

  const handleTabChange = (tab: "spring" | "fall") => {
    setCardsVisible(false);
    setActiveTab(tab);
    setTimeout(() => setCardsVisible(true), 700);
  };

  return (
    <div className="relative max-w-5xl mx-auto w-full mt-24">
      <AnimatePresence mode="wait">
        {activeTab === "spring" && (
          <motion.div key="spring">
            {[flower1, flower1, flower1, flower2].map((src, idx) => {
              const positions = [
                { top: "-30px", left: "-100px", width: "120px" },
                { top: "10px", right: "-48px", width: "100px" },
                { bottom: "-64px", left: "450px", width: "100px" },
                { bottom: "10px", right: "-48px", width: "100px" },
              ];
              return (
                <motion.img
                  key={`spring-${idx}`}
                  src={src}
                  alt="Spring Flower"
                  className="absolute h-auto pointer-events-none select-none z-50"
                  style={positions[idx]}
                  initial={{ opacity: 0, scale: 0, rotate: 90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0, rotate: 90 }}
                  transition={{
                    type: "tween",
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </motion.div>
        )}

        {activeTab === "fall" && (
          <motion.div key="fall">
            {[leaf1, leaf1, leaf1, nut1, nut1].map((src, idx) => {
              const positions = [
                { top: "-30px", left: "-100px", width: "120px" },
                { top: "10px", right: "-30px", width: "100px" },
                { bottom: "-20px", left: "-64px", width: "120px" },
                { bottom: "-20px", right: "-64px", width: "100px" },
                { bottom: "-30px", right: "8px", width: "90px", scaleX: -1 },
              ];

              const rotation = [-30, -15, -45, -20, -25][idx]; 

              return (
                <motion.img
                  key={`fall-${idx}`}
                  src={src}
                  alt="Fall Decor"
                  className="absolute h-auto pointer-events-none select-none z-50"
                  style={positions[idx]}
                  initial={{
                    y: -200,
                    opacity: 0,
                    scale: 0.8,
                    rotate: rotation,
                  }}
                  animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ y: -200, opacity: 0, scale: 0.8, rotate: rotation }}
                  transition={{
                    type: "tween",
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tab Buttons */}
      <div className="flex relative z-10">
        <motion.button
          onClick={() => handleTabChange("spring")}
          className={`
            px-12 py-4 font-medium text-lg rounded-t-[18px] transition-all duration-300 relative z-20
            border border-black text-black font-[Pangolin]
            ${
              activeTab === "spring"
                ? "bg-white border-b-transparent"
                : "bg-[#f5f5f5] border-b-black"
            }
          `}
        >
          Spring
        </motion.button>
        <motion.button
          onClick={() => handleTabChange("fall")}
          className={`
            px-12 py-4 font-medium text-lg rounded-t-[18px] transition-all duration-300 relative z-20
            border border-black border-l-0 text-black font-[Pangolin]
            ${
              activeTab === "fall"
                ? "bg-white border-b-transparent"
                : "bg-[#f5f5f5] border-b-black"
            }
          `}
        >
          Fall
        </motion.button>
        <div className="flex-1 border-b border-black z-10" />
      </div>

      {/* Slide Cards */}
      <motion.div
        layout
        className="bg-white border border-black rounded-b-lg border-t-0 p-6 z-10"
        transition={{
          layout: { type: "tween", duration: 0.7, ease: "easeInOut" },
        }}
      >
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {currentLessons.map((lesson, index) => (
            <motion.div
              key={lesson.id + activeTab}
              layout
              initial={false}
              animate={{
                opacity: cardsVisible ? 1 : 0,
                y: cardsVisible ? 0 : 50,
              }}
              transition={{
                delay: cardsVisible ? 0.1 + index * 0.05 : 0,
                duration: 0.45,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSlideClick(lesson.slideUrl)}
              className="cursor-pointer"
            >
              <div
                className={`h-46 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg
                  ${
                    activeTab === "spring"
                      ? "bg-blue-100 hover:bg-blue-200"
                      : "bg-orange-100 hover:bg-orange-200"
                  }
                `}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
