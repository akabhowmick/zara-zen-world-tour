const toKebab = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const countryFlag = (country: string) => {
  // Quick map for common cases; falls back to best-effort emoji flags.
  const map: Record<string, string> = {
    japan: "🇯🇵",
    "south korea": "🇰🇷",
    korea: "🇰🇷",
    italy: "🇮🇹",
    france: "🇫🇷",
    germany: "🇩🇪",
    india: "🇮🇳",
    china: "🇨🇳",
    thailand: "🇹🇭",
    singapore: "🇸🇬",
    spain: "🇪🇸",
    greece: "🇬🇷",
  };
  const key = country.toLowerCase();
  if (map[key]) return map[key];

  // Fallback: try to build a flag from a 2-letter code in parentheses, e.g. "Japan (JP)"
  const m = country.match(/\(([A-Z]{2})\)/);
  if (m) {
    const code = m[1];
    const base = 0x1f1e6;
    const A = "A".charCodeAt(0);
    return String.fromCodePoint(base + (code.charCodeAt(0) - A), base + (code.charCodeAt(1) - A));
  }
  return "🌍";
};

const getTriviaHref = (country: string) => `/trivia/${toKebab(country)}`;

export const CountryTag = ({ country }: { country: string }) => {
  const flag = countryFlag(country);
  const href = getTriviaHref(country);
  return (
    <div className="max-w-md rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <span className="text-xl">{flag}</span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-800">{country}</p>
          <a
            href={href}
            className="mt-0.5 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Play {country} Trivia →
          </a>
        </div>
      </div>
    </div>
  );
};
