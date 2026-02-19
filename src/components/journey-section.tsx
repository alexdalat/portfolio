"use client";

import { motion } from "framer-motion";
import { GraduationCap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JourneySectionProps {
  onViewTimeline: () => void;
}

const milestones = [
  {
    id: "uofm",
    title: "University of Michigan",
    subtitle: "B.S. Computer Science",
    date: "May 2026",
    status: "upcoming" as const,
  },
  {
    id: "okemos",
    title: "International Academy of Okemos",
    subtitle: "High School",
    date: "May 2022",
    status: "completed" as const,
  },
];

export function JourneySection({ onViewTimeline }: JourneySectionProps) {
  return (
    <section className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Education</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onViewTimeline}
            className="gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <Clock className="size-3.5" />
            View full timeline
          </Button>
        </div>

        <div className="relative">
          {/* Horizontal line connecting milestones */}
          <div className="absolute left-0 right-0 top-6 h-px bg-border hidden sm:block" />

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="relative flex-1"
              >
                {/* Dot on the line */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-3 z-10">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                      milestone.status === "upcoming"
                        ? "border-primary bg-primary"
                        : "border-border bg-background"
                    }`}
                  >
                    <GraduationCap
                      className={`size-3 ${
                        milestone.status === "upcoming"
                          ? "text-primary-foreground"
                          : "text-muted-foreground"
                      }`}
                    />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`rounded-lg border px-4 py-3 sm:mt-10 ${
                    milestone.status === "upcoming"
                      ? "border-primary/30 bg-primary/5"
                      : "border-border/60 bg-card"
                  }`}
                >
                  <div className="flex items-start gap-3 sm:block">
                    {/* Mobile icon */}
                    <div
                      className={`flex sm:hidden h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        milestone.status === "upcoming"
                          ? "bg-primary"
                          : "bg-muted"
                      }`}
                    >
                      <GraduationCap
                        className={`size-4 ${
                          milestone.status === "upcoming"
                            ? "text-primary-foreground"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-foreground">
                          {milestone.title}
                        </h3>
                        {milestone.status === "upcoming" && (
                          <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                            Soon
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {milestone.subtitle}
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-1">
                        {milestone.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
