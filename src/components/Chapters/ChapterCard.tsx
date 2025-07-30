import { ChevronRight } from "lucide-react";
import type { Chapter } from "../../types/book-types";

export const ChapterCard = ({
  chapter,

  onChapterClick,
}: {
  chapter: Chapter;
  onChapterClick: (value: React.SetStateAction<Chapter | null>) => void;
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer max-w-sm"
      onClick={() => onChapterClick(chapter)}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-xl font-semibold text-gray-800 leading-tight">{chapter.title}</h2>
          <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
        </div>
        <p className="text-gray-500 text-xs mb-4 font-medium">Published: {chapter.publishedAt}</p>
        <p className="text-gray-700 text-sm leading-relaxed flex-grow">
          {chapter.content.substring(0, 120)}...
        </p>
      </div>
    </div>
  );
};
