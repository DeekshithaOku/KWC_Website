import { Navbar } from "./Navbar";
import DefaultBackground from "../assets/Default Background.png";
import NotebookBackground from "../assets/Notebook.png";

export const NotebookPaper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative z-10 mx-auto max-w-[1350px]"
      style={{
        backgroundImage: `url(${NotebookBackground})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
      }}
    >
      <div className="pt-48 px-24 pb-32 min-h-screen">{children}</div>
    </div>
  );
};

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-top bg-fixed"
      style={{
        backgroundImage: `url(${DefaultBackground})`,
      }}
    >
      <Navbar />
      <NotebookPaper>{children}</NotebookPaper>
    </div>
  );
};