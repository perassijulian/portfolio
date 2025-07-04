export const projectsData = [
  {
    id: 0,
    title: "Snowpark Hostel Booking",
    desc: "Full-stack booking system for a hybrid snowpark-hostel. Built with Next.js and TailwindCSS, it includes a custom booking flow, volunteer sign-up, and an admin panel to manage reservations. Auth is handled via NextAuth with secure middleware and tested with Vitest.",
    images: [
      {
        src: "/portfolio/booking.jpeg",
        alt: "Booking system for snowpark and hostel",
      },
    ],
    demo: "https://hostel-perassi.vercel.app/",
    github: "https://github.com/perassijulian/hostel-snowpark",
    tags: ["Next.js", "TailwindCSS", "PostgreSQL", "Prisma", "NextAuth"],
  },
  {
    id: 1,
    title: "Password Manager with 2FA",
    desc: "Modern password manager with 2FA, rate limiting, and strong password hashing. Built using Next.js 15+, Prisma, and Upstash Redis. Includes features like OTP setup, strength validation, and secure credential handling.",
    images: [
      {
        src: "/portfolio/booking.jpeg",
        alt: "Booking system for snowpark and hostel",
      },
    ],
    demo: "https://password-manager-jp.vercel.app/",
    github: "https://github.com/perassijulian/password-manager",
    tags: ["Next.js", "Security", "Prisma", "Redis", "TailwindCSS", "2FA"],
  },
];
