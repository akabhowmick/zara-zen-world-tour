export interface Chapter {
  id: number;
  title: string;
  content: string;
  publishedAt: string;
  image: string;
  cover?: string; // optional: image url for the card
  images?: string[];
  pages?: string[];
  countryCode?: string;
  country: string;
  subtitle?: string; // optional: a short teaser line
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
