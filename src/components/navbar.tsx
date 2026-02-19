"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          Alex Dalat
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <Button asChild size="sm" variant="outline" className="gap-1.5">
            <a
              href="https://alexdalat.com/resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="size-3.5" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
