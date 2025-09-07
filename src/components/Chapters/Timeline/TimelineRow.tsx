import type { Chapter } from "../../../types/book-types";
import { ChapterCard } from "./ChapterCard";
import { CountryTag } from "./CountryTag";
import { TimelineNode } from "./TimeLineNode";

const getCountry = (chapter: Chapter) => (chapter.country as string) || "Unknown";

export const TimelineRow = ({
  chapter,
  index,
  onClick,
}: {
  chapter: Chapter;
  index: number;
  onClick: () => void;
}) => {
  const isLeft = index % 2 === 0;
  const sideClass = isLeft ? "justify-end pr-10" : "justify-start pl-10";
  const oppositeSideClass = !isLeft ? "justify-end pr-10" : "justify-start pl-10";
  const country = getCountry(chapter);

  return (
    <li className="relative grid grid-cols-1 items-center md:grid-cols-2">
      {/* Left column */}
      <div className={`relative ${isLeft ? sideClass : oppositeSideClass}`}>
        {isLeft ? (
          <ChapterCard chapter={chapter} index={index} onChapterClick={onClick} side="left" />
        ) : (
          <CountryTag country={country} chapter={chapter} />
        )}
      </div>

      {/* Center node */}
      <TimelineNode index={index} />

      {/* Right column */}
      <div className={`relative ${!isLeft ? sideClass : oppositeSideClass}`}>
        {!isLeft ? (
          <ChapterCard chapter={chapter} index={index} onChapterClick={onClick} side="right" />
        ) : (
          <CountryTag chapter={chapter} country={country} />
        )}
      </div>
    </li>
  );
};
