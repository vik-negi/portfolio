import { FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectPlaceholder({
  name,
  className,
  compact = false,
}: {
  name: string;
  className?: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className={cn("flex h-full w-full items-center justify-center bg-surface", className)}>
        <FolderGit2 className="w-6 h-6 text-ink-muted" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3 bg-surface",
        className
      )}
    >
      <FolderGit2 className="w-10 h-10 text-accent" />
      <span className="font-serif italic text-lg text-ink tracking-tight">{name}</span>
      <span className="text-xs text-ink-muted uppercase tracking-wider">Preview coming soon</span>
    </div>
  );
}
