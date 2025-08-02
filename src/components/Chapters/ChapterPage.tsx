// File: ChapterPage.tsx
import { useState } from "react";
import type { Chapter } from "../../types/book-types";
import { SingleBookPage } from "./SingleBookPage";

export const ChapterPage = ({
  selectedChapter,
  setSelectedChapter,
}: {
  selectedChapter: Chapter;
  setSelectedChapter: React.Dispatch<React.SetStateAction<Chapter | null>>;
}) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const totalPages = selectedChapter.pages?.length || 0;

  const goToPage = (dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);

    setTimeout(() => {
      setPageNumber((prev) => {
        if (dir === 'next') return Math.min(prev + 1, totalPages - 1);
        if (dir === 'prev') return Math.max(prev - 1, 0);
        return prev;
      });
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-100 to-white border shadow-lg max-w-6xl mx-auto p-8 rounded-lg">
      <button
        onClick={() => setSelectedChapter(null)}
        className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to Chapters
      </button>
      <h1 className="text-4xl font-bold text-center mb-8 font-serif text-brown-800">
        {selectedChapter.title}
      </h1>

      <div className="relative h-full min-h-[420px]">
        <div
          key={pageNumber} // ensures new render for animation
          className={`absolute inset-0 transition-all duration-600 ease-in-out transform ${
            isAnimating ? (direction === 'next' ? 'animate-slide-left' : 'animate-slide-right') : ''
          }`}
        >
          <SingleBookPage
            image={selectedChapter.images?.[pageNumber] ?? ""}
            content={selectedChapter.pages?.[pageNumber] ?? "Page content not found."}
          />
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="mt-10 flex items-center justify-between">
        <button
          onClick={() => goToPage('prev')}
          disabled={pageNumber === 0 || isAnimating}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <span className="text-sm text-gray-600">
          Page {pageNumber + 1} of {totalPages}
        </span>
        <button
          onClick={() => goToPage('next')}
          disabled={pageNumber >= totalPages - 1 || isAnimating}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>

    </div>
  );
};
