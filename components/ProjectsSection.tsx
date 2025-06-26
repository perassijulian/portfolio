import Project from "./UI/Project";

export default function ProjectsSection() {
  const projectsData = [
    {
      id: 0,
      title: "Snowpark Hostel Booking",
      desc: "Full-stack booking system for a hybrid snowpark-hostel. Built with Next.js and TailwindCSS, it includes a custom booking flow, volunteer sign-up, and an admin panel to manage reservations. Auth is handled via NextAuth with secure middleware and tested with Vitest.",
      img: "/portfolio/booking.jpeg",
      alt: "Booking system for snowpark and hostel",
      demo: "https://hostel-perassi.vercel.app/",
      github: "https://github.com/perassijulian/hostel-snowpark",
      tags: ["Next.js", "TailwindCSS", "PostgreSQL", "Prisma", "NextAuth"],
    },
    {
      id: 1,
      title: "Password Manager with 2FA",
      desc: "Modern password manager with 2FA, rate limiting, and strong password hashing. Built using Next.js 15+, Prisma, and Upstash Redis. Includes features like OTP setup, strength validation, and secure credential handling.",
      img: "/portfolio/password.jpeg",
      alt: "Secure password manager app",
      demo: "https://password-manager-jp.vercel.app/",
      github: "https://github.com/perassijulian/password-manager",
      tags: ["Next.js", "Security", "Prisma", "Redis", "TailwindCSS", "2FA"],
    },
  ];
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
