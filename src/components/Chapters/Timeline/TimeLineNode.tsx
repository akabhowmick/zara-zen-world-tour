export const TimelineNode = ({ index }: { index: number }) => {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
      <div className="relative h-3 w-3 rounded-full bg-white shadow ring-2 ring-gray-400">
        <div
          className={`absolute -inset-1 rounded-full ${
            index % 2 === 0 ? "bg-yellow-300/40" : "bg-blue-300/40"
          } blur-sm`}
        />
      </div>
    </div>
  );
};
