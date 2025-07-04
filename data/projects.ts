export const projectsData = [
  {
    id: 1,
    title: "Password Manager with 2FA",
    shortDesc:
      "A secure password manager with 2FA, JWT-based sessions, rate limiting, and strong encryption. Built with Next.js, Prisma, and Upstash Redis.",
    longDesc:
      "A modern, full-stack password manager built with Next.js 15+, Prisma, and Upstash Redis, designed with security-first principles. It features two-factor authentication (2FA) using TOTP with QR onboarding, rate limiting by IP and email/IP pairs to prevent brute-force attacks, and robust input validation with Zod. Sessions are managed using JWTs with CSRF protection, and credentials are securely hashed using argon2. Users cannot view saved passwords directly—only copy them after re-authenticating with 2FA—ensuring a zero-knowledge-like approach. The system also includes a secure password reset flow with time-limited tokens.",
    images: [
      {
        src: "/portfolio/booking.jpeg",
        alt: "Booking system for snowpark and hostel",
      },
    ],
    demo: "https://password-manager-jp.vercel.app/",
    github: "https://github.com/perassijulian/password-manager",
    youtube: "",
    tags: ["Next.js", "Security", "Prisma", "Redis", "TailwindCSS", "2FA"],
  },
  {
    id: 2,
    title: "Snowpark Hostel Booking",
    shortDesc:
      "A secure password manager with 2FA, JWT-based sessions, rate limiting, and strong encryption. Built with Next.js, Prisma, and Upstash Redis.",
    longDesc:
      "Full-stack booking system for a hybrid snowpark-hostel. Built with Next.js and TailwindCSS, it includes a custom booking flow, volunteer sign-up, and an admin panel to manage reservations. Auth is handled via NextAuth with secure middleware and tested with Vitest.",
    images: [
      {
        src: "/portfolio/booking.jpeg",
        alt: "Booking system for snowpark and hostel",
      },
    ],
    demo: "https://hostel-perassi.vercel.app/",
    github: "https://github.com/perassijulian/hostel-snowpark",
    youtube: "",
    tags: ["Next.js", "TailwindCSS", "PostgreSQL", "Prisma", "NextAuth"],
  },
];
