import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ChaptersView } from "../Chapters/ChapterView";
import { CharactersView } from "../Characters/Characters";
import { TriviaView } from "../Trivia/TriviaView";
import { BlogView } from "../Blog/BlogView";
import { HomePage } from "../../pages/HomePage";
import { Navbar } from "./Navbar";
import { TriviaGamePage } from "../Trivia/TriviaCountryGamePage";
import { LoginPage } from "../../pages/LoginPage";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chapters" element={<ChaptersView />} />
        <Route path="/characters" element={<CharactersView />} />
        <Route path="/trivia" element={<TriviaView />} />
        <Route path="/trivia/:slugId" element={<TriviaGamePage />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<BlogView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
