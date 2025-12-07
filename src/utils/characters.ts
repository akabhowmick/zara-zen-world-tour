import type { Character } from "../types/book-types";
import ZenImage from "../assets/Character_Images/zen_main.png";
import ZaraImage from "../assets/Character_Images/zara_main.png";
import HaruImage from "../assets/Character_Images/CHARACTERS/1.1Haru1.png";
// import HaruImage from "../assets/Character_Images/CHARACTERS/1.1Haru1.png";
// import HaruImage from "../assets/Character_Images/CHARACTERS/1.1Haru1.png";
// import HaruImage from "../assets/Character_Images/CHARACTERS/1.1Haru1.png";
// import HaruImage from "../assets/Character_Images/CHARACTERS/1.1Haru1.png";
// import HaruImage from "../assets/Character_Images/CHARACTERS/1.1Haru1.png";
// import HaruImage from "../assets/Character_Images/CHARACTERS/1.1Haru1.png";
// import HaruImage from "../assets/Character_Images/CHARACTERS/1.1Haru1.png";
// import HaruImage from "../assets/Character_Images/CHARACTERS/1.1Haru1.png";
// import HaruImage from "../assets/Character_Images/CHARACTERS/1.1Haru1.png";

export const mockCharacters: Character[] = [
  {
    id: 1,
    name: "Zara",
    description:
      "A small, fluffy Pomeranian with a lightened golden-orange coat and soft cream accents. She has large, expressive eyes and a cheerful, curious personality. Zara wears a purple cable-knit sweater and travels across Asia with Zen.",
    image: ZaraImage,
    traits: ["Cheerful", "Curious", "Petite", "Fluffy", "Loves Sushi"],
  },
  {
    id: 2,
    name: "Zen",
    description:
      "A small golden mixed-breed dog with a slightly lighter coat than Zara. He has a longer face, floppy ears, and a sweet, playful puppy-like expression. Zen wears a light blue cable-knit sweater and enjoys exploring new places.",
    image: ZenImage,
    traits: ["Playful", "Sweet", "Inquisitive", "Floppy-eared", "Foodie"],
  },
  {
    id: 3,
    name: "Haru",
    description:
      "",
    image: HaruImage,
    traits: ["", ""],
  },
];
