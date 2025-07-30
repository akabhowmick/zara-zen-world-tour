import { useState } from "react";
import type { Chapter } from "../../types/book-types";
import { chapters } from "../../utils/chapters";
import { ChapterCard } from "./ChapterCard";
// import { Sidebar } from "lucide-react";
// import { MapPin } from "lucide-react";

export const ChaptersView = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 pb-16">
      {/* Hero Section */}
      {!selectedChapter && (
        <div
          className="relative h-72 md:h-96 flex items-center justify-center text-white bg-cover bg-center shadow-lg"
          style={{ backgroundImage: "url('src/assets/Main/hero2.png')", backgroundSize: "contain" }}
        >
          {/* <div className="relative z-10 text-center px-6 text-emerald-950">
            <h1 className="text-4xl md:text-5xl font-bold">The Adventures of Zara & Zen</h1>
            <p className="text-lg md:text-xl font-medium mt-2">
              Explore the world one pawprint at a time 🌏
            </p>
          </div> */}
        </div>
      )}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 mt-10">
        {/* Floating Progress Sidebar */}
        {/* {!selectedChapter && <Sidebar />} */}

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 animate-fade-in">
            {chapters.map((chapter: Chapter) => (
              <ChapterCard key={chapter.id} chapter={chapter} onChapterClick={setSelectedChapter} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
