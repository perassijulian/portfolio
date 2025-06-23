import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "foreground-secondary": "var(--foreground-secondary)",
        accent: "var(--accent)",
        "accent-muted": "var(--accent-muted)",
      },
    },
  },
  plugins: [],
};

export default config;
