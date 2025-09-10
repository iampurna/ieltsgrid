import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function formatDuration(duration: string): string {
  const [minutes, seconds] = duration.split(":").map(Number);
  return `${minutes}m ${seconds}s`;
}

// BAND_SCORE_MAPPING moved here from constants
export const BAND_SCORE_MAPPING = {
  reading: {
    40: 9.0,
    39: 9.0,
    38: 8.5,
    37: 8.5,
    36: 8.0,
    35: 8.0,
    34: 7.5,
    33: 7.5,
    32: 7.0,
    31: 7.0,
    30: 7.0,
    29: 6.5,
    28: 6.5,
    27: 6.5,
    26: 6.0,
    25: 6.0,
    24: 6.0,
    23: 6.0,
    22: 5.5,
    21: 5.5,
    20: 5.5,
    19: 5.5,
    18: 5.0,
    17: 5.0,
    16: 5.0,
    15: 5.0,
    14: 4.5,
    13: 4.5,
    12: 4.0,
    11: 4.0,
    10: 4.0,
    9: 3.5,
    8: 3.5,
    7: 3.0,
    6: 3.0,
    5: 2.5,
    4: 2.5,
    3: 2.0,
    2: 1.5,
    1: 1.0,
    0: 0,
  },
  listening: {
    40: 9.0,
    39: 9.0,
    38: 8.5,
    37: 8.5,
    36: 8.0,
    35: 8.0,
    34: 7.5,
    33: 7.5,
    32: 7.0,
    31: 7.0,
    30: 7.0,
    29: 6.5,
    28: 6.5,
    27: 6.5,
    26: 6.0,
    25: 6.0,
    24: 6.0,
    23: 6.0,
    22: 5.5,
    21: 5.5,
    20: 5.5,
    19: 5.5,
    18: 5.0,
    17: 5.0,
    16: 5.0,
    15: 5.0,
    14: 4.5,
    13: 4.5,
    12: 4.0,
    11: 4.0,
    10: 4.0,
    9: 3.5,
    8: 3.5,
    7: 3.0,
    6: 3.0,
    5: 2.5,
    4: 2.5,
    3: 2.0,
    2: 1.5,
    1: 1.0,
    0: 0,
  },
};

export function calculateBandScore(
  correct: number,
  total: number,
  type: "reading" | "listening"
): number {
  const mapping = BAND_SCORE_MAPPING[type];
  return mapping[correct as keyof typeof mapping] || 0;
}

export function getScoreColor(bandScore: number): string {
  if (bandScore >= 8.5) return "text-green-600";
  if (bandScore >= 7.0) return "text-blue-600";
  if (bandScore >= 6.0) return "text-yellow-600";
  if (bandScore >= 5.0) return "text-orange-600";
  return "text-red-600";
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case "beginner":
      return "text-green-600";
    case "intermediate":
      return "text-yellow-600";
    case "advanced":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-");
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}
