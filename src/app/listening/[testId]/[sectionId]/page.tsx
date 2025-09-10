import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTestSection } from "@/lib/mdx";
import ListeningTestInterface from "../../../../components/test/ListeningTestInterface";

interface Props {
  params: { testId: string; sectionId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { testId, sectionId } = params;
  const section = await getTestSection("listening", testId, sectionId);

  if (!section) {
    return {
      title: "Test Not Found | IELTSGrid",
    };
  }

  return {
    title: `${section.meta.title} - Section ${section.meta.section} | IELTS Listening Practice`,
    description: `Practice IELTS Listening with ${section.meta.title}. Questions ${section.meta.questions}, ${section.meta.difficulty} level.`,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ListeningTestPage({ params }: Props) {
  const { testId, sectionId } = params;
  const section = await getTestSection("listening", testId, sectionId);

  if (!section) {
    notFound();
  }

  return (
    <ListeningTestInterface
      testId={testId}
      sectionId={sectionId}
      section={section}
    />
  );
}
