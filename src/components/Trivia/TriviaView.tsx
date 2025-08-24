import { useNavigate } from "react-router-dom";
import { AnimatedLanding } from "../Animated/AnimatedLanding";
import { TriviaMenu } from "./TriviaMenu";

const toKebab = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const TriviaView = () => {
  const navigate = useNavigate();

  // Called by TriviaMenu when user picks a country
  const startCountryTrivia = (country: string, id = 1) => {
    const slug = toKebab(country);
    navigate(`/trivia/${slug}+${id}`);
  };

  return (
    <AnimatedLanding title="Select a Country">
      {/* Ensure TriviaMenu calls onClick(country: string, id?: number) */}
      <TriviaMenu onClick={startCountryTrivia} />
    </AnimatedLanding>
  );
};
