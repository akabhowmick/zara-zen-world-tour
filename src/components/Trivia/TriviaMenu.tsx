import { countries } from "../../utils/triviaQuestions";

export const TriviaMenu = ({ onSelect }: { onSelect: (c: string) => void }) => (
  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-8">
    {countries.map(({ name, flag }) => (
      <button
        key={name}
        onClick={() => onSelect(name)}
        className="bg-blue-100 text-blue-800 py-3 px-4 rounded-lg shadow hover:bg-blue-200 font-semibold capitalize"
      >
        <img src={flag} />
        <span className="capitalize">{name}</span>
      </button>
    ))}
  </div>
);
