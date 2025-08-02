export const SingleBookPage = ({ content, image }: { content: string; image: string }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-[#fdfcf8] rounded-lg p-6 shadow-inner border border-[#e3dcc7] transition-all duration-500 ease-in-out">
      <div className="pr-4">
        <div className="prose prose-lg text-2xl max-w-none transition-opacity duration-300 ease-in">
          <p className="text-gray-800 leading-relaxed whitespace-pre-line font-serif">
            {content}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500 ease-in-out border border-[#ddd5c0] bg-white">
          <img
            src={image}
            alt="Chapter image"
            className="object-contain w-full h-auto max-h-[400px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};