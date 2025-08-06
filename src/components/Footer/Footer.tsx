import { PawPrint, Mail, CheckCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="text-black py-10 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Fun copy */}
        <div className="space-y-4 text-lg">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <PawPrint className="h-6 w-6" /> Join the Pawletter!
          </h2>
          <p>🐶 Want the latest tail-wagging updates from Zara & Zen?</p>
          <p>🐾 Be the first to sniff out new stories, games, and doggone awesome adventures!</p>
          <p>
            ✨ It’s easier than catching a tennis ball — just fill in your email and fetch your spot
            in the newsletter!
          </p>
        </div>

        {/* Right: Subscription form */}
        <form className="space-y-4 text-left">
          <label className="block font-semibold" htmlFor="email">
            <Mail className="inline-block mr-2" />
            Enter your email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. waggytail@dogmail.com"
            className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white"
          />

          <div className="flex items-center gap-2">
            <input type="checkbox" id="consent" className="accent-orange-500 bg-white" />
            <label htmlFor="consent" className="text-sm">
              <CheckCircle className="inline-block w-4 h-4 mr-1" />I give paw-mission to receive
              pawsome emails.
            </label>
          </div>

          <button className="mt-2 bg-blue-300 hover:bg-blue-400 text-black font-bold py-2 px-6 rounded-full shadow inline-flex items-center gap-2">
            CONTINUE <span className="text-xl">➡️</span>
          </button>
        </form>
      </div>

      <p className="mt-8 text-center text-sm">© 2025 Zara & Zen's World. All tails reserved. 🐾</p>
    </footer>
  );
};
