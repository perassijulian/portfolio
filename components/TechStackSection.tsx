import { techStack } from "@/data/techStack";
import Pill from "./UI/Pill";

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="px-2">
      <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {techStack &&
          techStack.map((s, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.stack.length > 0 &&
                  s.stack.map((element, j) => (
                    <Pill tagKey={`${i}-${j}`} key={`${i}-${j}`}>
                      {element}
                    </Pill>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
}
