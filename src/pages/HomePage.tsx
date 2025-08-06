import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import globeAnimation from "../assets/Home/spinning-globe.json";
import { Link } from "react-router-dom";
import { tabs } from "../utils/homePageInfo";

export const HomePage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollToSections = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-orange-700">Zara & Zen's World Tour!</h1>
          <Player
            autoplay
            loop
            src={globeAnimation}
            style={{ height: "600px", width: "600px", margin: "0 auto" }}
          />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Follow two pups around the globe in stories, games, and fun-filled facts!
          </p>
          <button
            onClick={scrollToSections}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Start Exploring
          </button>
        </div>
      </section>

      {/* Section Grid */}
      <section
        ref={scrollRef}
        className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {tabs.map(({ key, label, icon: Icon, description }) => (
          <Link
            key={key}
            to={key}
            className="bg-white hover:bg-yellow-100 transition-shadow shadow-lg rounded-xl p-6 flex flex-col gap-4 text-left border border-gray-200 hover:shadow-xl"
          >
            <div className="flex items-center gap-3">
              <Icon className="w-6 h-6 text-orange-500" />
              <h3 className="text-2xl font-bold text-blue-800">{label}</h3>
            </div>
            <p className="text-gray-700">{description}</p>
            <span className="text-blue-600 font-semibold mt-auto">Go to {label} →</span>
          </Link>
        ))}
      </section>
    </div>
  );
};
