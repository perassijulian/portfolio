import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import ProjectsSection from "./ProjectsSection";
import TechStackSection from "./TechStackSection";

export default function ContentPanel() {
  return (
    <div className="md:px-10 md:py-20 px-2 w-full space-y-32">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <Footer />
    </div>
  );
}
