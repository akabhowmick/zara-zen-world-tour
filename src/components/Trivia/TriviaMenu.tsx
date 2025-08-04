import { countriesWithFlags, type Country } from "../../utils/triviaQuestions";

export const TriviaMenu = ({ onClick }: { onClick: (country: Country) => void }) => (
  <div className="max-w-3xl mx-auto text-center py-12">
    <h1 className="text-4xl font-bold mb-6">Select a Country</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
    </div>
  </div>
);
