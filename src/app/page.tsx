"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { JourneySection } from "@/components/journey-section";
import { ProjectSection } from "@/components/project-section";
import { ProjectTimeline } from "@/components/project-timeline";
import {
  FilterSortBar,
  type SortOption,
  type ViewMode,
} from "@/components/filter-sort-bar";
import { ContactForm } from "@/components/contact-form";
import {
  projects,
  categories,
  getAllTagsWithCounts,
  type Category,
  type Project,
} from "@/data/projects";

function sortProjects(list: Project[], sortBy: SortOption): Project[] {
  const sorted = [...list];
  switch (sortBy) {
    case "title":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "date-asc":
      return sorted.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    case "date-desc":
      return sorted.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    case "tags":
      return sorted.sort((a, b) => b.tags.length - a.tags.length);
    default:
      return sorted;
  }
}

function filterProjects(
  list: Project[],
  search: string,
  tagFilter: string
): Project[] {
  let filtered = list;

  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  if (tagFilter && tagFilter !== "all") {
    filtered = filtered.filter((p) => p.tags.includes(tagFilter));
  }

  return filtered;
}

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("date-desc");
  const [searchQuery, setSearchQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("all");

  const allTags = useMemo(() => getAllTagsWithCounts(), []);

  const processedByCategory = useMemo(() => {
    const result: Record<Category, Project[]> = {} as Record<
      Category,
      Project[]
    >;
    for (const cat of categories) {
      const catProjects = projects.filter((p) => p.category === cat);
      const filtered = filterProjects(catProjects, searchQuery, tagFilter);
      result[cat] = sortProjects(filtered, sortBy);
    }
    return result;
  }, [searchQuery, tagFilter, sortBy]);

  const allFiltered = useMemo(() => {
    const filtered = filterProjects(projects, searchQuery, tagFilter);
    return sortProjects(filtered, sortBy);
  }, [searchQuery, tagFilter, sortBy]);

  const totalVisible = viewMode === "timeline"
    ? allFiltered.length
    : Object.values(processedByCategory).reduce(
        (sum, list) => sum + list.length,
        0
      );

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />

      <JourneySection onViewTimeline={() => setViewMode("timeline")} />

      {/* Projects */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Projects
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {totalVisible} project{totalVisible !== 1 ? "s" : ""}
                {searchQuery || tagFilter !== "all" ? " found" : ""}
              </p>
            </div>
          </div>

          <FilterSortBar
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            sortBy={sortBy}
            onSortChange={setSortBy}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            tagFilter={tagFilter}
            onTagFilterChange={setTagFilter}
            allTags={allTags}
          />

          <div className="mt-8">
            {viewMode === "timeline" ? (
              <ProjectTimeline projects={allFiltered} />
            ) : (
              <>
                {categories.map((cat) => (
                  <ProjectSection
                    key={cat}
                    category={cat}
                    projects={processedByCategory[cat]}
                    viewMode={viewMode}
                  />
                ))}

                {totalVisible === 0 && (
                  <div className="py-20 text-center">
                    <p className="text-sm text-muted-foreground">
                      No projects match your search.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Alex Dalat
          </p>
        </div>
      </footer>
    </div>
  );
}
