"use client";

import { useState, useRef, useEffect } from "react";

const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "gif"] as const;

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
  const [extensionIndex, setExtensionIndex] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const imagePath = `/projects/${slug}.${IMAGE_EXTENSIONS[extensionIndex]}`;

  useEffect(() => {
    setStatus("loading");
    setExtensionIndex(0);
  }, [slug]);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setStatus("loaded");
    }
  }, [imagePath]);

  const handleError = () => {
    if (extensionIndex < IMAGE_EXTENSIONS.length - 1) {
      setExtensionIndex((currentIndex) => currentIndex + 1);
      return;
    }

    setStatus("error");
  };

  return (
    <>
      {status !== "loaded" && (
        <span className={fallbackClassName}>{title}</span>
      )}
      {status !== "error" && (
        <img
          ref={imgRef}
          src={imagePath}
          alt={title}
          className={`${className} ${status === "loading" ? "absolute opacity-0" : ""}`}
          onLoad={() => setStatus("loaded")}
          onError={handleError}
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
  const [extensionIndex, setExtensionIndex] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const imagePath = `/projects/${slug}.${IMAGE_EXTENSIONS[extensionIndex]}`;

  useEffect(() => {
    setStatus("loading");
    setExtensionIndex(0);
  }, [slug]);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setStatus("loaded");
    }
  }, [imagePath]);

  const handleError = () => {
    if (extensionIndex < IMAGE_EXTENSIONS.length - 1) {
      setExtensionIndex((currentIndex) => currentIndex + 1);
      return;
    }

    setStatus("error");
  };

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
          ref={imgRef}
          src={imagePath}
          alt={title}
          className={`${className} ${status === "loading" ? "absolute opacity-0" : ""}`}
          onLoad={() => setStatus("loaded")}
          onError={handleError}
        />
      )}
    </>
  );
}
