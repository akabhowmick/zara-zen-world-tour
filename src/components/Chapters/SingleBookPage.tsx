export const SingleBookPage = ({ image, content }: { image: string; content: string }) => (
  <div className="bg-white rounded shadow-md min-h-[500px] flex overflow-hidden">
    {/* Text side */}
    <div className="w-1/2 p-8 flex items-center">
      <p
        className="text-gray-800 leading-relaxed text-lg"
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        {content}
      </p>
    </div>
    {/* Image side */}
    <div className="w-1/2 relative bg-gradient-to-br from-blue-50 to-purple-50">
      {image && (
        <img
          src={image}
          alt="Page illustration"
          className="w-full h-full object-cover transition-opacity duration-400"
        />
      )}
    </div>
  </div>
);