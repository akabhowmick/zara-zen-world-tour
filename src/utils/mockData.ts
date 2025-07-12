import type { Chapter, Character, TriviaQuestion } from "../types/book-types";

export const mockChapters: Chapter[] = [
  {
    id: 1,
    title: "The Beginning",
    content: "In the quiet town of Millbrook, where the morning mist danced between ancient oak trees, Sarah discovered something that would change everything. The old leather journal lay hidden beneath loose floorboards in her grandmother's attic, its pages yellowed with age and secrets...",
    publishedAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Secrets Unveiled",
    content: "The journal's first entry was dated fifty years ago, written in her grandmother's careful script. As Sarah read the words, she realized that everything she thought she knew about her family was built on carefully constructed lies...",
    publishedAt: "2024-01-22"
  },
  {
    id: 3,
    title: "The Discovery",
    content: "Armed with newfound knowledge, Sarah ventured into the old forest behind her grandmother's house. The trees seemed to whisper ancient secrets, and with each step, she felt herself being drawn deeper into a mystery that spanned generations...",
    publishedAt: "2024-01-29"
  }
];

export const mockCharacters: Character[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    description: "A young woman who discovers her family's hidden past through her grandmother's journal.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    traits: ["Curious", "Brave", "Determined", "Thoughtful"]
  },
  {
    id: 2,
    name: "Eleanor Mitchell",
    description: "Sarah's grandmother, keeper of family secrets and the original journal writer.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    traits: ["Wise", "Mysterious", "Protective", "Strong-willed"]
  },
  {
    id: 3,
    name: "Marcus Thompson",
    description: "A local historian who becomes Sarah's ally in uncovering the truth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    traits: ["Knowledgeable", "Helpful", "Analytical", "Trustworthy"]
  }
];

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