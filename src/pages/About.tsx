import { NotebookPaper } from "../components/PageLayout";
import { AboutPageContent } from "../components/AboutPageContent";
import { PageLayout } from "../components/PageLayout";

export const About = () => {
  return (
    <PageLayout>
      <NotebookPaper>
        <AboutPageContent />
      </NotebookPaper>
    </PageLayout>
  );
};