import type { TriviaQuestion } from "../types/book-types";

export const countries = ["India", "China", "Japan", "SouthKorea", "Thailand", "Singapore"] as const;
export type Country = (typeof countries)[number];


export const countriesWithFlags = [
  {
    name: "India",
    flag: "https://flagcdn.com/w40/in.png",
  },
  {
    name: "China",
    flag: "https://flagcdn.com/w40/cn.png",
  },
  { name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
  { name: "South Korea", flag: "https://flagcdn.com/w40/kr.png" },
  { name: "Thailand", flag: "https://flagcdn.com/w40/th.png" },
  { name: "Singapore", flag: "https://flagcdn.com/w40/sg.png" },
];

export const indiaQuestions: TriviaQuestion[] = [
  {
    id: 1,
    question: "What is the capital city of India?",
    options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
    correctAnswer: 1,
    explanation: "New Delhi is the capital city of India.",
  },
  {
    id: 2,
    question: "Which river is considered the most sacred in India?",
    options: ["Godavari", "Ganga", "Yamuna", "Narmada"],
    correctAnswer: 1,
    explanation: "The Ganga (Ganges) River is regarded as sacred by millions of Hindus.",
  },
  {
    id: 3,
    question: "Who was the leader of the Indian independence movement?",
    options: ["Subhash Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi", "B. R. Ambedkar"],
    correctAnswer: 2,
    explanation:
      "Mahatma Gandhi led India’s non-violent struggle for independence from British rule.",
  },
  {
    id: 4,
    question: "What is the national animal of India?",
    options: ["Elephant", "Lion", "Tiger", "Leopard"],
    correctAnswer: 2,
    explanation: "The Bengal tiger is the national animal of India.",
  },
  {
    id: 5,
    question: "Which festival is known as the Festival of Colors?",
    options: ["Diwali", "Eid", "Navratri", "Holi"],
    correctAnswer: 3,
    explanation: "Holi is a spring festival celebrated with colors across India.",
  },
  {
    id: 6,
    question: "What is the official currency of India?",
    options: ["Rupee", "Dollar", "Taka", "Yen"],
    correctAnswer: 0,
    explanation: "The Indian Rupee (INR) is the official currency of India.",
  },
  {
    id: 7,
    question: "Where is the Taj Mahal located?",
    options: ["Delhi", "Jaipur", "Varanasi", "Agra"],
    correctAnswer: 3,
    explanation: "The Taj Mahal is located in Agra and is a UNESCO World Heritage Site.",
  },
  {
    id: 8,
    question: "Which Indian state is famous for its backwaters?",
    options: ["Kerala", "Goa", "Tamil Nadu", "Assam"],
    correctAnswer: 0,
    explanation: "Kerala is known for its network of serene backwaters and houseboats.",
  },
  {
    id: 9,
    question: "Which dance form originates from Tamil Nadu?",
    options: ["Kathak", "Odissi", "Bharatanatyam", "Kuchipudi"],
    correctAnswer: 2,
    explanation: "Bharatanatyam is a classical Indian dance form from Tamil Nadu.",
  },
  {
    id: 10,
    question: "What is the Indian national flower?",
    options: ["Rose", "Sunflower", "Lotus", "Marigold"],
    correctAnswer: 2,
    explanation: "The lotus is the national flower of India, symbolizing purity and beauty.",
  },
];

export const chinaQuestions: TriviaQuestion[] = [
  {
    id: 1,
    question: "What is the capital city of China?",
    options: ["Shanghai", "Beijing", "Guangzhou", "Hong Kong"],
    correctAnswer: 1,
    explanation: "Beijing is the capital city and one of the most historic cities in China.",
  },
  {
    id: 2,
    question: "What is the Great Wall of China primarily made of?",
    options: ["Steel", "Stone and bricks", "Wood", "Bamboo"],
    correctAnswer: 1,
    explanation: "The Great Wall is primarily made of stone, bricks, and tamped earth.",
  },
  {
    id: 3,
    question: "Which Chinese philosopher founded Confucianism?",
    options: ["Laozi", "Sun Tzu", "Confucius", "Zhuangzi"],
    correctAnswer: 2,
    explanation: "Confucius was a Chinese philosopher and teacher who founded Confucianism.",
  },
  {
    id: 4,
    question: "What is the Chinese zodiac animal for 2024?",
    options: ["Rat", "Tiger", "Dragon", "Rabbit"],
    correctAnswer: 3,
    explanation: "2024 is the Year of the Rabbit in the Chinese zodiac cycle.",
  },
  {
    id: 5,
    question: "Which river is the longest in China?",
    options: ["Yellow River", "Yangtze River", "Pearl River", "Mekong River"],
    correctAnswer: 1,
    explanation:
      "The Yangtze River is the longest river in China and the third longest in the world.",
  },
  {
    id: 6,
    question: "Which city is known as the financial hub of China?",
    options: ["Beijing", "Chengdu", "Shanghai", "Xi'an"],
    correctAnswer: 2,
    explanation: "Shanghai is a major global financial center and the largest city in China.",
  },
  {
    id: 7,
    question: "What is the name of China’s high-speed rail system?",
    options: ["Bullet Line", "CRH", "Shinkansen", "Red Arrow"],
    correctAnswer: 1,
    explanation: "China Railway High-speed (CRH) is the branding for high-speed rail in China.",
  },
  {
    id: 8,
    question: "What is China’s official currency?",
    options: ["Yuan", "Won", "Renminbi", "Ruble"],
    correctAnswer: 2,
    explanation: "Renminbi is the official currency; the yuan is its basic unit.",
  },
  {
    id: 9,
    question: "Which festival marks the lunar new year in China?",
    options: [
      "Dragon Boat Festival",
      "Mid-Autumn Festival",
      "Spring Festival",
      "Qingming Festival",
    ],
    correctAnswer: 2,
    explanation:
      "The Spring Festival, or Chinese New Year, marks the beginning of the lunar calendar year.",
  },
  {
    id: 10,
    question: "Which traditional Chinese dish is made of dumplings?",
    options: ["Baozi", "Zongzi", "Jiaozi", "Tangyuan"],
    correctAnswer: 2,
    explanation: "Jiaozi are Chinese dumplings often eaten during Lunar New Year.",
  },
];

export const japanQuestions: TriviaQuestion[] = [
  {
    id: 1,
    question: "What is the capital city of Japan?",
    options: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"],
    correctAnswer: 1,
    explanation: "Tokyo is the capital and largest metropolitan area in Japan.",
  },
  {
    id: 2,
    question: "What is the traditional Japanese garment called?",
    options: ["Hanbok", "Kimono", "Qipao", "Sari"],
    correctAnswer: 1,
    explanation: "The kimono is a traditional Japanese robe worn on special occasions.",
  },
  {
    id: 3,
    question: "Which mountain is the tallest in Japan?",
    options: ["Mount Aso", "Mount Hiei", "Mount Fuji", "Mount Tate"],
    correctAnswer: 2,
    explanation: "Mount Fuji is Japan's tallest and most iconic mountain.",
  },
  {
    id: 4,
    question: "What is sushi traditionally wrapped in?",
    options: ["Lettuce", "Rice paper", "Seaweed", "Banana leaf"],
    correctAnswer: 2,
    explanation: "Sushi is commonly wrapped in seaweed called nori.",
  },
  {
    id: 5,
    question: "Which religion is indigenous to Japan?",
    options: ["Taoism", "Shinto", "Buddhism", "Confucianism"],
    correctAnswer: 1,
    explanation: "Shinto is Japan's native religion, centered around kami (spirits).",
  },
  {
    id: 6,
    question: "What is the Japanese art of paper folding called?",
    options: ["Ikebana", "Origami", "Sumi-e", "Calligraphy"],
    correctAnswer: 1,
    explanation: "Origami is the traditional Japanese art of paper folding.",
  },
  {
    id: 7,
    question: "Which Japanese food is a type of noodle?",
    options: ["Miso", "Sashimi", "Udon", "Tempura"],
    correctAnswer: 2,
    explanation: "Udon is a thick wheat flour noodle commonly eaten in Japan.",
  },
  {
    id: 8,
    question: "What is Japan’s famous high-speed train called?",
    options: ["TGV", "Maglev", "Shinkansen", "SkyRail"],
    correctAnswer: 2,
    explanation: "The Shinkansen is Japan’s bullet train known for speed and punctuality.",
  },
  {
    id: 9,
    question: "Which city is known for its temples and geisha culture?",
    options: ["Osaka", "Kyoto", "Nagoya", "Sapporo"],
    correctAnswer: 1,
    explanation: "Kyoto is famous for its historical temples, shrines, and geisha traditions.",
  },
  {
    id: 10,
    question: "What is the name of Japan’s national flower?",
    options: ["Lotus", "Orchid", "Cherry Blossom", "Sunflower"],
    correctAnswer: 2,
    explanation: "The cherry blossom (sakura) is Japan’s national flower and symbol of spring.",
  },
];

export const thailandQuestions: TriviaQuestion[] = [
  {
    id: 1,
    question: "What is the capital city of Thailand?",
    options: ["Chiang Mai", "Bangkok", "Phuket", "Pattaya"],
    correctAnswer: 1,
    explanation: "Bangkok is the capital and most populous city of Thailand.",
  },
  {
    id: 2,
    question: "Which festival in Thailand involves large water fights?",
    options: ["Loy Krathong", "Songkran", "Yi Peng", "Vesak"],
    correctAnswer: 1,
    explanation: "Songkran is the Thai New Year festival known for nationwide water fights.",
  },
  {
    id: 3,
    question: "Which animal is a national symbol and highly revered in Thailand?",
    options: ["Tiger", "Elephant", "Monkey", "Peacock"],
    correctAnswer: 1,
    explanation: "Elephants are a national symbol of Thailand and play a major cultural role.",
  },
  {
    id: 4,
    question: "What is the currency of Thailand?",
    options: ["Ringgit", "Baht", "Rupee", "Dong"],
    correctAnswer: 1,
    explanation: "The Thai Baht is the official currency of Thailand.",
  },
  {
    id: 5,
    question: "What is Thailand’s most famous noodle dish?",
    options: ["Pho", "Pad Thai", "Laksa", "Udon"],
    correctAnswer: 1,
    explanation: "Pad Thai is Thailand’s most popular stir-fried noodle dish.",
  },
  {
    id: 6,
    question: "Which religion is followed by the majority of Thai people?",
    options: ["Christianity", "Hinduism", "Buddhism", "Islam"],
    correctAnswer: 2,
    explanation: "Buddhism is practiced by the vast majority of Thai citizens.",
  },
  {
    id: 7,
    question: "Which island is known for its Full Moon Party?",
    options: ["Koh Samui", "Koh Tao", "Koh Phangan", "Koh Phi Phi"],
    correctAnswer: 2,
    explanation: "Koh Phangan is famous for its monthly Full Moon Party on Haad Rin Beach.",
  },
  {
    id: 8,
    question: "What is the name of Thailand’s traditional dance drama?",
    options: ["Kabuki", "Bharatanatyam", "Khon", "Samba"],
    correctAnswer: 2,
    explanation: "Khon is a classical masked dance drama from Thailand.",
  },
  {
    id: 9,
    question: "Which structure is commonly found at Thai Buddhist temples?",
    options: ["Minaret", "Pagoda", "Stupa", "Ziggurat"],
    correctAnswer: 2,
    explanation: "Stupas are dome-shaped structures used to house Buddhist relics in Thailand.",
  },
  {
    id: 10,
    question: "Which flower is commonly used in Thai religious offerings?",
    options: ["Rose", "Lotus", "Jasmine", "Orchid"],
    correctAnswer: 1,
    explanation: "The lotus is a sacred flower in Buddhism and commonly used in offerings.",
  },
];

export const southKoreaQuestions: TriviaQuestion[] = [
  {
    id: 1,
    question: "What is the capital city of South Korea?",
    options: ["Busan", "Seoul", "Incheon", "Daegu"],
    correctAnswer: 1,
    explanation: "Seoul is the capital and largest city of South Korea.",
  },
  {
    id: 2,
    question: "What is the name of Korea’s writing system?",
    options: ["Kanji", "Katakana", "Hangul", "Hanja"],
    correctAnswer: 2,
    explanation: "Hangul is the Korean alphabet, created in the 15th century.",
  },
  {
    id: 3,
    question: "What is the traditional Korean dish made of fermented vegetables?",
    options: ["Tteokbokki", "Bibimbap", "Kimchi", "Japchae"],
    correctAnswer: 2,
    explanation: "Kimchi is a spicy, fermented vegetable dish and a Korean staple.",
  },
  {
    id: 4,
    question: "Which Korean martial art is known for its high kicks?",
    options: ["Judo", "Taekwondo", "Karate", "Kung Fu"],
    correctAnswer: 1,
    explanation: "Taekwondo is a Korean martial art known for fast kicks and agility.",
  },
  {
    id: 5,
    question: "What is the name of the border between North and South Korea?",
    options: ["Ceasefire Line", "Armistice Zone", "Peace Strip", "DMZ"],
    correctAnswer: 3,
    explanation: "The Demilitarized Zone (DMZ) separates North and South Korea.",
  },
  {
    id: 6,
    question: "What is the traditional Korean clothing called?",
    options: ["Kimono", "Hanbok", "Qipao", "Cheongsam"],
    correctAnswer: 1,
    explanation: "Hanbok is Korea’s traditional clothing, worn during festivals and ceremonies.",
  },
  {
    id: 7,
    question: "What is South Korea's national flower?",
    options: ["Lotus", "Cherry Blossom", "Rose of Sharon", "Lily"],
    correctAnswer: 2,
    explanation: "The Rose of Sharon (Mugunghwa) is the national flower of South Korea.",
  },
  {
    id: 8,
    question: "Which South Korean group gained global fame with the song 'Dynamite'?",
    options: ["BLACKPINK", "EXO", "BIGBANG", "BTS"],
    correctAnswer: 3,
    explanation: "BTS became globally popular with hits like 'Dynamite' and 'Butter.'",
  },
  {
    id: 9,
    question: "Which mountain is the tallest in South Korea?",
    options: ["Seoraksan", "Hallasan", "Taebaeksan", "Jirisan"],
    correctAnswer: 1,
    explanation: "Hallasan, located on Jeju Island, is the highest peak in South Korea.",
  },
  {
    id: 10,
    question: "What is the name for Korean historical dramas?",
    options: ["K-sageuk", "Hanji", "Sageuk", "Hwarang"],
    correctAnswer: 2,
    explanation: "Sageuk refers to South Korean TV dramas and films set in historical periods.",
  },
];

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
  India: indiaQuestions,
  China: chinaQuestions,
  Japan: japanQuestions,
  Thailand: thailandQuestions,
  SouthKorea: southKoreaQuestions,
  Singapore: singaporeQuestions,
};
