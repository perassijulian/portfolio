import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import TechStackSection from "./TechStackSection";

export default function ContentPanel() {
  return (
    <div className="px-10 py-20">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
    </div>
  );
}
