import { useState } from "react";
import flower1 from "../assets/flower1.png";
import leaf1 from "../assets/leaf1.png";
import scratchCat from "../assets/scratch.png";

const springSlides = [
  {
    title: "Spring Lesson 1",
    link: "https://docs.google.com/presentation/d/1_pJgY0qjFDN66d3AToUg2e-WziTmFeZXDoSS0_DlXuY/edit?usp=drive_link",
    previewImg: "/src/assets/previews/spring1.png",
  },
  {
    title: "Spring Lesson 1",
    link: "https://docs.google.com/presentation/d/1_pJgY0qjFDN66d3AToUg2e-WziTmFeZXDoSS0_DlXuY/edit?usp=drive_link",
    previewImg: "/src/assets/previews/spring1.png",
  },
  {
    title: "Spring Lesson 1",
    link: "https://docs.google.com/presentation/d/1_pJgY0qjFDN66d3AToUg2e-WziTmFeZXDoSS0_DlXuY/edit?usp=drive_link",
    previewImg: "/src/assets/previews/spring1.png",
  },
  {
    title: "Spring Lesson 1",
    link: "https://docs.google.com/presentation/d/1_pJgY0qjFDN66d3AToUg2e-WziTmFeZXDoSS0_DlXuY/edit?usp=drive_link",
    previewImg: "/src/assets/previews/spring1.png",
  },
];

const fallSlides = [
  {
    title: "Fall Lesson A",
    link: "https://docs.google.com/presentation/d/SLIDE_ID_2",
    previewImg: "/src/assets/previews/fall1.png",
  },
  {
    title: "Fall Lesson A",
    link: "https://docs.google.com/presentation/d/SLIDE_ID_2",
    previewImg: "/src/assets/previews/fall1.png",
  },
  {
    title: "Fall Lesson A",
    link: "https://docs.google.com/presentation/d/SLIDE_ID_2",
    previewImg: "/src/assets/previews/fall1.png",
  },
  {
    title: "Fall Lesson A",
    link: "https://docs.google.com/presentation/d/SLIDE_ID_2",
    previewImg: "/src/assets/previews/fall1.png",
  },
  {
    title: "Fall Lesson A",
    link: "https://docs.google.com/presentation/d/SLIDE_ID_2",
    previewImg: "/src/assets/previews/fall1.png",
  },
];

export const SeasonGrid = () => {
  const [season, setSeason] = useState<"spring" | "fall">("spring");

  const slides = season === "spring" ? springSlides : fallSlides;
  const decorations =
    season === "spring" ? [flower1, flower1, flower1] : [leaf1, leaf1, leaf1];

  return (
    <div className="relative w-full max-w-6xl bg-white backdrop-blur-md rounded-lg shadow-xl p-4 min-h-[500px] mt-32">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSeason("spring")}
          className={`px-6 py-2 font-semibold border-r rounded-l-md ${
            season === "spring"
              ? "bg-blue-200 text-black"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Spring
        </button>
        <button
          onClick={() => setSeason("fall")}
          className={`px-6 py-2 font-semibold rounded-r-md ${
            season === "fall"
              ? "bg-yellow-200 text-black"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Fall
        </button>
      </div>

      {decorations.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt="Decoration"
          className="absolute w-[40px] h-[40px]"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
            pointerEvents: "none",
          }}
        />
      ))}

      <img
        src={scratchCat}
        alt="Scratch"
        className="absolute bottom-2 left-2 w-[60px] pointer-events-none"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {slides.map((slide, i) => (
          <a
            key={i}
            href={slide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-100 hover:bg-blue-200 transition-all duration-300 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={slide.previewImg}
              alt={slide.title}
              className="w-full h-[150px] object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
