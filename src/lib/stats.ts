import type { Experience } from "@/data/portfolio";

export function getYearsOfExperience(experiences: Experience[]): number {
  if (!experiences.length) return 0;
  const earliest = [...experiences].sort(
    (a, b) => new Date(a.from).getTime() - new Date(b.from).getTime()
  )[0];
  const start = new Date(earliest.from);
  const now = new Date();
  return now.getFullYear() - start.getFullYear() + (now.getMonth() > 6 ? 1 : 0);
}
