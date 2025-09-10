import { useState } from "react";
import type { Chapter } from "../../types/book-types";
import { chapters } from "../../utils/chapters";
import { ChapterPage } from "./ChapterPage";
import { ChaptersTimeline } from "./ChaptersTimeline";

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
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 mt-10">
        {selectedChapter ? (
          <ChapterPage selectedChapter={selectedChapter} setSelectedChapter={setSelectedChapter} />
        ) : (
          <div className="animate-fade-in">
            <ChaptersTimeline
              chapters={chapters}
              onSelectChapter={(id: number | string) => {
                const chapter = chapters.find((c) => c.id === id);
                if (chapter) setSelectedChapter(chapter);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
