import Image from "next/image";
import Card from "./Card";
import Pill from "./Pill";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
  id: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  tags: string[];
}

export default function Project({
  id,
  title,
  desc,
  img,
  alt,
  tags,
}: ProjectProps) {
  return (
    <Card>
      <Link href={`/project/${id}`}>
        <div className="flex items-center mt-4 gap-4 md:flex-row flex-col-reverse">
          <div className="w-full md:w-1/3">
            <Image
              className="rounded-lg border w-full h-auto"
              src={img}
              alt={alt}
              width={800}
              height={600}
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-foreground-secondary font-bold group-hover:text-accent transition-colors duration-300">
              {title}
              <ArrowUpRight
                size={15}
                className="inline-block ml-1 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
              />
            </h1>
            <p className="mt-4 text-justify">{desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, i) => (
                <Pill tagKey={`${id}-${i}`} key={`${id}-${i}`}>
                  {tag}
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}
