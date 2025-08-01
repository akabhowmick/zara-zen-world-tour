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
  const totalPages = selectedChapter.pages?.length || 0;

  const goToPrevious = () => {
    if (pageNumber > 0) setPageNumber(pageNumber - 1);
  };

  const goToNext = () => {
    if (pageNumber < totalPages - 1) setPageNumber(pageNumber + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
      <button
        onClick={() => setSelectedChapter(null)}
        className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to Chapters
      </button>
      <h1 className="text-3xl font-bold mb-4">{selectedChapter.title}</h1>

      <SingleBookPage
        image={selectedChapter.images?.[pageNumber] ?? ""}
        content={selectedChapter.pages?.[pageNumber] ?? "Page content not found."}
      />

      {/* Pagination Controls */}
      <div className="mt-10 flex items-center justify-between">
        <button
          onClick={goToPrevious}
          disabled={pageNumber === 0}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <span className="text-sm text-gray-600">
          Page {pageNumber + 1} of {totalPages}
        </span>
        <button
          onClick={goToNext}
          disabled={pageNumber >= totalPages - 1}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
};
