"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectImage } from "@/components/project-image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasGithub = !!project.github;

  const CardWrapper = hasGithub ? "a" : "div";
  const linkProps = hasGithub
    ? {
        href: project.github,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <CardWrapper
        {...linkProps}
        className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-200 hover:border-border hover:shadow-md"
      >
        {/* Image / Title Placeholder */}
        <div className="relative flex h-36 items-center justify-center bg-muted/40">
          <ProjectImage slug={project.slug} title={project.title} />
          {hasGithub && (
            <div className="absolute right-2 top-2 rounded-md bg-white/80 p-1 opacity-0 transition-opacity group-hover:opacity-100">
              <ExternalLink className="size-3.5 text-muted-foreground" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2 p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold leading-tight text-foreground">
              {project.title}
            </h3>
            <span className="shrink-0 text-xs text-muted-foreground">
              {new Date(project.date).getFullYear()}
            </span>
          </div>

          <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-auto flex flex-wrap gap-1 pt-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-1.5 py-0 text-[10px] font-normal"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge
                variant="secondary"
                className="px-1.5 py-0 text-[10px] font-normal"
              >
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  );
}
