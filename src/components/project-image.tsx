"use client";

import { useEffect, useRef, useState } from "react";

interface ProjectImageProps {
  image?: string;
  title: string;
  className?: string;
  fallbackClassName?: string;
}

/**
 * Displays a resolved project image
 * Falls back to showing title if image doesn't exist
 */
export function ProjectImage({
  image,
  title,
  className = "h-full w-full object-cover",
  fallbackClassName = "select-none text-xl font-semibold text-muted-foreground/50",
}: ProjectImageProps) {
  const [loadedImage, setLoadedImage] = useState<string>();
  const [failedImage, setFailedImage] = useState<string>();
  const imageRef = useRef<HTMLImageElement>(null);
  const isLoaded = image !== undefined && loadedImage === image;
  const hasError = image === undefined || failedImage === image;

  useEffect(() => {
    const element = imageRef.current;
    if (!image || !element?.complete) return;

    if (element.naturalWidth > 0) {
      setLoadedImage(image);
    } else {
      setFailedImage(image);
    }
  }, [image]);

  return (
    <>
      {!isLoaded && (
        <span className={fallbackClassName}>{title}</span>
      )}
      {!hasError && (
        <img
          ref={imageRef}
          src={image}
          alt={title}
          className={`${className} ${isLoaded ? "" : "absolute opacity-0"}`}
          onLoad={() => setLoadedImage(image)}
          onError={() => setFailedImage(image)}
        />
      )}
    </>
  );
}

/**
 * Smaller variant for timeline thumbnails - shows initials on fallback
 */
export function ProjectImageMini({
  image,
  title,
  className = "h-full w-full object-cover",
}: Omit<ProjectImageProps, "fallbackClassName">) {
  const [loadedImage, setLoadedImage] = useState<string>();
  const [failedImage, setFailedImage] = useState<string>();
  const imageRef = useRef<HTMLImageElement>(null);
  const isLoaded = image !== undefined && loadedImage === image;
  const hasError = image === undefined || failedImage === image;

  useEffect(() => {
    const element = imageRef.current;
    if (!image || !element?.complete) return;

    if (element.naturalWidth > 0) {
      setLoadedImage(image);
    } else {
      setFailedImage(image);
    }
  }, [image]);

  const initials = title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <>
      {!isLoaded && (
        <span className="select-none text-[9px] font-semibold text-muted-foreground/30">
          {initials}
        </span>
      )}
      {!hasError && (
        <img
          ref={imageRef}
          src={image}
          alt={title}
          className={`${className} ${isLoaded ? "" : "absolute opacity-0"}`}
          onLoad={() => setLoadedImage(image)}
          onError={() => setFailedImage(image)}
        />
      )}
    </>
  );
}
