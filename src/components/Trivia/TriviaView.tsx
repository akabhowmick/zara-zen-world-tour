import { useNavigate } from "react-router-dom";
import { AnimatedLanding } from "../Animated/AnimatedLanding";
import { TriviaMenu } from "./TriviaMenu";

const toKebab = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const TriviaView = () => {
  const navigate = useNavigate();

  const startCountryTrivia = (country: string, id = 1) => {
    const slug = toKebab(country);
    navigate(`/trivia/${slug}+${id}`);
  };

  return (
    <div className="py-4">
      {" "}
      <AnimatedLanding title="Select a Country">
        <TriviaMenu onClick={startCountryTrivia} />
      </AnimatedLanding>
    </div>
  );
};
