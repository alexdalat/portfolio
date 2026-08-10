"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ProjectImageMini } from "@/components/project-image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface TimelineItemProps {
  project: Project;
}

export function TimelineItem({ project }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="group relative mb-1 flex items-start"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="absolute left-[4px] top-3 z-10 sm:left-[77px]">
        <div className="h-[7px] w-[7px] rounded-full border-2 border-border bg-background transition-colors group-hover:border-foreground group-hover:bg-foreground" />
      </div>

      <div className="hidden w-16 shrink-0 pt-2 text-right sm:block">
        <span className="text-[11px] text-muted-foreground">
          {new Date(project.date).toLocaleDateString("en-US", {
            month: "short",
          })}
        </span>
      </div>

      <div className="ml-6 flex-1 sm:ml-8">
        <div className="rounded-lg border border-transparent px-3 py-2 transition-colors group-hover:border-border group-hover:bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-14 shrink-0 items-center justify-center overflow-hidden rounded border border-border/50 bg-muted/30">
              <ProjectImageMini image={project.image} title={project.title} />
            </div>

            <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2">
                <h4 className="truncate text-sm font-medium text-foreground">
                  {project.title}
                </h4>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <ExternalLink className="size-3 text-muted-foreground hover:text-foreground" />
                  </a>
                )}
              </div>

              <Badge
                variant="outline"
                className="shrink-0 px-1.5 py-0 text-[10px] font-normal text-muted-foreground"
              >
                {project.category}
              </Badge>
            </div>
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="mt-2 pl-[68px] text-xs leading-relaxed text-muted-foreground sm:pl-0">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1 pl-[68px] sm:pl-0">
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
      </div>
    </motion.div>
  );
}
