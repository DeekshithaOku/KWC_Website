import { Background } from "../components/Background";
import { NotebookPaper } from "../components/Notebook";
import { Navbar } from "../components/Navbar";

export const About = () => {
  return (
    <div className="relative z-10 w-full h-screen ">
      <Background />
      <Navbar/>
      <NotebookPaper> 
        <div>
        </div>
      </NotebookPaper>
    </div>
  );
};