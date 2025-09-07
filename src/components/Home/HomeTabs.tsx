import { Link } from "react-router-dom";
import { tabs } from "../../utils/homePageInfo";

export const HomeTabs = () => {
  return (
    <section
      className="relative max-w-6xl mx-auto px-4 py-16"
      aria-label="Zara & Zen sections"
    >
      {/* soft background gradient (optional) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_10%,#eef2ff_0%,transparent_60%),radial-gradient(800px_500px_at_90%_20%,#fff7ed_0%,transparent_60%)]"
      />

      <div className="space-y-14">
        {tabs.map(({ key, label, icon: Icon, description, doodle, doodleAlt }, i) => {
          const isLeft = i % 2 === 0; // which side the doodle sits on for md+
          return (
            <article key={key} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Doodle side */}
              <div
                className={[
                  "hidden md:block",
                  isLeft ? "md:col-span-4 md:order-1" : "md:col-span-4 md:order-2",
                ].join(" ")}
              >
                {doodle ? (
                  <img
                    src={doodle}
                    alt={doodleAlt ?? ""}
                    className="w-40 lg:w-48 rounded xl:w-56 mx-auto drop-shadow-sm"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-24" />
                )}
              </div>

              {/* Card */}
              <Link
                to={key}
                className={[
                  "group md:col-span-8",
                  isLeft ? "md:order-2" : "md:order-1",
                  "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-orange-500" />
                  <h3 className="text-2xl font-bold text-blue-800">{label}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mt-2">
                  {description}
                </p>
                <div className="mt-4 inline-flex items-center font-semibold text-blue-600">
                  Go to {label}
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>

      {/* Optional: Quick links grid under the rows */}
      <div className="mt-16">
        <h4 className="text-center text-sm tracking-widest text-gray-500 uppercase">
          Quick Links
        </h4>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {tabs.map(({ key, label, icon: Icon }) => (
            <Link
              key={`mini-${key}`}
              to={key}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 hover:shadow-md transition"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
                <Icon className="h-5 w-5 text-blue-700" />
              </span>
              <span className="font-medium text-gray-900">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
