import type { Experience } from "@/data/portfolio";

/** Whole years since the earliest role began — never rounded up, so the figure matches a CV. */
export function getYearsOfExperience(experiences: Experience[]): number {
  if (!experiences.length) return 0;
  const start = new Date(
    Math.min(...experiences.map((e) => new Date(e.from).getTime()))
  );
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  return Math.floor(months / 12);
}
