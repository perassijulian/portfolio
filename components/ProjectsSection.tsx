import Project from "./UI/Project";

export default function ProjectsSection() {
  const projectsData = [
    {
      id: 0,
      title: "Booking",
      desc: "Landing page and booking system for a hostel and snowpark project. Built with Next.js and TailwindCSS, it allows users to explore available cabins, dorms, and snowpark passes. Booking requests are handled through a custom API using Prisma and SQLite. Designed with future scalability in mind, with a focus on clean UX/UI and easy backend migration to PostgreSQL if needed.",
      img: "/portfolio/booking.jpeg",
      alt: "landing page and booking system",
      demo: "https://hostel-perassi.vercel.app/",
      github: "https://github.com/perassijulian/hostel-snowpark",
      tags: ["tag1", "tag2"],
    },
    {
      id: 1,
      title: "Proof of Product",
      desc: "Winner of Polygon 2nd prize, Ceramic 1st prize and Tableland Pool Prize in ETHOnline hackaton. Commerce is a massive part of our online identity, but currently, there is no standard for representing real-world products on blockchain applications. Proof of Product (POP) is a new, open standard for Web3 commerce — authentic, composable, and verifiable product identity.",
      img: "/portfolio/proofofproduct.png",
      alt: "proof of product with ceramic for polygon",
      demo: "https://ethglobal.com/showcase/proof-of-product-pop-web3-commerce-0uhew",
      github: "https://github.com/brandinate/Brandinate-Monorepo",
      tags: ["tag1", "tag2", "tag3"],
    },
  ];
  return (
    <div className="relative group/list">
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
    </div>
  );
}
