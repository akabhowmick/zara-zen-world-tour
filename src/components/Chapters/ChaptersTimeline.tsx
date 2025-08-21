import { MobileTimelineItem } from "./MobileTimelineItem";
import type { Chapter } from "../../types/book-types";
import { TimelineHeader } from "./Timeline/TimelineHeader";
import { TimelineRow } from "./Timeline/TimelineRow";

export function ChaptersTimeline({
  chapters,
  onSelectChapter,
}: {
  chapters: Chapter[];
  onSelectChapter: (id: string | number) => void;
}) {
  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <TimelineHeader />

      {/* Desktop timeline (>= md) */}
      <div className="relative hidden md:block">
        {/* Vertical line down the center */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
        />

        <ul className="relative space-y-20 py-8">
          {chapters.map((ch, idx) => (
            <TimelineRow
              key={ch.id}
              chapter={ch}
              index={idx}
              onClick={() => onSelectChapter(ch.id)}
            />
          ))}
        </ul>
      </div>

      {/* Mobile stacked list (< md) */}
      <div className="md:hidden">
        <ul className="relative py-6">
          {/* Left rail */}
          <div
            aria-hidden
            className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          />

          {chapters.map((ch, idx) => (
            <MobileTimelineItem
              key={ch.id}
              chapter={ch}
              index={idx}
              onClick={() => onSelectChapter(ch.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}





