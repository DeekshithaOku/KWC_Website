import { type ReactNode } from "react";

interface HangingBoardProps {
  boardType: "white" | "green";
  icons: ReactNode[];
  index: number;
}

export const HangingBoard = ({ boardType, icons, index }: HangingBoardProps) => {
  const isWhite = boardType === "white";
  const rotateClass = index % 2 === 0 ? "-rotate-[5deg]" : "rotate-[5deg]";
  const sideMargin = isWhite ? "md:mr-36" : "md:ml-36"; 
  const borderColor = isWhite ? "border-gray-300" : "border-yellow-800";
  const bgColor = isWhite ? "bg-white" : "bg-green-800";

  return (
    <div className={`relative w-full flex justify-center h-[280px] md:h-[330px] ${sideMargin}`}>
      <div className={`relative mt-6 w-[250px] h-[160px] md:w-[350px] md:h-[250px] ${rotateClass}`}>
        <div className="absolute -top-17 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-2 h-2 rounded-full bg-red-600 mx-auto" />
          <svg
            className="absolute left-1/2 transform -translate-x-1/2"
            width="100"
            height="60"
            viewBox="0 0 100 60"
          >
            <line x1="50" y1="0" x2="10" y2="60" stroke="#333" strokeWidth="2" />
            <line x1="50" y1="0" x2="90" y2="60" stroke="#333" strokeWidth="2" />
          </svg>
        </div>

        <div className={`w-full h-full rounded-md shadow-lg border-4 ${bgColor} ${borderColor}`}>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 md:space-x-4">
            {icons.map((Icon, idx) => (
              <div
                key={idx}
                className={`w-5 h-5 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md`}
              >
                {Icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
