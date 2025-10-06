import { useState } from "react";
import "./Chapters.css";
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
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const totalPages = selectedChapter.pages?.length || 0;

  const goToPage = (dir: "next" | "prev") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);

    setTimeout(() => {
      setPageNumber((prev) => {
        if (dir === "next") return Math.min(prev + 1, totalPages - 1);
        if (dir === "prev") return Math.max(prev - 1, 0);
        return prev;
      });
      setIsAnimating(false);
    }, 400);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-100 to-white border shadow-lg max-w-6xl mx-auto p-8 rounded-lg">
      <button
        onClick={() => setSelectedChapter(null)}
        className="mb-6 text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        ← Back to Chapters
      </button>
      <h1 className="text-4xl font-bold text-center mb-8 font-serif text-amber-900">
        {selectedChapter.title}
      </h1>

      <div className="relative h-full min-h-[500px] overflow-hidden perspective-1000">
        <div
          key={pageNumber}
          className={`transition-all duration-400 ease-out ${
            isAnimating
              ? direction === "next"
                ? "animate-page-turn-next"
                : "animate-page-turn-prev"
              : "opacity-100 scale-100"
          }`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <SingleBookPage
            image={selectedChapter.images?.[pageNumber] ?? ""}
            content={selectedChapter.pages?.[pageNumber] ?? "Page content not found."}
          />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          onClick={() => goToPage("prev")}
          disabled={pageNumber === 0 || isAnimating}
          className="px-6 py-2 rounded-lg bg-amber-200 hover:bg-amber-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all font-medium text-amber-900 shadow-sm hover:shadow"
        >
          ← Previous
        </button>
        <span className="text-sm text-gray-600 font-medium">
          Page {pageNumber + 1} of {totalPages}
        </span>
        <button
          onClick={() => goToPage("next")}
          disabled={pageNumber >= totalPages - 1 || isAnimating}
          className="px-6 py-2 rounded-lg bg-amber-200 hover:bg-amber-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all font-medium text-amber-900 shadow-sm hover:shadow"
        >
          Next →
        </button>
      </div>
    </div>
  );
};
