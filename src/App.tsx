import React, { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { TriviaView } from "./components/Trivia/Trivia";
import GeronimoLibrary from "./components/Chapters/Chapters";
import { CharactersView } from "./components/Characters/Characters";

const BookWebsite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"chapters" | "characters" | "trivia">("chapters");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        {activeTab === "chapters" && <GeronimoLibrary />}
        {activeTab === "characters" && <CharactersView />}
        {activeTab === "trivia" && <TriviaView />}

      </main>
    </div>
  );
};

export default BookWebsite;
