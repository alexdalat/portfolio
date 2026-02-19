"use client";

import { useState } from "react";

interface ProjectImageProps {
  slug: string;
  title: string;
  className?: string;
  fallbackClassName?: string;
}

/**
 * Displays a project image from /projects/{slug}.png
 * Falls back to showing title if image doesn't exist
 */
export function ProjectImage({
  slug,
  title,
  className = "h-full w-full object-cover",
  fallbackClassName = "select-none text-xl font-semibold text-muted-foreground/50",
}: ProjectImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const imagePath = `/projects/${slug}.png`;

  return (
    <>
      {status !== "loaded" && (
        <span className={fallbackClassName}>{title}</span>
      )}
      {status !== "error" && (
        <img
          src={imagePath}
          alt={title}
          className={`${className} ${status === "loading" ? "absolute opacity-0" : ""}`}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </>
  );
}

/**
 * Smaller variant for timeline thumbnails - shows initials on fallback
 */
export function ProjectImageMini({
  slug,
  title,
  className = "h-full w-full object-cover",
}: Omit<ProjectImageProps, "fallbackClassName">) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const imagePath = `/projects/${slug}.png`;

  const initials = title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <>
      {status !== "loaded" && (
        <span className="select-none text-[9px] font-semibold text-muted-foreground/30">
          {initials}
        </span>
      )}
      {status !== "error" && (
        <img
          src={imagePath}
          alt={title}
          className={`${className} ${status === "loading" ? "absolute opacity-0" : ""}`}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </>
  );
}
