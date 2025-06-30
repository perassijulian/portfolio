import Pill from "./UI/Pill";

const techStack = [
  {
    title: "Front End",
    stack: ["Next.js", "Tailwind CSS", "React.js", "TypeScript"],
  },
  {
    title: "Back End",
    stack: ["Prisma", "PostgreSQL", "Redis", "Upstash", "Node.js", "Zod"],
  },
  { title: "Auth & DevOps", stack: ["OAuth", "JWT", "Vercel", "Git"] },
  {
    title: "Cybersecurity",
    stack: [
      "2FA",
      "OTP",
      "Rate Limiting",
      "Input Validation",
      "Hashing",
      "OWASP",
    ],
  },
  {
    title: "Web3",
    stack: ["Ethers.js", "Hardhat", "Ceramic", "Filecoin", "Polygon", "IPFS"],
  },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="my-32">
      <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {techStack &&
          techStack.map((s, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.stack.length > 0 &&
                  s.stack.map((element, j) => (
                    <Pill tagKey={`${i}-${j}`} key={`${i}-${j}`}>
                      {element}
                    </Pill>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
}
