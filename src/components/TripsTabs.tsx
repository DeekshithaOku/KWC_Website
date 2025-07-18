interface Tab {
  label: string;
  color: string;
}

const tabs: Tab[] = [
  { label: "Calendar", color: "#1967D2" },
  { label: "Sign up", color: "#D8B4FE" },
  { label: "Service Hours", color: "#86EFAC" },
  { label: "Attendance", color: "#FACC15" },
];

export const TripsTabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (label: string) => void;
}) => {
  return (
    <div className="absolute right-[-54.5px] z-[-2] md:right-[-74px] top-[-42.5px] md:top-[-38px] flex flex-col gap-24 md:gap-25">
      {tabs.map((tab: Tab, index: number) => {
        const isActive = activeTab === tab.label;
        return (
          <div key={index} className="relative flex flex-col items-center">
            <button
              onClick={() => setActiveTab(tab.label)}
              style={{
                backgroundColor: isActive ? `${tab.color}A6` : tab.color,
              }}
              className={`px-[5px] md:w-[100px] h-[16px] md:h-[45px] flex items-center justify-center rotate-90 rounded-t-lg`}
            >
              <span className="text-black font-medium font-[Pangolin] text-sm">
                {tab.label}
              </span>
            </button>

            
          </div>
        );
      })}
    </div>
  );
};
