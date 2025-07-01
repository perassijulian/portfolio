import Pill from "@/components/UI/Pill";
import { archiveData } from "@/data/archive";
import { ExternalLink, MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Archive() {
  return (
    <div className="h-screen w-full p-4 md:p-20">
      <Link
        href="/"
        className="group text-accent font-bold flex items-center gap-1 text-2xl "
      >
        <MoveLeft className="transition-transform duration-300 ease-in-out group-hover:-translate-x-1" />{" "}
        Julian Perassi
      </Link>
      <h1 className="text-4xl text-foreground-secondary font-bold">
        Old Projects
      </h1>
      <table className="w-full table-auto text-left mt-8">
        <thead>
          <tr className="text-foreground-secondary text-sm border-b border-gray-50">
            <th className="py-3">Project</th>
            <th className="hidden md:table-cell">Description</th>
            <th>Build with</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody className="text-sm text-foreground">
          {archiveData.map((work) => (
            <tr
              key={work.id}
              className="border-b border-gray-100 hover:bg-gray-800/30 transition"
            >
              <td className="py-3 align-top">{work.title}</td>
              <td className="py-3 align-top hidden md:table-cell">
                {work.desc}
              </td>
              <td className="py-3 align-top">
                <div className="flex flex-wrap gap-1">
                  {work.tags.map((t, i) => (
                    <Pill tagKey={`${work.id}-${i}`} key={`${work.id}-${i}`}>
                      {t}
                    </Pill>
                  ))}
                </div>
              </td>
              <td className="align-middle text-foreground-secondary hover:text-accent">
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
