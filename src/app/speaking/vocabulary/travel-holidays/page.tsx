import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Smartphone,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Technology Vocabulary for IELTS Speaking | Digital Innovation Terms",
  description:
    "Master advanced technology vocabulary for IELTS Speaking. Learn terms like digital divide, innovation, cybersecurity with examples for Band 7-9.",
  keywords: [
    "IELTS technology vocabulary",
    "digital divide IELTS",
    "innovation vocabulary",
    "cybersecurity IELTS",
    "automation vocabulary",
    "Band 7-9 technology terms",
  ],
};

const travelHolidaysTerms = [
  {
    term: "Cultural Tourism",
    definition:
      "Travel focused on experiencing the culture, heritage, arts, and lifestyle of different regions, promoting cultural exchange and understanding.",
    example:
      "Cultural tourism promotes understanding between different societies and preserves traditional heritage.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Heritage tourism", "Cultural travel"],
    pronunciation: "/ˈkʌltʃərəl ˈtʊrˌɪzəm/",
    icon: "🏛️",
  },
  {
    term: "Sustainable Travel",
    definition:
      "Tourism practices that minimize negative environmental and social impacts while providing economic benefits to local communities.",
    example:
      "Sustainable travel helps protect natural environments while supporting local economies and communities.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Eco-tourism", "Responsible tourism"],
    pronunciation: "/səˈsteɪnəbəl ˈtrævəl/",
    icon: "🌱",
  },
  {
    term: "Digital Nomad",
    definition:
      "A person who uses technology to work remotely while traveling and living in different locations around the world.",
    example:
      "The digital nomad lifestyle has become popular among young professionals seeking work-life balance.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Remote worker", "Location-independent worker"],
    pronunciation: "/ˈdɪdʒətəl ˈnoʊmæd/",
    icon: "💻",
  },
];
export default function CompletVocabularySystem() {
  return (
    <div>
      <h1>Complete IELTS Speaking Vocabulary System</h1>
      <p>All 12 topic pages following the same structure with:</p>
      <ul>
        <li>Advanced vocabulary from your IELTS documents</li>
        <li>Pronunciation guides</li>
        <li>IELTS-specific examples</li>
        <li>Navigation between topics</li>
        <li>Progress tracking</li>
        <li>Common question strategies</li>
        <li>Study tips for each topic</li>
      </ul>
    </div>
  );
}
