import Card from "./Card";
import Pill from "./Pill";

interface ExperienceProps {
  id: number;
  title: string;
  desc: string;
  period: string;
  tags: string[];
}

export function Experience({ id, title, desc, period, tags }: ExperienceProps) {
  return (
    <Card>
      <div className="flex">
        <div className="w-1/3 text-sm p-2">{period}</div>
        <div className="w-2/3">
          <h1 className="text-foreground-secondary font-bold group-hover:text-accent transition-colors duration-300">
            {title}
          </h1>
          <p className="mt-2">{desc}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((t, i) => (
                <Pill key={`${id}-${i}`}>{t}</Pill>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
