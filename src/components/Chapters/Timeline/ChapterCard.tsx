import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Chapter } from "../../../types/book-types";

export const ChapterCard = ({
  chapter,
  onChapterClick,
  side,
}: {
  chapter: Chapter;
  index: number;
  onChapterClick: (value: React.SetStateAction<Chapter | null>) => void;
  side: "left" | "right";
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  // TODO double check animation logic 
  const x = useTransform(scrollYProgress, [0, 1], [side === "left" ? 24 : -24, 0]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0.65, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [side === "left" ? -1.5 : 1.5, 0]);

  return (
    <motion.article
      ref={ref}
      style={{ x, opacity, rotate }}
      className="relative max-w-md cursor-pointer select-none"
      onClick={() => onChapterClick(chapter)}
      aria-label={`${chapter.country}: ${chapter.title}`}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer max-w-sm">
        <div className="flex flex-col h-full">
          {chapter.image && (
            <img
              src={chapter.image}
              alt={chapter.title}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
          )}
          {chapter.countryCode && (
            <span className="text-2xl absolute top-2 right-2">
              {String.fromCodePoint(
                ...[...chapter.countryCode.toUpperCase()].map((c) => 0x1f1e6 - 65 + c.charCodeAt(0))
              )}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};
