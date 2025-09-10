import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { TestSection, TestMeta } from "@/types";

const contentDirectory = path.join(process.cwd(), "content");

export async function getTestSection(
  type: string,
  testId: string,
  sectionId: string
): Promise<TestSection | null> {
  try {
    const filePath = path.join(
      contentDirectory,
      type,
      testId,
      `section-${sectionId}.mdx`
    );

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      meta: data as TestMeta,
      content,
      questions: [], // Questions will be parsed from content
    };
  } catch (error) {
    console.error(
      `Error loading test section: ${type}/${testId}/section-${sectionId}`,
      error
    );
    return null;
  }
}

export async function getAllTests(
  type: string
): Promise<
  Array<{ id: string; title: string; sections: number; difficulty: string }>
> {
  try {
    const typeDir = path.join(contentDirectory, type);

    if (!fs.existsSync(typeDir)) {
      return [];
    }

    const testDirs = fs.readdirSync(typeDir);
    const tests = [];

    for (const testDir of testDirs) {
      const testPath = path.join(typeDir, testDir);
      if (fs.statSync(testPath).isDirectory()) {
        const metaPath = path.join(testPath, "meta.json");
        if (fs.existsSync(metaPath)) {
          const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
          tests.push({
            id: testDir,
            ...meta,
          });
        }
      }
    }

    return tests;
  } catch (error) {
    console.error(`Error loading ${type} tests:`, error);
    return [];
  }
}
