import type { Chapter } from "../../types/book-types";

export const ChapterPage = ({
  selectedChapter,
  setSelectedChapter,
}: {
  selectedChapter: Chapter;
  setSelectedChapter: React.Dispatch<React.SetStateAction<Chapter | null>>;
}) => {
  return (
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
  );
};
