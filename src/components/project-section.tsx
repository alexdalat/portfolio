"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import type { Project, Category } from "@/data/projects";

interface ProjectSectionProps {
  category: Category;
  projects: Project[];
  viewMode: "grid" | "timeline";
  defaultOpen?: boolean;
}

export function ProjectSection({
  category,
  projects,
  defaultOpen = true,
}: ProjectSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (projects.length === 0) return null;

  // Check for RL sub-category
  const hasRL = projects.some((p) => p.subCategory === "RL");
  const mainProjects = projects.filter((p) => p.subCategory !== "RL");
  const rlProjects = projects.filter((p) => p.subCategory === "RL");

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center gap-2 py-2 text-left"
      >
        <motion.div
          animate={{ rotate: isOpen ? 0 : -90 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="size-4 text-muted-foreground" />
        </motion.div>
        <h2 className="text-lg font-semibold text-foreground">{category}</h2>
        <span className="text-sm text-muted-foreground">
          ({projects.length})
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-3">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mainProjects.map((project, i) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={i}
                  />
                ))}
              </div>

              {hasRL && (
                <div className="mt-6">
                  <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                    Reinforcement Learning
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {rlProjects.map((project, i) => (
                      <ProjectCard
                        key={project.slug}
                        project={project}
                        index={i}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
