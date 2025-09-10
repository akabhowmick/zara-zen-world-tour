import type { Chapter } from "../types/book-types";
import chapterImage from "../assets/Character_Images/zara_main.png";
import { japanChapter } from "./Chapters_Info/Asia_Volume_1/Chapter_01_Japan";

import { chinaChapter } from "./Chapters_Info/Asia_Volume_1/Chapter_03_China";
import { southKoreaChapter } from "./Chapters_Info/Asia_Volume_1/Chapter_02_South_Korea";

export const chapters: Chapter[] = [
  japanChapter,
  chinaChapter,
  {
    id: 4,
    title: "Chapter 3: Lanterns of Thailand",
    content: `Next, Zara and Zen arrived in Chiang Mai during the Yi Peng lantern festival. Lanterns floated into the sky like stars, and the dogs joined local children in crafting paper lanterns with wishes inside. They tasted mango sticky rice, rode a tuk-tuk through bustling night markets, and learned how to greet others with a respectful “wai.” Zen got slightly too excited at the floating lanterns and accidentally toppled a flower stand—luckily, everyone laughed.`,
    publishedAt: "2025-07-07",
    image: chapterImage,
    country: "Thailand",
  },
  {
    id: 5,
    title: "Chapter 4: Gardens in the Sky – Singapore",
    content: `In Singapore, Zara and Zen marveled at the futuristic Supertree Grove in Gardens by the Bay. They sniffed fragrant orchids and posed beneath a stunning rainbow that arced over misty mountains in the distance. The duo explored Changi Airport, finding a butterfly garden, movie theater, and even a rooftop pool! They admired the city’s mix of cultures—from Little India to Chinatown—and were warmly welcomed everywhere they went.`,
    publishedAt: "2025-07-09",
    image: chapterImage,
    country: "Singapore",
  },
  southKoreaChapter,
  {
    id: 7,
    title: "Chapter 6: Colors of India",
    content: `Their final stop was India, where vibrant sights, scents, and sounds overwhelmed their senses in the best way. They danced in a Holi celebration, tails splattered with colors as they chased each other through joyful crowds. At the Taj Mahal, they gazed in awe and whispered about love and legacy. They rode tuk-tuks through Jaipur’s pink streets and found peace during a quiet sunset on the Ganges River, reflecting on all they’d learned.`,
    publishedAt: "2025-07-13",
    image: chapterImage,
    country: "India",
  },
];
