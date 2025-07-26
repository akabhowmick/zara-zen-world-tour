import { ChevronRight } from "lucide-react";
import { useState } from "react";
import type { Chapter } from "../../types/book-types";
import { mockChapters } from "../../utils/chapters";

export const ChaptersView = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  return (
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
};

import React from "react";

interface Book {
  title: string;
  image: string;
}

const books: Book[] = [
  {
    title: "Geronimo Stilton - Fantasia in Anteprima!",
    image: "/path/to/image1.jpg",
  },
  // Add all other books here similarly
];

const BookCard: React.FC<Book> = ({ title, image }) => (
  <div className="w-36 m-2 flex flex-col items-center text-center">
    <img src={image} alt={title} className="w-full h-auto border rounded-md" />
    <p className="mt-1 text-xs font-semibold text-white">{title}</p>
  </div>
);

const GeronimoLibrary: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-300 py-10 px-4">
      <div className="max-w-screen-lg mx-auto">
        <header className="text-center mb-10">
          <img
            src="/path/to/banner-image.jpg"
            alt="Sfoglia in Anteprima i nuovi top-seller"
            className="mx-auto"
          />
        </header>

        <div className="bg-red-700 rounded-lg p-6">
          <h2 className="text-white text-xl font-bold mb-4">Leggi</h2>
          <p className="text-white mb-6 text-sm">
            Esplora, interagisci e conosci i personaggi dei libri di Geronimo leggili qui!
          </p>
          <div className="flex flex-wrap justify-center">
            {books.map((book, idx) => (
              <BookCard key={idx} title={book.title} image={book.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeronimoLibrary;
