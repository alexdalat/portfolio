import { readdir } from "node:fs/promises";
import path from "node:path";
import { Portfolio } from "@/components/portfolio";
import { projects } from "@/data/projects";

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".gif"];

async function getProjectsWithImages() {
  const imageDirectory = path.join(process.cwd(), "public", "projects");
  const files = await readdir(imageDirectory, { withFileTypes: true });
  const imageBySlug = new Map<string, string>();

  for (const extension of IMAGE_EXTENSIONS) {
    for (const file of files) {
      if (!file.isFile() || path.extname(file.name).toLowerCase() !== extension) {
        continue;
      }

      const slug = path.basename(file.name, path.extname(file.name));
      if (!imageBySlug.has(slug)) {
        imageBySlug.set(slug, `/projects/${encodeURIComponent(file.name)}`);
      }
    }
  }

  return projects.map((project) => ({
    ...project,
    image: imageBySlug.get(project.slug),
  }));
}

export default async function Home() {
  return <Portfolio projects={await getProjectsWithImages()} />;
}
