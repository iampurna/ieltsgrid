// Basic type definitions
export interface TestMeta {
    id: string;
    title: string;
    description: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    timeLimit: number;
    sections: number;
    topics: string[];
    type: 'reading' | 'listening' | 'writing' | 'speaking';
}