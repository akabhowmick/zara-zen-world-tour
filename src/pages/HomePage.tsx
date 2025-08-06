import { Link } from "react-router-dom";
import { writingActivities } from "../utils/homePageInfo";

export const HomePage = () => {
  return (
    <div className="bg-yellow-100 text-gray-800 font-sans">

      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Write Your Tail-Wagging Tale!</h2>
        <p className="max-w-2xl mx-auto text-lg text-blue-600">
          Become a pup-thor and share your barking good stories, poems, and ideas just like Zara and
          Zen!
        </p>
      </section>

      <section className="bg-white py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {writingActivities.map(({ title, description, to, cta }) => (
          <div key={to} className="bg-yellow-200 rounded-lg p-4 shadow text-center">
            <h3 className="font-bold text-xl mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <Link to={to} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
              {cta}
            </Link>
          </div>
        ))}
      </section>

      <footer className="bg-yellow-300 mt-12 py-6 px-4 text-center text-sm text-brown-800">
        <p className="mb-2">Subscribe for more pawsome updates from Zara & Zen!</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded border border-gray-400 w-64"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4">© 2025 Zara & Zen's World. All tails reserved.</p>
      </footer>
    </div>
  );
};
