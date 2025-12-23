import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import globeAnimation from "../assets/Home/spinning-globe.json";
import { HomeTabs } from "../components/Home/HomeTabs";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollToSections = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section (unchanged) */}
      <section className="text-center py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black">
            Zara & Zen&apos;s World Tour!
          </h1>
          <Player
            autoplay
            loop
            src={globeAnimation}
            style={{
              height: "24rem",
              width: "24rem",
              margin: "0 auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Follow two pups around the globe in stories, games, and fun-filled facts!
          </p>
          <Link
            to={"/chapters"}
            onClick={scrollToSections}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Start Exploring
          </Link>
        </div>
      </section>
      <HomeTabs />
    </div>
  );
};
