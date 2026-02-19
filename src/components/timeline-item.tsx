"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface TimelineItemProps {
  project: Project;
  index: number;
}

export function TimelineItem({ project, index }: TimelineItemProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, delay: index * 0.02 }}
      className="group relative flex gap-4 py-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Timeline dot + line */}
      <div className="relative flex flex-col items-center">
        <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-border group-hover:bg-foreground transition-colors" />
        <div className="w-px flex-1 bg-border/60" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-4">
        <div className="flex items-center gap-3">
          {/* Mini preview */}
          <div className="flex h-8 w-12 shrink-0 items-center justify-center overflow-hidden rounded border border-border/60 bg-muted/40">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-[8px] font-medium text-muted-foreground/40 select-none">
                {project.title.slice(0, 3)}
              </span>
            )}
          </div>

          <div className="flex flex-1 items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium text-foreground">
                {project.title}
              </h4>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <ExternalLink className="size-3 text-muted-foreground hover:text-foreground" />
                </a>
              )}
            </div>
            <span className="shrink-0 text-xs text-muted-foreground">
              {new Date(project.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
            </span>
          </div>
        </div>

        {/* Expanded description on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-1.5 py-0 text-[10px] font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
