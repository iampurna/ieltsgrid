import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTestSection } from "@/lib/mdx";
import ListeningResultsInterface from "../../../../components/test/ListeningResultsInterface";

interface Props {
  params: { testId: string; sectionId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { testId, sectionId } = params;

  return {
    title: `Test Results - Listening Test ${testId} Section ${sectionId} | IELTSGrid`,
    description: `View your detailed results and performance analysis for IELTS Listening practice test.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ListeningResultsPage({ params }: Props) {
  const { testId, sectionId } = params;
  const section = await getTestSection("listening", testId, sectionId);

  if (!section) {
    notFound();
  }

  return (
    <ListeningResultsInterface
      testId={testId}
      sectionId={sectionId}
      section={section}
    />
  );
}
