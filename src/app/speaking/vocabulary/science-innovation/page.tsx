import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Microscope,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Rocket,
  Dna,
  Zap,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Science & Innovation Vocabulary for IELTS Speaking | Research & Technology Terms",
  description:
    "Master science and innovation vocabulary for IELTS Speaking. Learn advanced terms like genetic engineering, space exploration, medical breakthroughs with examples for Band 7-9.",
  keywords: [
    "IELTS science vocabulary",
    "genetic engineering IELTS",
    "space exploration vocabulary",
    "medical breakthroughs IELTS",
    "research vocabulary",
    "Band 7-9 science terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Genetic Engineering",
    definition:
      "The direct manipulation of an organism's genes using biotechnology, which has the potential to eliminate certain hereditary diseases and improve human health.",
    example:
      "Genetic engineering has the potential to eliminate certain hereditary diseases and revolutionize modern medicine.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Gene therapy", "Biotechnology"],
    pronunciation: "/dʒəˈnetɪk ˌendʒəˈnɪrɪŋ/",
    icon: Dna,
  },
  {
    term: "Space Exploration",
    definition:
      "The discovery and exploration of celestial structures in outer space by means of space technology, advancing our understanding of the universe and inspiring future generations.",
    example:
      "Space exploration advances technology and inspires future generations to pursue careers in science and engineering.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Aerospace research", "Cosmic exploration"],
    pronunciation: "/speɪs ˌeksplərˈeɪʃən/",
    icon: Rocket,
  },
  {
    term: "Medical Breakthroughs",
    definition:
      "Significant discoveries or advances in medical science that dramatically improve treatment options and increase life expectancy for patients.",
    example:
      "Medical breakthroughs have significantly increased life expectancy and improved quality of life worldwide.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Medical advances", "Healthcare innovations"],
    pronunciation: "/ˈmedɪkəl ˈbreɪkˌθruz/",
    icon: Microscope,
  },
  {
    term: "Renewable Technologies",
    definition:
      "Scientific innovations focused on developing sustainable energy sources and environmental solutions to reduce dependence on fossil fuels.",
    example:
      "Renewable technologies are crucial to reduce environmental damage and ensure sustainable energy for future generations.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Green technology", "Sustainable innovation"],
    pronunciation: "/rɪˈnuəbəl tekˈnɑlədʒiz/",
    icon: Zap,
  },
  {
    term: "Research Funding",
    definition:
      "Financial support provided for scientific research and development, which is necessary for continued scientific innovation and progress.",
    example:
      "Sufficient research funding is necessary for scientific innovation and maintaining competitive advantages in technology.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Scientific investment", "Research grants"],
    pronunciation: "/rɪˈsɜrtʃ ˈfʌndɪŋ/",
    icon: Microscope,
  },
];
