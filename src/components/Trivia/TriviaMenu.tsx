import { countries } from "../../utils/triviaQuestions";

export const TriviaMenu = ({ onSelect }: { onSelect: (c: string) => void }) => (
  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-8">
    {countries.map((country) => (
      <button
        key={country}
        onClick={() => onSelect(country)}
        className="bg-blue-100 text-blue-800 py-3 px-4 rounded-lg shadow hover:bg-blue-200 font-semibold capitalize"
      >
        {country.replace(/([A-Z])/g, " $1")}
      </button>
    ))}
  </div>
);
