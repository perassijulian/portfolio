import Card from "./UI/Card";
import { Experience } from "./UI/Experience";

export default function ExperienceSection() {
  const experienceData = [
    {
      id: 0,
      title: "Booking",
      desc: "Landing page and booking system for a hostel and snowpark project. Built with Next.js and TailwindCSS, it allows users to explore available cabins, dorms, and snowpark passes. Booking requests are handled through a custom API using Prisma and SQLite. Designed with future scalability in mind, with a focus on clean UX/UI and easy backend migration to PostgreSQL if needed.",
      period: "JULY - DEC 2023",
      tags: ["tag1", "tag2"],
    },
    {
      id: 1,
      title: "Proof of Product",
      desc: "Winner of Polygon 2nd prize, Ceramic 1st prize and Tableland Pool Prize in ETHOnline hackaton. Commerce is a massive part of our online identity, but currently, there is no standard for representing real-world products on blockchain applications. Proof of Product (POP) is a new, open standard for Web3 commerce — authentic, composable, and verifiable product identity.",
      period: "JULY - DEC 2023",
      tags: ["tag1", "tag2", "tag3"],
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
