import type { TriviaQuestion } from "../types/book-types";

export const countries = ["india", "china", "japan", "southKorea", "thailand", "singapore"];

export const indiaQuestions: TriviaQuestion[] = [];
export const chinaQuestions: TriviaQuestion[] = [];
export const japanQuestions: TriviaQuestion[] = [];
export const thailandQuestions: TriviaQuestion[] = [];
export const southKoreaQuestions: TriviaQuestion[] = [];

const singaporeQuestions: TriviaQuestion[] = [
  {
    id: 1,
    question: "What is the capital of Singapore?",
    options: ["Singapore City", "Sentosa", "Marina Bay", "Changi"],
    correctAnswer: 0,
    explanation: "Singapore is a city-state, so its capital is Singapore itself.",
  },
  {
    id: 2,
    question: "Which popular attraction has a boat-shaped structure on top?",
    options: ["Esplanade", "Gardens by the Bay", "Marina Bay Sands", "Raffles Hotel"],
    correctAnswer: 2,
    explanation: "Marina Bay Sands is an iconic resort with a ship-shaped SkyPark on top.",
  },
  {
    id: 3,
    question: "What is Singapore’s main airport called?",
    options: ["Hong Kong Airport", "Marina Airport", "Changi Airport", "Penang Airport"],
    correctAnswer: 2,
    explanation: "Changi Airport is Singapore’s world-renowned international airport.",
  },
  {
    id: 4,
    question: "Which language is NOT an official language of Singapore?",
    options: ["English", "Malay", "Tamil", "Hindi"],
    correctAnswer: 3,
    explanation: "Hindi is not one of Singapore’s four official languages.",
  },
  {
    id: 5,
    question: "What is the Merlion?",
    options: ["A flower", "A dish", "A mythical creature", "A hotel"],
    correctAnswer: 2,
    explanation: "The Merlion is Singapore's mythical half-lion, half-fish symbol.",
  },
  {
    id: 6,
    question: "Which garden in Singapore features Super Trees?",
    options: ["Botanic Gardens", "Gardens by the Bay", "Bukit Timah", "Mount Faber Park"],
    correctAnswer: 1,
    explanation: "Gardens by the Bay is home to Singapore’s iconic Super Trees.",
  },
  {
    id: 7,
    question: "Which traditional district is known for its colorful shophouses and Malay culture?",
    options: ["Chinatown", "Kampong Glam", "Little India", "Holland Village"],
    correctAnswer: 1,
    explanation: "Kampong Glam is rich in Malay and Arab heritage, featuring vibrant shophouses.",
  },
  {
    id: 8,
    question: "What is the name of Singapore's national dish?",
    options: ["Roti Prata", "Satay", "Chilli Crab", "Hainanese Chicken Rice"],
    correctAnswer: 3,
    explanation: "Hainanese Chicken Rice is widely considered Singapore's national dish.",
  },
  {
    id: 9,
    question: "Which ethnic groups make up Singapore's multicultural society?",
    options: [
      "Chinese, Malay, Indian, Eurasian",
      "Chinese, Thai, Malay, Arab",
      "Indian, Vietnamese, Malay, Filipino",
      "Malay, Tamil, Korean, Japanese",
    ],
    correctAnswer: 0,
    explanation:
      "Singapore’s society is mainly composed of Chinese, Malay, Indian, and Eurasian groups.",
  },
  {
    id: 10,
    question: "Which shopping street is most famous in Singapore?",
    options: ["Marina Boulevard", "Orchard Road", "Sentosa Walk", "Chinatown Lane"],
    correctAnswer: 1,
    explanation:
      "Orchard Road is the most well-known shopping and entertainment district in Singapore.",
  },
];

export const mockTrivia = {
  india: indiaQuestions,
  china: chinaQuestions,
  japan: japanQuestions,
  thailand: thailandQuestions,
  southKorea: southKoreaQuestions,
  singapore: singaporeQuestions,
};
