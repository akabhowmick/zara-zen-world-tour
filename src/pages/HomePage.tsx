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
          <button
            onClick={scrollToSections}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Start Exploring
          </button>
        </div>
      </section>
      {/* Zig-Zag Trail */}
      <section
        ref={scrollRef}
        className="relative max-w-6xl mx-auto px-4 pb-28"
        aria-label="Zara & Zen sections"
      >
        {/* Wavy dashed path in the background */}
        <svg
          className="pointer-events-none absolute inset-0 -z-10"
          width="100%"
          height="100%"
          viewBox="0 0 1000 3000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* A repeating cubic-bezier snake. Scale with viewBox so it stretches to the section height */}
          <path
            d="
        M 500 0
        C 250 120, 250 240, 500 360
        S 750 600, 500 720
        S 250 960, 500 1080
        S 750 1320, 500 1440
        S 250 1680, 500 1800
        S 750 2040, 500 2160
        S 250 2400, 500 2520
        S 750 2760, 500 2880
      "
            fill="none"
            stroke="#F6C453"
            strokeWidth="6"
            strokeDasharray="8 14"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>

        <div className="space-y-20">
          {tabs.map(({ key, label, icon: Icon, description, doodle, doodleAlt }, i) => {
            const isLeft = i % 2 === 0;

            return (
              <article key={key} className="relative">
                {/* pin at the wavy path center (approx at mid of row) */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 hidden md:flex">
                  <span className="inline-flex items-center justify-center rounded-full bg-white shadow p-2 ring-1 ring-black/5">
                    {/* tiny pin dot */}
                    <span className="h-3 w-3 rounded-full bg-rose-500 block" />
                  </span>
                </div>

                {/* row */}
                <div className="flex">
                  {/* the wide card (70% width) */}
                  <a
                    href={key}
                    className={[
                      "group rounded-2xl border border-gray-200 bg-white p-6 shadow hover:shadow-lg transition",
                      "md:w-[70%] lg:w-[72%] xl:w-[68%]",
                      isLeft ? "ml-0 mr-auto" : "ml-auto mr-0",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-6 h-6 text-orange-500" />
                      <h3 className="text-2xl font-bold text-blue-800">{label}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{description}</p>
                    <Link to={key}>
                      <div className="mt-4 inline-flex items-center font-semibold text-blue-600">
                        Go to {label}
                        <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </div>
                    </Link>
                  </a>

                  {/* doodle on the OUTER side, only on md+ to keep mobile clean (optional) */}
                  {doodle && (
                    <div
                      className={["hidden md:block shrink-0", isLeft ? "ml-6" : "mr-6"].join(" ")}
                      aria-hidden="true"
                    >
                      <img
                        src={doodle}
                        alt={doodleAlt ?? ""}
                        className={[
                          "w-28 lg:w-32 xl:w-36 opacity-90",
                          isLeft ? "order-last" : "order-first",
                        ].join(" ")}
                      />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
