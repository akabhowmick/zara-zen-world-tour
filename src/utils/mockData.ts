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
    name: "Zara",
    description: "A small, fluffy Pomeranian with a lightened golden-orange coat and soft cream accents. She has large, expressive eyes and a cheerful, curious personality. Zara wears a purple cable-knit sweater and travels across Asia with Zen.",
    image: "../assets/Character_images/zara_main.png", // replace with actual image path
    traits: ["Cheerful", "Curious", "Petite", "Fluffy", "Loves Sushi"]
  },
  {
    id: 2,
    name: "Zen",
    description: "A small golden mixed-breed dog with a slightly lighter coat than Zara. He has a longer face, floppy ears, and a sweet, playful puppy-like expression. Zen wears a light blue cable-knit sweater and enjoys exploring new places.",
    image: "../assets/Character_images/zen_main.png", // replace with actual image path
    traits: ["Playful", "Sweet", "Inquisitive", "Floppy-eared", "Foodie"]
  },
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