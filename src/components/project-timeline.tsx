"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ProjectImageMini } from "@/components/project-image";
import { ExternalLink, GraduationCap } from "lucide-react";
import type { Project } from "@/data/projects";

// Milestone events (education, etc.)
interface Milestone {
  type: "milestone";
  id: string;
  title: string;
  subtitle: string;
  date: string;
  icon: "graduation";
}

const milestones: Milestone[] = [
  {
    type: "milestone",
    id: "uofm-graduation",
    title: "University of Michigan",
    subtitle: "B.S. Computer Science — Ann Arbor",
    date: "2026-05-01",
    icon: "graduation",
  },
  {
    type: "milestone",
    id: "ia-graduation",
    title: "International Academy of Bloomfield Hills",
    subtitle: "High School Diploma",
    date: "2022-05-15",
    icon: "graduation",
  },
];

type TimelineEvent =
  | (Project & { type: "project" })
  | Milestone;

interface ProjectTimelineProps {
  projects: Project[];
}

export function ProjectTimeline({ projects }: ProjectTimelineProps) {
  // Merge projects and milestones into a single timeline
  const allEvents: TimelineEvent[] = [
    ...projects.map((p) => ({ ...p, type: "project" as const })),
    ...milestones,
  ];

  // Sort by date descending
  allEvents.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Group by year
  const byYear = allEvents.reduce<Record<number, TimelineEvent[]>>((acc, e) => {
    const year = new Date(e.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(e);
    return acc;
  }, {});

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  if (allEvents.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-sm text-muted-foreground">
          No projects match your search.
        </p>
      </div>
    );
  }

  return (
    <div className="relative mt-8">
      {/* Continuous vertical line */}
      <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border sm:left-20" />

      {years.map((year, yi) => (
        <div key={year} className="relative mb-2">
          {/* Year marker */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: yi * 0.05 }}
            className="relative mb-4 flex items-center"
          >
            {/* Year pill on the line */}
            <div className="relative z-10 flex h-6 items-center rounded-full border border-border bg-background px-3 sm:ml-[52px]">
              <span className="text-xs font-semibold text-foreground">
                {year}
              </span>
            </div>
            <div className="ml-3 h-px flex-1 bg-border/40" />
          </motion.div>

          {/* Events in this year */}
          {byYear[year].map((event, pi) =>
            event.type === "milestone" ? (
              <MilestoneNode
                key={event.id}
                milestone={event}
                index={yi * 10 + pi}
              />
            ) : (
              <TimelineNode
                key={event.slug}
                project={event}
                index={yi * 10 + pi}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
}

function MilestoneNode({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.4) }}
      className="relative mb-3 flex items-start"
    >
      {/* Larger dot for milestones */}
      <div className="absolute left-[1px] top-3 z-10 sm:left-[74px]">
        <div className="flex h-[13px] w-[13px] items-center justify-center rounded-full border-2 border-primary bg-primary">
          <GraduationCap className="size-2 text-primary-foreground" />
        </div>
      </div>

      {/* Date label */}
      <div className="hidden w-16 shrink-0 pt-2.5 text-right sm:block">
        <span className="text-[11px] font-medium text-primary">
          {new Date(milestone.date).toLocaleDateString("en-US", {
            month: "short",
          })}
        </span>
      </div>

      {/* Content card - more prominent */}
      <div className="ml-6 flex-1 sm:ml-8">
        <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <GraduationCap className="size-5 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                {milestone.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {milestone.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TimelineNode({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.4) }}
      className="group relative mb-1 flex items-start"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Dot on the line */}
      <div className="absolute left-[4px] top-3 z-10 sm:left-[77px]">
        <div className="h-[7px] w-[7px] rounded-full border-2 border-border bg-background transition-colors group-hover:border-foreground group-hover:bg-foreground" />
      </div>

      {/* Date label — hidden on mobile */}
      <div className="hidden w-16 shrink-0 pt-2 text-right sm:block">
        <span className="text-[11px] text-muted-foreground">
          {new Date(project.date).toLocaleDateString("en-US", {
            month: "short",
          })}
        </span>
      </div>

      {/* Content card */}
      <div className="ml-6 flex-1 sm:ml-8">
        <div className="rounded-lg border border-transparent px-3 py-2 transition-colors group-hover:border-border group-hover:bg-muted/30">
          <div className="flex items-center gap-3">
            {/* Mini preview thumbnail */}
            <div className="flex h-9 w-14 shrink-0 items-center justify-center overflow-hidden rounded border border-border/50 bg-muted/30">
              <ProjectImageMini slug={project.slug} title={project.title} />
            </div>

            <div className="flex flex-1 items-center justify-between gap-2 min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <h4 className="truncate text-sm font-medium text-foreground">
                  {project.title}
                </h4>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={(e) => e.stopPropagation()}
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

          {/* Expanded details on hover */}
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
