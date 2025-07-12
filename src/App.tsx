import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { Chapter, Character } from "./types/book-types";
import { mockChapters, mockCharacters } from "./utils/mockData";
import { Navigation } from "./components/Navigation/Navigation";
import { TriviaView } from "./components/Trivia/Trivia";

const BookWebsite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"chapters" | "characters" | "trivia">("chapters");
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const ChaptersView = () => (
    <div className="max-w-4xl mx-auto">
      {selectedChapter ? (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <button
            onClick={() => setSelectedChapter(null)}
            className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Chapters
          </button>
          <h1 className="text-3xl font-bold mb-4">{selectedChapter.title}</h1>
          <p className="text-gray-600 mb-6">Published: {selectedChapter.publishedAt}</p>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed">{selectedChapter.content}</p>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-8 text-center">Chapters</h1>
          <div className="grid gap-6">
            {mockChapters.map((chapter) => (
              <div
                key={chapter.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedChapter(chapter)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{chapter.title}</h2>
                    <p className="text-gray-600 text-sm mb-3">Published: {chapter.publishedAt}</p>
                    <p className="text-gray-700">{chapter.content.substring(0, 150)}...</p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const CharactersView = () => (
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
          <h1 className="text-3xl font-bold mb-8 text-center">Characters</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCharacters.map((character) => (
              <div
                key={character.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedCharacter(character)}
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-48 object-cover"
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

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        {activeTab === "chapters" && <ChaptersView />}
        {activeTab === "characters" && <CharactersView />}
        {activeTab === "trivia" && <TriviaView />}
      </main>
    </div>
  );
};

export default BookWebsite;
