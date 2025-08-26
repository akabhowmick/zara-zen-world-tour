import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative h-1 w-40 overflow-hidden rounded bg-gray-200/70">
      <motion.div style={{ width }} className="absolute inset-y-0 left-0 bg-gray-700" />
    </div>
  );
}

export const TimelineHeader = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.75]);

  return (
    <div
      ref={ref}
      className="sticky top-0 z-10 -mx-4 mb-6 bg-gradient-to-b from-white/90 to-white/60 px-4 py-3 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <motion.h2
          style={{ y, opacity }}
          className="text-xl font-semibold tracking-tight text-gray-800"
        >
          View Chapters by Country
        </motion.h2>
        <ScrollProgressBar />
      </div>
    </div>
  );
};
