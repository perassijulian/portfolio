import Card from "./UI/Card";
import { Experience } from "./UI/Experience";

export default function ExperienceSection() {
  const experienceData = [
    {
      id: 0,
      title: "Password Manager",
      desc: "Built a full-stack password manager with 2FA, encrypted credential storage, rate limiting, and strong security practices. Designed with Next.js, Prisma, and Redis, featuring a clean, responsive UI.",
      period: "2025",
      tags: ["Next.js", "Prisma", "2FA", "Redis", "Security"],
    },
    {
      id: 1,
      title: "Snowpark Hostel Booking",
      desc: "A booking system for a snowpark-hostel hybrid project. Includes accommodation search, booking flows, admin panel, and volunteer sign-ups. Built with scalability and real-world UX in mind.",
      period: "2025",
      tags: ["Full-stack", "Next.js", "Tailwind", "PostgreSQL", "UX"],
    },
    {
      id: 2,
      title: "Web3 Developer (Freelance & Hackathons)",
      desc: "Participated in ETHGlobal hackathons and won prizes building apps with smart contracts, Ceramic, and Filecoin. Delivered MVPs under tight deadlines and collaborated in agile teams.",
      period: "JAN – OCT 2022",
      tags: ["Web3", "Hackathons", "Ceramic", "ETHGlobal"],
    },
    {
      id: 3,
      title: "Independent Work & Self-Learning",
      desc: "While working abroad across multiple industries, I taught myself web development and cybersecurity, building side projects and developing strong adaptability and problem-solving skills.",
      period: "2019 – 2025",
      tags: ["Self-taught", "Cybersecurity", "Adaptability"],
    },
    {
      id: 4,
      title: "Manufacturing & Process Engineering",
      desc: "Held engineering and leadership roles in factories. Implemented ISO 9001, optimized production lines, created SOPs, and led teams of 30+. Built a strong foundation in systems thinking and process design.",
      period: "2015 – 2019",
      tags: ["Engineering", "ISO 9001", "Lean", "Team Leadership"],
    },
  ];

  return (
    <div className="mt-32">
      {experienceData.map((exp) => (
        <Experience
          id={exp.id}
          title={exp.title}
          desc={exp.desc}
          period={exp.period}
          tags={exp.tags}
        />
      ))}
    </div>
  );
}
