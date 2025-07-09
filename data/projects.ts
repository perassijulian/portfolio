export const projectsData = [
  {
    id: "password-manager",
    title: "Password Manager with 2FA",
    shortDesc:
      "A secure password manager with 2FA, JWT-based sessions, rate limiting, and strong encryption. Built with Next.js, Prisma, and Upstash Redis.",
    longDesc:
      "A modern, full-stack password manager built with Next.js 15+, Prisma, and Upstash Redis, designed with security-first principles. It features two-factor authentication (2FA) using TOTP with QR onboarding, rate limiting by IP and email/IP pairs to prevent brute-force attacks, and robust input validation with Zod. Sessions are managed using JWTs with CSRF protection, and credentials are securely hashed using argon2. Users cannot view saved passwords directly—only copy them after re-authenticating with 2FA—ensuring a zero-knowledge-like approach. The system also includes a secure password reset flow with time-limited tokens.",
    images: [
      {
        src: "/portfolio/password-manager/dashboard-light.png",
        alt: "Dashboard on the password-manager on the light theme",
      },
      {
        src: "/portfolio/password-manager/dashboard.png",
        alt: "Dashboard on the password-manager showing credentials",
      },
      {
        src: "/portfolio/password-manager/2fa-verification.png",
        alt: "Prompt to complete our 2fa verification with TOTP",
      },
      {
        src: "/portfolio/password-manager/landing-page.png",
        alt: "Our landing page with access to dashboard or github repo",
      },
    ],
    demo: "https://password-manager-jp.vercel.app/",
    github: "https://github.com/perassijulian/password-manager",
    youtube: "https://www.youtube.com/watch?v=idYA7RYKZJA&t",
    tags: ["Next.js", "Security", "Prisma", "Redis", "TailwindCSS", "2FA"],
  },
  {
    id: "snowpark-hostel",
    title: "Snowpark Hostel Booking",
    shortDesc:
      "Full-stack snowpark-hostel booking system with custom reservations, volunteer sign-up, and admin panel. Built with Next.js, TailwindCSS, and secured with NextAuth.",
    longDesc:
      "A full-stack booking platform for a hybrid snowpark-hostel, built with Next.js 15, TailwindCSS, and Prisma. It features a custom booking flow with date and guest availability validation, volunteer sign-up handling, and an admin dashboard to manage accommodations and reservations. Authentication is powered by NextAuth with protected routes via middleware. All inputs are validated using Zod, and key flows are covered with unit tests using Vitest.",
    images: [
      {
        src: "/portfolio/hostel-snowpark/accommodation-example.png",
        alt: "Example of one of our accommodations",
      },
      {
        src: "/portfolio/hostel-snowpark/admin-panel.png",
        alt: "Accommodation section in our admin panel",
      },
      {
        src: "/portfolio/hostel-snowpark/book-your-stay.png",
        alt: "Booking path to search our accommodations",
      },
      {
        src: "/portfolio/hostel-snowpark/our-accommodations.png",
        alt: "Showcase of all our accommodations",
      },
    ],
    demo: "https://hostel-perassi.vercel.app/",
    github: "https://github.com/perassijulian/hostel-snowpark",
    youtube: "",
    tags: ["Next.js", "TailwindCSS", "PostgreSQL", "Prisma", "NextAuth"],
  },
];
