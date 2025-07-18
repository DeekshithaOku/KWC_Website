import { useState } from "react";
import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { TripsNotebook } from "../components/TripsNotebook";
import { TripsTabs } from "../components/TripsTabs";
import { CalendarTab } from "../components/Calender";
import { SignUp } from "../components/Signup";
import { Attendance } from "../components/Attendence";
import { ServiceHours } from "../components/ServiceHours";

const tabComponents: any = {
  "Calendar": <CalendarTab />,
  "Sign up": <SignUp />,
  "Service Hours": <ServiceHours/>,
  "Attendance": <Attendance />,
};

const tabColors: Record<string, string> = {
  "Calendar": "#1967D2",
  "Sign up": "#D8B4FE",
  "Service Hours": "#86EFAC",
  "Attendance": "#FACC15",
};

export const Trips = () => {
  const [activeTab, setActiveTab] = useState("Calendar");

  return (
    <div className="relative w-full h-screen">
      <Background />
      <Navbar />
      <TripsNotebook color={tabColors[activeTab]}>
        <TripsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {tabComponents[activeTab]}
      </TripsNotebook>
    </div>
  );
};
