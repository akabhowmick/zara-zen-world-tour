import { countriesWithFlags, type Country } from "../../utils/triviaQuestions";

export const TriviaMenu = ({ onClick }: { onClick: (country: Country) => void }) => (
  <>
    {countriesWithFlags.map(({ name, flag }) => (
      <button
        key={name}
        onClick={() => onClick(name as Country)}
        className="bg-blue-100 text-blue-800 py-3 px-6 rounded-lg shadow hover:bg-blue-200 font-semibold capitalize"
      >
        <div className="flex gap-2">
          <img
            src={flag}
            alt={`${name} flag`}
            className="w-8 h-full object-cover rounded border border-gray-300"
          />
          <h2>{name}</h2>
        </div>
      </button>
    ))}
  </>
);
