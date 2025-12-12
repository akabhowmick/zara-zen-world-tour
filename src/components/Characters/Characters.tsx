import { useState } from "react";
import type { Character } from "../../types/book-types";
import { bookCharacters } from "../../utils/characters";

export const CharactersView = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  return (
    <div className="max-w-6xl mx-auto">
      {selectedCharacter ? (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <button
            onClick={() => setSelectedCharacter(null)}
            className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Characters
          </button>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{selectedCharacter.name}</h1>
              <p className="text-gray-700 text-lg mb-6">{selectedCharacter.description}</p>
              <div>
                <h3 className="text-xl font-semibold mb-3">Character Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCharacter.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold my-8 text-center">Characters</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookCharacters.map((character) => (
              <div
                key={character.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedCharacter(character)}
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-72 aspect-square object-contain"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
                  <p className="text-gray-600 text-sm mb-3">{character.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {character.traits.slice(0, 3).map((trait, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
