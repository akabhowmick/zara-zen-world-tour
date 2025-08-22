import type { Chapter } from "../../../types/book-types";
import { ChapterCard } from "../ChapterCard";
import { TimelineNode } from "./TimeLineNode";

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
  // const alignClass = isLeft ? "pr-16" : "pl-16";
  const sideClass = isLeft ? "justify-end pr-10" : "justify-start pl-10";

  return (
    <li className={`relative grid grid-cols-1 items-center md:grid-cols-2`}>
      {/* Left column */}
      <div className={`relative ${isLeft ? sideClass : ""}`}>
        {isLeft && (
          <ChapterCard chapter={chapter} index={index} onChapterClick={onClick} side="left" />
        )}
      </div>

      {/* Center node */}
      <TimelineNode index={index} />

      {/* Right column */}
      <div className={`relative ${!isLeft ? sideClass : ""}`}>
        {!isLeft && (
          <ChapterCard chapter={chapter} index={index} onChapterClick={onClick} side="right" />
        )}
      </div>
    </li>
  );
};
