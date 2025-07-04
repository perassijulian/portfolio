import Pill from "@/components/UI/Pill";
import { projectsData } from "@/data/projects";
import { Github, Wallpaper, Youtube } from "lucide-react";

export const asd = {
  id: 0,
  title: "Snowpark Hostel Booking",
  desc: "Full-stack booking system for a hybrid snowpark-hostel. Built with Next.js and TailwindCSS, it includes a custom booking flow, volunteer sign-up, and an admin panel to manage reservations. Auth is handled via NextAuth with secure middleware and tested with Vitest.",
  img: "/portfolio/booking.jpeg",
  alt: "Booking system for snowpark and hostel",
  demo: "https://hostel-perassi.vercel.app/",
  github: "https://github.com/perassijulian/hostel-snowpark",
  tags: ["Next.js", "TailwindCSS", "PostgreSQL", "Prisma", "NextAuth"],
};

type Props = {
  params: { id: string };
};

export default function ProjectPage({ params }: Props) {
  const index = parseInt(params.id, 10);

  const validIds = projectsData.map((p) => p.id);
  if (!validIds.includes(index)) return <div>404</div>;

  const { title, desc, img, alt, demo, github, tags } = projectsData[index];
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl mt-10 p-4">
        <h1 className="text-3xl">{title}</h1>
        <div>pictures</div>
        <p>{desc}</p>
        <div className="flex gap-2">
          {tags.map((t, i) => (
            <Pill tagKey={`${index}-${i}`} key={`${index}-${i}`}>
              {t}
            </Pill>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          <a
            className="p-2 text-foreground-secondary hover:text-accent"
            aria-label="Github link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            className="p-2 text-foreground-secondary hover:text-accent"
            aria-label="Youtube link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube />
          </a>
          <a
            className="p-2 text-foreground-secondary hover:text-accent"
            aria-label="Vercel link"
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Wallpaper />
          </a>
        </div>
      </div>
    </div>
  );
}
