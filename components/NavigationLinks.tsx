"use client";

import { useState } from "react";

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
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
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={`relative group hover:text-foreground-secondary ${
            active === section.id ? "text-foreground-secondary" : ""
          }`}
        >
          {section.label}
          <span
            className={`absolute left-0 -bottom-1 h-[1px] transition-all duration-300 bg-gray-50 ${
              active === section.id ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
