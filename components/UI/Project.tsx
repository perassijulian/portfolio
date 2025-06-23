import Image from "next/image";
import Card from "./Card";

interface ProjectProps {
  id: number;
  title: string;
  desc: string;
  img: string;
  alt: string;
  demo?: string;
  github: string;
}

export default function Project({
  id,
  title,
  desc,
  img,
  alt,
  demo = "",
  github,
}: ProjectProps) {
  return (
    <Card>
      <div className="flex items-center gap-2">
        <div className="w-1/3">
          <Image src={img} alt={alt} width={800} height={600} />
        </div>
        <div className="w-2/3">
          <h1 className="text-foreground-secondary">{title}</h1>
          <p className="mt-4 text-justify">{desc}</p>
        </div>
      </div>
    </Card>
  );
}
