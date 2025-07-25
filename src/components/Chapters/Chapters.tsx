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
)};
