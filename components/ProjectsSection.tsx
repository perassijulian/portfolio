import { projectsData } from "@/data/projects";
import Project from "./UI/Project";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative group/list">
      {projectsData.map((p) => {
        return (
          <div
            key={p.id}
            className="group/item transition duration-300 group-hover/list:opacity-40 hover:!opacity-100"
          >
            <Project
              id={p.id}
              title={p.title}
              desc={p.desc}
              img={p.img}
              alt={p.alt}
              demo={p.demo}
              github={p.github}
              tags={p.tags}
            />
          </div>
        );
      })}
    </section>
  );
}
