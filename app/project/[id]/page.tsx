import GoBackButton from "@/components/UI/GoBackButton";
import LightboxGallery from "@/components/UI/LightboxGallery";
import Pill from "@/components/UI/Pill";
import { projectsData } from "@/data/projects";
import { CloudLightning, Github, Wallpaper, Youtube } from "lucide-react";

type Props = {
  params: { id: string };
};

export default function ProjectPage({ params }: Props) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-3xl my-4 p-4">
          <GoBackButton />
          <h3 className="text-foreground-secondary text-lg flex gap-1 text-center mt-4">
            404 - Page not found <CloudLightning />
          </h3>
          <p>
            This page is not available. You can try again from the homepage.
          </p>
        </div>
      </div>
    );
  }

  const { id, title, longDesc, demo, images, github, youtube, tags } = project;

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl my-4 p-4">
        <GoBackButton />
        <div className="space-y-4">
          <h1 className="text-3xl text-foreground-secondary">{title}</h1>
          <div className="max-w-lg mx-auto">
            <LightboxGallery images={images} />
          </div>
          <p>{longDesc}</p>
          <div className="flex gap-2">
            {tags.map((t, i) => (
              <Pill tagKey={`${id}-${i}`} key={`${id}-${i}`}>
                {t}
              </Pill>
            ))}
          </div>
          <div className="flex items-center justify-center flex-wrap gap-4 pt-4">
            {github && (
              <a
                className="p-2 text-foreground-secondary hover:text-accent"
                aria-label="Github link"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            )}
            {youtube && (
              <a
                className="p-2 text-foreground-secondary hover:text-accent"
                aria-label="Youtube link"
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube />
              </a>
            )}
            {demo && (
              <a
                className="p-2 text-foreground-secondary hover:text-accent"
                aria-label="Vercel link"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Wallpaper />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
