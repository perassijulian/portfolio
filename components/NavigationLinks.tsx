"use client";

import { useState } from "react";
import UnderlineButton from "./UI/UnderlineButton";

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "tech-stack", label: "TECH STACK" },
];

export default function NavigationLinks() {
  const [active, setActive] = useState("about");

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
