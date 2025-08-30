// src/utils/homePageInfo.ts
import { Book, Users, Trophy, PencilLine } from "lucide-react";

// doodles (replace with your files)
import doodleChapters from "../assets/Chapters/01_Japan/1JP10.png"; // e.g., Taj Mahal / Rialto sketch
import doodleCharacters from "../assets/Chapters/03_China/3CH1.png"; // Zen peeking / both pups
import doodleTrivia from "../assets/Chapters/04_Thailand/4TH11.jpg"; // quiz bubble, stars
import doodleBlogs from "../assets/Chapters/05_Singapore/5SN10.png"; // notebook + pen

export const tabs = [
  {
    key: "/chapters",
    label: "Chapters",
    icon: Book,
    description:
      "Follow Zara & Zen across real-world locations with heartwarming tales and cultural fun.",
    doodle: doodleChapters,
    doodleAlt: "Landmark sketch",
  },
  {
    key: "/characters",
    label: "Characters",
    icon: Users,
    description:
      "Meet Zara, Zen, and their fluffy friends. Learn their stories and what makes them special!",
    doodle: doodleCharacters,
    doodleAlt: "Zara & Zen doodle",
  },
  {
    key: "/trivia",
    label: "Trivia",
    icon: Trophy,
    description:
      "Play themed trivia games for each country they visit. Can you fetch a perfect score?",
    doodle: doodleTrivia,
    doodleAlt: "Trivia icons",
  },
  {
    key: "/blog",
    label: "Blogs",
    icon: PencilLine,
    description:
      "Peek behind the scenes with author notes, fun extras, and tail-wagging community posts.",
    doodle: doodleBlogs,
    doodleAlt: "Diary doodle",
  },
];
