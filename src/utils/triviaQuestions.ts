import type { TriviaQuestion } from "../types/book-types";

export const mockTrivia: TriviaQuestion[] = [
  {
    id: 1,
    question: "Where does Sarah find her grandmother's journal?",
    options: ["In the basement", "Under the floorboards in the attic", "In a desk drawer", "Behind a bookshelf"],
    correctAnswer: 1,
    explanation: "Sarah discovers the journal hidden beneath loose floorboards in her grandmother's attic."
  },
  {
    id: 2,
    question: "How old is the first entry in the journal?",
    options: ["25 years old", "50 years old", "75 years old", "100 years old"],
    correctAnswer: 1,
    explanation: "The journal's first entry was dated fifty years ago, written in her grandmother's careful script."
  },
  {
    id: 3,
    question: "What is the name of the town where the story takes place?",
    options: ["Millbrook", "Millfield", "Millhaven", "Millstone"],
    correctAnswer: 0,
    explanation: "The story takes place in the quiet town of Millbrook, where morning mist dances between ancient oak trees."
  }
];