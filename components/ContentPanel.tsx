import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import TechStackSection from "./TechStackSection";

export default function ContentPanel() {
  return (
    <div className="md:px-10 md:py-20 px-4 w-full">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
    </div>
  );
}
