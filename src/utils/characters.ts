import type { Character } from "../types/book-types";
import ZenImage from "../assets/Character_Images/zen_main.png";
import ZaraImage from "../assets/Character_Images/zara_main.png";
import HaruImage from "../assets/Character_Images/CHARACTERS/1.1Haru1.png";
import PixieImage from "../assets/Character_Images/CHARACTERS/1.2Pixie1.png";
import DrKimImage from "../assets/Character_Images/CHARACTERS/2.1Dr.Kim1.png";
import AkashiImage from "../assets/Character_Images/CHARACTERS/2.2Akashi1.png";
import ShifuImage from "../assets/Character_Images/CHARACTERS/3.1Shifu1.png";
import ShaoImage from "../assets/Character_Images/CHARACTERS/3.2Shao1.png";
import KritiImage from "../assets/Character_Images/CHARACTERS/4.1Kriti1.png";
import BenjiImage from "../assets/Character_Images/CHARACTERS/4.2Benji1.png";
import AminaImage from "../assets/Character_Images/CHARACTERS/5.1Amina1.png";
import NainaImage from "../assets/Character_Images/CHARACTERS/5.2Naina1.png";
import PujiImage from "../assets/Character_Images/CHARACTERS/6.1Puji1.png";
import RoyImage from "../assets/Character_Images/CHARACTERS/6.2Roy1.png";
import DemirImage from "../assets/Character_Images/CHARACTERS/7.1Demir1.png";
import VinceImage from "../assets/Character_Images/CHARACTERS/7.2Vince1.png";
import TheaImage from "../assets/Character_Images/CHARACTERS/8.1Thea1.png";
import LunaImage from "../assets/Character_Images/CHARACTERS/8.2Luna1.png";
import AleImage from "../assets/Character_Images/CHARACTERS/9.1Ale1.png";
import LeoImage from "../assets/Character_Images/CHARACTERS/9.2Leo2.png";
import FreyaImage from "../assets/Character_Images/CHARACTERS/10.1Freya1.png";
import EliseImage from "../assets/Character_Images/CHARACTERS/10.2Elise1.png";
import ClaireImage from "../assets/Character_Images/CHARACTERS/11.1Claire1.png";
import ClaudeImage from "../assets/Character_Images/CHARACTERS/11.2Claude1.png";
import MartaImage from "../assets/Character_Images/CHARACTERS/12.1Marta1.png";
import MateoImage from "../assets/Character_Images/CHARACTERS/12.2Mateo1.png";

