import { ReadingProgress, ListeningProgress, TestProgress } from "@/types";

const STORAGE_KEYS = {
  READING_PROGRESS: "reading_progress",
  LISTENING_PROGRESS: "listening_progress",
  USER_PREFERENCES: "user_preferences",
};

export class StorageManager {
  static getReadingProgress(): ReadingProgress {
    if (typeof window === "undefined") return {};
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.READING_PROGRESS);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error("Error reading progress from storage:", error);
      return {};
    }
  }

  static saveReadingProgress(
    testId: string,
    sectionId: string,
    progress: TestProgress
  ): void {
    if (typeof window === "undefined") return;
    try {
      const currentProgress = this.getReadingProgress();
      if (!currentProgress[testId]) {
        currentProgress[testId] = {};
      }
      currentProgress[testId][sectionId] = {
        ...progress,
        lastSaved: Date.now(),
      };
      localStorage.setItem(
        STORAGE_KEYS.READING_PROGRESS,
        JSON.stringify(currentProgress)
      );
    } catch (error) {
      console.error("Error saving reading progress:", error);
    }
  }

  static getListeningProgress(): ListeningProgress {
    if (typeof window === "undefined") return {};
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.LISTENING_PROGRESS);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error("Error reading listening progress from storage:", error);
      return {};
    }
  }

  static saveListeningProgress(
    testId: string,
    sectionId: string,
    progress: TestProgress & {
      audioProgress: number;
      playCount: number;
      rewindCount: number;
    }
  ): void {
    if (typeof window === "undefined") return;
    try {
      const currentProgress = this.getListeningProgress();
      if (!currentProgress[testId]) {
        currentProgress[testId] = {};
      }
      currentProgress[testId][sectionId] = {
        ...progress,
        lastSaved: Date.now(),
      };
      localStorage.setItem(
        STORAGE_KEYS.LISTENING_PROGRESS,
        JSON.stringify(currentProgress)
      );
    } catch (error) {
      console.error("Error saving listening progress:", error);
    }
  }

  static clearProgress(type?: "reading" | "listening"): void {
    if (typeof window === "undefined") return;
    try {
      if (type === "reading") {
        localStorage.removeItem(STORAGE_KEYS.READING_PROGRESS);
      } else if (type === "listening") {
        localStorage.removeItem(STORAGE_KEYS.LISTENING_PROGRESS);
      } else {
        localStorage.removeItem(STORAGE_KEYS.READING_PROGRESS);
        localStorage.removeItem(STORAGE_KEYS.LISTENING_PROGRESS);
      }
    } catch (error) {
      console.error("Error clearing progress:", error);
    }
  }
}
