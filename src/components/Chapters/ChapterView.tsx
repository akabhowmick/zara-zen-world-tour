import { useState } from "react";
import type { Chapter } from "../../types/book-types";
import { mockChapters } from "../../utils/chapters";
import { ChapterCard } from "./ChapterCard";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockChapters.map((chapter) => (
              <ChapterCard chapter={chapter} onChapterClick={() => setSelectedChapter(chapter)}/>
              
            ))}
          </div>
        </div>
      )}
    </div>
  );
};



