"use client";

import { useEffect, useState } from "react";
import UnderlineButton from "./UI/UnderlineButton";

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "tech-stack", label: "TECH STACK" },
];

export default function NavigationLinks() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScrollSpy = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollSpy, {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0.1,
    });

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleClick = (id: string) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex flex-col items-start gap-4 ml-2 text-sm font-medium tracking-widest">
      {sections.map((section) => (
        <UnderlineButton
          tagKey={section.id}
          key={section.id}
          onClick={() => handleClick(section.id)}
          isActive={active === section.id}
        >
          {section.label}
        </UnderlineButton>
      ))}
    </nav>
  );
}
