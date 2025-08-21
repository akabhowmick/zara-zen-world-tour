import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";
import type { Chapter } from "../../types/book-types";

export const MobileTimelineItem = ({
  chapter,
  onClick,
}: {
  chapter: Chapter;
  index: number;
  onClick: () => void;
}) => {
  const ref = React.useRef<HTMLLIElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.7"] });
  const x = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.li ref={ref} style={{ x, opacity }} className="relative mb-8 pl-12 pr-2 last:mb-0">

      <div className="absolute left-5 top-2.5 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow ring-2 ring-gray-400" />

      <button
        onClick={onClick}
        className="w-full rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm active:scale-[0.99]"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {chapter.country}
        </p>
        <p className="mt-1 text-base font-semibold text-gray-900">{chapter.title}</p>
        {chapter.subtitle && (
          <p className="mt-1 line-clamp-2 text-sm text-gray-600">{chapter.subtitle}</p>
        )}
      </button>
    </motion.li>
  );
};
