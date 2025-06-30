import { experienceData } from "@/data/experience";
import { Experience } from "./UI/Experience";

export default function ExperienceSection() {
  return (
    <section id="experience">
      <ul className="space-y-6">
        {experienceData.map(({ id, title, desc, period, tags }) => (
          <li key={id}>
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
