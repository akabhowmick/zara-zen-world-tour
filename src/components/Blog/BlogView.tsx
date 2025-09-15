import { WritingActivities } from "./WritingActivities";

export const BlogView = () => {
  return (
    <div className="text-gray-800 font-sans">
      <section className="py-12 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Write Your Tail-Wagging Tale!</h2>
        <p className="max-w-2xl mx-auto text-lg text-blue-600">
          Become a pup-thor and share your barking good stories, poems, and ideas just like Zara and
          Zen!
        </p>
      </section>

      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <WritingActivities />
      </section>
    </div>
  );
};
