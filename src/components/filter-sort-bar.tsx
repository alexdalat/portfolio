"use client";

import { LayoutGrid, Clock, ArrowUpDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { TagWithCount } from "@/data/projects";

export type SortOption = "title" | "date-asc" | "date-desc" | "tags";
export type ViewMode = "grid" | "timeline";

interface FilterSortBarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  tagFilter: string;
  onTagFilterChange: (tag: string) => void;
  allTags: TagWithCount[];
}

export function FilterSortBar({
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange,
  tagFilter,
  onTagFilterChange,
  allTags,
}: FilterSortBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-8 w-48 pl-8 text-sm"
          />
        </div>

        <Select value={tagFilter} onValueChange={onTagFilterChange}>
          <SelectTrigger className="h-8 w-36 text-xs">
            <SelectValue placeholder="Filter by tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All tags</SelectItem>
            {allTags.map(({ tag, count }) => (
              <SelectItem key={tag} value={tag}>
                <span className="flex items-center justify-between gap-3 w-full">
                  <span>{tag}</span>
                  <span className="text-muted-foreground tabular-nums">{count}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Select
          value={sortBy}
          onValueChange={(v) => onSortChange(v as SortOption)}
        >
          <SelectTrigger className="h-8 w-36 text-xs">
            <ArrowUpDown className="mr-1 size-3" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date-desc">Newest first</SelectItem>
            <SelectItem value="date-asc">Oldest first</SelectItem>
            <SelectItem value="title">Title A–Z</SelectItem>
            <SelectItem value="tags">By tag count</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex rounded-md border border-border">
          <Button
            variant={viewMode === "grid" ? "secondary" : "ghost"}
            size="icon-xs"
            onClick={() => onViewModeChange("grid")}
            className="rounded-r-none"
          >
            <LayoutGrid className="size-3.5" />
          </Button>
          <Button
            variant={viewMode === "timeline" ? "secondary" : "ghost"}
            size="icon-xs"
            onClick={() => onViewModeChange("timeline")}
            className="rounded-l-none"
          >
            <Clock className="size-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
