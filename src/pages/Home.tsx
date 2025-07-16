import { Background } from "../components/Background";
import { NotebookPaper } from "../components/Notebook";
import { Navbar } from "../components/Navbar";
import { AnimatedIntro } from "../components/AnimatedIntro";

export const Home = () => {
  return (
    <div className="relative z-10 w-full h-screen ">
      <Background />
      <Navbar/>
      <NotebookPaper> 
        <AnimatedIntro />
      </NotebookPaper>
    </div>
  );
};
