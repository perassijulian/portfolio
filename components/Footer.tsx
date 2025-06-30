export default function Footer() {
  return (
    <footer className="py-8 text-sm text-foreground-secondary flex flex-col items-center gap-4">
      <div className="flex gap-6 md:hidden">
        <a
          href="https://github.com/perassijulian"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Resume
        </a>
        <a
          href="mailto:you@example.com"
          className="hover:text-accent transition-colors"
        >
          Contact
        </a>
      </div>
      <p className="text-xs text-foreground-secondary/70">
        Inspired by{" "}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent"
        >
          Brittany Chiang
        </a>
        . Made with 💚 by Julian
      </p>
    </footer>
  );
}
