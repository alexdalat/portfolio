export interface Milestone {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  status: "upcoming" | "completed";
}

export const milestones: Milestone[] = [
  {
    id: "uofm-masters-graduation",
    title: "University of Michigan",
    subtitle: "Masters of Management",
    date: "2027-05-01",
    status: "upcoming",
  },
  {
    id: "uofm-graduation",
    title: "University of Michigan - Ann Arbor",
    subtitle: "B.S. Data Science (with Math minor)",
    date: "2026-05-01",
    status: "completed",
  },
  {
    id: "ia-graduation",
    title: "International Academy - Bloomfield Hills",
    subtitle: "High School Diploma",
    date: "2022-05-15",
    status: "completed",
  },
];