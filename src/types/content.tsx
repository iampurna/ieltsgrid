export interface ContentItem {
  slug: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration?: string;
  questions?: string;
  sections?: number;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon: string;
  children?: NavigationItem[];
}
