import { NotebookPaper } from "../components/Notebook";
import { Navbar } from "../components/Navbar";
import { AboutPageContent } from "../components/AboutPageContent";

export const About = () => {
  return (
    <div className="relative z-10 w-full h-screen ">
      <Navbar />
      <NotebookPaper>
        <AboutPageContent />
      </NotebookPaper>
    </div>
  );
};
