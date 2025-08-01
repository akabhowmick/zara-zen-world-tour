export const SingleBookPage = ({ content, image }: { content: string; image: string }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-800 leading-relaxed whitespace-pre-line">{content}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative w-full h-96 rounded overflow-hidden shadow">
          <img src={image} alt="Chapter image" className="object-contain" />
        </div>
      </div>
    </div>
  );
};
