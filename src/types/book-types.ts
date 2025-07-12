export interface Chapter {
  id: number;
  title: string;
  content: string;
  publishedAt: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  image: string;
  traits: string[];
}

export interface TriviaQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}