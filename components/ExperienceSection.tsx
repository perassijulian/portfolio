import { experienceData } from "@/data/experience";
import { Experience } from "./UI/Experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative group/list">
      <ul className="space-y-6">
        {experienceData.map(({ id, title, desc, period, tags }) => (
          <li
            key={id}
            className="group/item transition duration-300 group-hover/list:opacity-40 hover:!opacity-100"
          >
            <Experience
              id={id}
              title={title}
              desc={desc}
              period={period}
              tags={tags}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
