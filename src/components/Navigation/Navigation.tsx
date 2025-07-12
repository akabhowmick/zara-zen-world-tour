import { Book, Users, Trophy, X, Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: "chapters" | "characters" | "trivia";
  setActiveTab: React.Dispatch<React.SetStateAction<"chapters" | "characters" | "trivia">>;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Book className="h-8 w-8 text-blue-400" />
            <span className="font-bold text-xl">The Mystery Chronicles</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => setActiveTab("chapters")}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                activeTab === "chapters" ? "bg-blue-600" : "hover:bg-slate-700"
              }`}
            >
              <Book className="h-5 w-5" />
              <span>Chapters</span>
            </button>
            <button
              onClick={() => setActiveTab("characters")}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                activeTab === "characters" ? "bg-blue-600" : "hover:bg-slate-700"
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Characters</span>
            </button>
            <button
              onClick={() => setActiveTab("trivia")}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                activeTab === "trivia" ? "bg-blue-600" : "hover:bg-slate-700"
              }`}
            >
              <Trophy className="h-5 w-5" />
              <span>Trivia</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  setActiveTab("chapters");
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  activeTab === "chapters" ? "bg-blue-600" : "hover:bg-slate-700"
                }`}
              >
                <Book className="h-5 w-5" />
                <span>Chapters</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("characters");
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  activeTab === "characters" ? "bg-blue-600" : "hover:bg-slate-700"
                }`}
              >
                <Users className="h-5 w-5" />
                <span>Characters</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("trivia");
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  activeTab === "trivia" ? "bg-blue-600" : "hover:bg-slate-700"
                }`}
              >
                <Trophy className="h-5 w-5" />
                <span>Trivia</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
