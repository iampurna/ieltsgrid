import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTestSection } from "@/lib/mdx";
import ReadingResultsInterface from "../../../../components/test/ReadingResultsInterface";

interface Props {
  params: { testId: string; sectionId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { testId, sectionId } = params;

  return {
    title: `Test Results - Reading Test ${testId} Section ${sectionId} | IELTSGrid`,
    description: `View your detailed results and performance analysis for IELTS Reading practice test.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ReadingResultsPage({ params }: Props) {
  const { testId, sectionId } = params;
  const section = await getTestSection("reading", testId, sectionId);

  if (!section) {
    notFound();
  }

  return (
    <ReadingResultsInterface
      testId={testId}
      sectionId={sectionId}
      section={section}
    />
  );
}
