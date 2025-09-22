import {
  indiaQuestions,
  chinaQuestions,
  japanQuestions,
  thailandQuestions,
  southKoreaQuestions,
  singaporeQuestions,
  turkeyQuestions,
  greeceQuestions,
  italyQuestions,
  germanyQuestions,
  franceQuestions,
  spainQuestions,
} from "./triviaQuestions";

export const countries = [
  "India",
  "China",
  "Japan",
  "SouthKorea",
  "Thailand",
  "Singapore",
  "Turkey",
  "Greece",
  "Italy",
  "Germany",
  "France",
  "Spain",
] as const;
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
  { name: "Turkey", flag: "https://flagcdn.com/w40/tr.png" },
  { name: "Greece", flag: "https://flagcdn.com/w40/gr.png" },
  { name: "Italy", flag: "https://flagcdn.com/w40/it.png" },
  { name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
  { name: "France", flag: "https://flagcdn.com/w40/fr.png" },
  { name: "Spain", flag: "https://flagcdn.com/w40/es.png" },
];

export const mockTrivia = {
  India: indiaQuestions,
  China: chinaQuestions,
  Japan: japanQuestions,
  Thailand: thailandQuestions,
  SouthKorea: southKoreaQuestions,
  Singapore: singaporeQuestions,
  Turkey: turkeyQuestions,
  Greece: greeceQuestions,
  Italy: italyQuestions,
  Germany: germanyQuestions,
  France: franceQuestions,
  Spain: spainQuestions,
};