export const bookCharacters: Character[] = [
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
    name: "Haru-san",
    description:
      "An elderly snow monkey with beige-silver fur, warm amber-gold eyes, and a gentle welcoming smile. Haru-san wears a muted plum yukata with an olive-green sash and embodies kindness, serenity, and the quiet wisdom of belonging.",
    image: HaruImage,
    traits: ["Wise", "Welcoming", "Calm", "Gentle", "Warm-hearted"],
  },

  {
    id: 4,
    name: "Pixie",
    description:
      "A cheerful penguin traveler with a cream-beige checkered sweater, fluffy earmuffs, and a camera always around her neck. She’s curious, warm, slightly clumsy, and constantly searching for beauty through her lens.",
    image: PixieImage,
    traits: ["Curious", "Warm", "Cheerful", "Observant", "Adventurous"],
  },
  {
    id: 5,
    name: "Dr. Kim",
    description:
      "A calm and nurturing black-and-white cat doctor with yellow eyes and a gentle smile. She wears a rosewood-pink hanbok under a white lab coat. Dr. Kim represents healing, empathy, and the art of slowing down to care for oneself.",
    image: DrKimImage,
    traits: ["Empathetic", "Calm", "Observant", "Nurturing", "Precise"],
  },
  {
    id: 6,
    name: "Akashi",
    description:
      "A friendly otter with a soft, expressive face and warm energy. As Dr. Kim’s trusted companion, Akashi brings levity and kindness, supporting others with patience and quiet optimism.",
    image: AkashiImage,
    traits: ["Gentle", "Supportive", "Optimistic", "Warm", "Reliable"],
  },
  {
    id: 7,
    name: "Shifu",
    description:
      "A wise, patient red panda master chef with glasses and a towel over his shoulder. Shifu embodies tradition, community, and the love passed down through shared craft.",
    image: ShifuImage,
    traits: ["Wise", "Patient", "Skilled", "Warm", "Community-focused"],
  },
  {
    id: 8,
    name: "Shao",
    description:
      "A bright and eager young red panda apprentice with an enthusiastic smile. Shao is curious, hardworking, and full of youthful excitement as he learns the family craft.",
    image: ShaoImage,
    traits: ["Curious", "Energetic", "Hardworking", "Cheerful", "Eager"],
  },
  {
    id: 9,
    name: "Kriti",
    description:
      "A gentle and confident young elephant artisan who paints traditional umbrellas. She wears a jasmine flower behind her ear and expresses beauty, joy, and meaning through every brushstroke.",
    image: KritiImage,
    traits: ["Creative", "Gentle", "Focused", "Warm", "Artistic"],
  },
  {
    id: 10,
    name: "Benji",
    description:
      "A lively beaver traveler with a green universe full of curiosity. Benji is upbeat, expressive, and always ready to learn something new as he prepares for the journey ahead.",
    image: BenjiImage,
    traits: ["Energetic", "Friendly", "Curious", "Inventive", "Bright"],
  },
  {
    id: 11,
    name: "Amina",
    description:
      "A disciplined and calm lion pilot with sleek golden fur and olive-green eyes. Amina represents confidence, precision, and the steady strength of responsibility in the skies.",
    image: AminaImage,
    traits: ["Confident", "Disciplined", "Calm", "Dependable", "Focused"],
  },
  {
    id: 12,
    name: "Naina",
    description:
      "A warm and imaginative lion architect dedicated to sustainable design. With her tawny-golden fur and thoughtful demeanor, she balances vision, empathy, and creativity.",
    image: NainaImage,
    traits: ["Creative", "Thoughtful", "Empathetic", "Visionary", "Kind"],
  },
  {
    id: 13,
    name: "Puji",
    description:
      "A spirited Indian woodpecker with bright eyes and a determined heart. Puji represents enthusiasm, curiosity, and the joy of guiding others while on her own journey.",
    image: PujiImage,
    traits: ["Enthusiastic", "Curious", "Lively", "Helpful", "Friendly"],
  },
  {
    id: 14,
    name: "Roy",
    description:
      "A regal peacock cricket coach with teal, emerald, and gold feathers. Calm, articulate, and confident, Coach Roy leads with wisdom and empathy, inspiring pride through discipline.",
    image: RoyImage,
    traits: ["Confident", "Wise", "Articulate", "Encouraging", "Graceful"],
  },
  {
    id: 15,
    name: "Demir",
    description:
      "A warm and expressive young horse artisan who weaves textiles with deep respect for tradition. Demir represents continuity, creativity, and the love carried into handmade craft.",
    image: DemirImage,
    traits: ["Creative", "Humble", "Warm", "Focused", "Artistic"],
  },
  {
    id: 16,
    name: "Vince",
    description:
      "A cheerful polar bear cub traveler with warm olive-green eyes and a black vest. Vince is calm, curious, and steady — a budding food photographer who loves capturing flavor and joy.",
    image: VinceImage,
    traits: ["Calm", "Curious", "Friendly", "Thoughtful", "Artistic"],
  },
  {
    id: 17,
    name: "Thea",
    description:
      "A bright and expressive dolphin performer in a flowy lime-green dress and flower crown. Thea radiates joy, rhythm, and freedom through music and dance.",
    image: TheaImage,
    traits: ["Joyful", "Expressive", "Playful", "Graceful", "Energetic"],
  },
  {
    id: 18,
    name: "Luna",
    description:
      "A sociable fox artist who fills her treehouse room with color. Luna’s warm, creative spirit shines through her hands-on watercolor work and her expressive approach to the world.",
    image: LunaImage,
    traits: ["Creative", "Sociable", "Expressive", "Warm", "Imaginative"],
  },
  {
    id: 19,
    name: "Alessandro",
    description:
      "A confident and innovative cheetah fashion designer in a maroon blazer. Alessandro blends tradition with bold modern ideas, always refining his craft with precision and flair.",
    image: AleImage,
    traits: ["Creative", "Stylish", "Confident", "Innovative", "Focused"],
  },
  {
    id: 20,
    name: "Leonardo",
    description:
      "A dynamic cheetah designer in an olive blazer, full of energy and vision. Leonardo pushes boundaries with youthful brilliance and a deep respect for heritage.",
    image: LeoImage,
    traits: ["Energetic", "Creative", "Bold", "Visionary", "Artistic"],
  },
  {
    id: 21,
    name: "Freya",
    description:
      "A confident squirrel journalist with honey-gold eyes and a soft analytical presence. Freya blends intellect with empathy, always seeking truth through connection.",
    image: FreyaImage,
    traits: ["Analytical", "Empathetic", "Confident", "Curious", "Articulate"],
  },
  {
    id: 22,
    name: "Elise",
    description:
      "A sharp and expressive rabbit private investigator with powder-blue eyes and a black trench coat. Elise is intelligent, perceptive, and warm — uncovering truth with heart and precision.",
    image: EliseImage,
    traits: ["Intelligent", "Perceptive", "Expressive", "Calm", "Observant"],
  },
  {
    id: 23,
    name: "Claire",
    description:
      "A joyful pâtissière hedgehog with bright blue eyes and a radiant smile. Claire wears a French-red chef’s dress and brings grace, laughter, and sweetness to every creation.",
    image: ClaireImage,
    traits: ["Joyful", "Graceful", "Warm", "Creative", "Kind"],
  },
  {
    id: 24,
    name: "Claude",
    description:
      "A warm, expressive hedgehog baker with golden-brown fur and a bright red chef jacket. Claude radiates humor, hospitality, and the joy of sharing food with others.",
    image: ClaudeImage,
    traits: ["Warm", "Expressive", "Skilled", "Friendly", "Joyful"],
  },
  {
    id: 25,
    name: "Marta",
    description:
      "A strong and grounded bull farmer with sun-kissed skin, an orange neckerchief, and olive-green overalls. Marta embodies patience, fulfillment, and the quiet pride of hard work.",
    image: MartaImage,
    traits: ["Strong", "Grounded", "Nurturing", "Patient", "Dedicated"],
  },
  {
    id: 26,
    name: "Mateo",
    description:
      "A gentle red deer beekeeper with warm honey-cream accents and a soft smile. Mateo represents harmony, care, and the simple joy of tending to living things.",
    image: MateoImage,
    traits: ["Gentle", "Warm", "Patient", "Caring", "Grounded"],
  },
];
