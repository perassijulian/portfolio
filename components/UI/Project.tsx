import Image from "next/image";
import Card from "./Card";
import Pill from "./Pill";

interface ProjectProps {
  id: number;
  title: string;
  desc: string;
  img: string;
  alt: string;
  demo?: string;
  github: string;
  tags: string[];
}

export default function Project({
  id,
  title,
  desc,
  img,
  alt,
  demo = "",
  github,
  tags,
}: ProjectProps) {
  return (
    <Card>
      <div className="flex items-center mt-4 gap-4 md:flex-row flex-col-reverse">
        <div className="md:w-1/3">
          <Image
            className="rounded-lg border"
            src={img}
            alt={alt}
            width={800}
            height={600}
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-foreground-secondary font-bold group-hover:text-accent transition-colors duration-300">
            {title}
          </h1>
          <p className="mt-4 text-justify">{desc}</p>
          <div className="flex gap-2 mt-4">
            {tags.map((tag, i) => (
              <Pill key={`${id}-${i}`}>{tag}</Pill>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
