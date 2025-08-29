import { motion, useScroll, useTransform } from "framer-motion";

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
  return (
    <div className="sticky top-0 z-10 -mx-4 mb-6 bg-gradient-to-b from-white/90 to-white/60 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        View Chapters by Country
        <ScrollProgressBar />
      </div>
    </div>
  );
};
