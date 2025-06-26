import { AtSign, Github, Instagram, Linkedin } from "lucide-react";

export default function ContactLinks() {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <a
        href="https://github.com/perassijulian"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground-secondary hover:text-accent transition-colors duration-300"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/julian-perassi-7336ab97/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground-secondary hover:text-accent transition-colors duration-300"
      >
        <Linkedin />
      </a>
      <a
        href="https://www.instagram.com/julianperassi/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground-secondary hover:text-accent transition-colors duration-300"
      >
        <Instagram />
      </a>
      <a
        href="mailto:perassijulian@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground-secondary hover:text-accent transition-colors duration-300"
      >
        <AtSign />
      </a>
    </div>
  );
}
