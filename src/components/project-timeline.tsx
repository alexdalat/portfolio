"use client";

import { TimelineItem } from "@/components/timeline-item";
import { GraduationCap } from "lucide-react";
import { milestones, type Milestone } from "@/data/milestones";
import type { Project } from "@/data/projects";

type TimelineEvent =
  | (Project & { type: "project" })
  | (Milestone & { type: "milestone" });

interface ProjectTimelineProps {
  projects: Project[];
}

export function ProjectTimeline({ projects }: ProjectTimelineProps) {
  // Merge projects and milestones into a single timeline
  const allEvents: TimelineEvent[] = [
    ...projects.map((p) => ({ ...p, type: "project" as const })),
    ...milestones.map((milestone) => ({
      ...milestone,
      type: "milestone" as const,
    })),
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

      {years.map((year) => (
        <div key={year} className="relative mb-2">
          {/* Year marker */}
          <div
            className="relative mb-4 flex items-center"
          >
            {/* Year pill on the line */}
            <div className="relative z-10 flex h-6 items-center rounded-full border border-border bg-background px-3 sm:ml-[52px]">
              <span className="text-xs font-semibold text-foreground">
                {year}
              </span>
            </div>
            <div className="ml-3 h-px flex-1 bg-border/40" />
          </div>

          {/* Events in this year */}
          {byYear[year].map((event) =>
            event.type === "milestone" ? (
              <MilestoneNode key={event.id} milestone={event} />
            ) : (
              <TimelineItem key={event.slug} project={event} />
            )
          )}
        </div>
      ))}
    </div>
  );
}

function MilestoneNode({
  milestone,
}: {
  milestone: Milestone;
}) {
  return (
    <div
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
    </div>
  );
}
