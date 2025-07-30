export interface Chapter {
  id: number;
  title: string;
  content: string;
  publishedAt: string;
  image: string;
  images?: string[];
  pages?: string[];
  countryCode?: string;
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
