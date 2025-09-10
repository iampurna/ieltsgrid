export const SITE_CONFIG = {
  name: "IELTSGrid",
  description:
    "Master IELTS with Free Practice Tests - Reading, Listening, Writing & Speaking",
  url: "https://ieltsgrid.com",
  ogImage: "https://ieltsgrid.com/og-image.png",
  keywords: [
    "IELTS",
    "IELTS Practice",
    "IELTS Tests",
    "IELTS Reading",
    "IELTS Listening",
    "IELTS Writing",
    "IELTS Speaking",
    "Free IELTS",
    "IELTS Preparation",
  ],
  author: "IELTSGrid Team",
};

export const NAVIGATION_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: "Home",
  },
  {
    label: "Reading",
    href: "/reading",
    icon: "Book",
    children: [
      { label: "Practice", href: "/reading", icon: "BookOpen" },
      {
        label: "Academic",
        href: "/reading?type=academic",
        icon: "GraduationCap",
      },
      { label: "General", href: "/reading?type=general", icon: "Globe" },
      { label: "Tips & Tricks", href: "/reading/tips", icon: "Lightbulb" },
    ],
  },
  {
    label: "Writing",
    href: "/writing",
    icon: "PenTool",
    children: [
      {
        label: "Task 1 Academic",
        href: "/writing/task1-academic",
        icon: "FileText",
      },
      { label: "Task 1 General", href: "/writing/task1-general", icon: "File" },
      { label: "Task 2", href: "/writing/task2", icon: "Edit" },
      { label: "Vocabulary", href: "/writing/vocabulary", icon: "BookOpen" },
      { label: "Tips", href: "/writing/tips", icon: "Lightbulb" },
    ],
  },
  {
    label: "Listening",
    href: "/listening",
    icon: "Headphones",
    children: [
      { label: "Practice", href: "/listening", icon: "Music" },
      { label: "Tips", href: "/listening/tips", icon: "Lightbulb" },
    ],
  },
  {
    label: "Speaking",
    href: "/speaking",
    icon: "Mic",
    children: [
      { label: "Practice", href: "/speaking", icon: "MessageCircle" },
      { label: "Vocabulary", href: "/speaking/vocabulary", icon: "BookOpen" },
      { label: "Tips", href: "/speaking/tips", icon: "Lightbulb" },
    ],
  },
  {
    label: "Maximize Your Score",
    href: "/maximize-your-score",
    icon: "TrendingUp",
  },
];

export const AUTO_SAVE_INTERVAL = 10000; // 10 seconds
