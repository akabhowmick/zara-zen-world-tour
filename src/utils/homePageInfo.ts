import { Book, Users, Trophy, PencilLine } from "lucide-react";

export const tabs = [
  {
    key: "/chapters",
    label: "Chapters",
    icon: Book,
    description:
      "Follow Zara & Zen across real-world locations with heartwarming tales and cultural fun.",
  },
  {
    key: "/characters",
    label: "Characters",
    icon: Users,
    description:
      "Meet Zara, Zen, and their fluffy friends. Learn their stories and what makes them special!",
  },
  {
    key: "/trivia",
    label: "Trivia",
    icon: Trophy,
    description:
      "Play themed trivia games for each country they visit. Can you fetch a perfect score?",
  },
  {
    key: "/blog",
    label: "Blogs",
    icon: PencilLine,
    description:
      "Peek behind the scenes with author notes, fun extras, and tail-wagging community posts.",
  },
];
