// File: src/App.tsx
import React from "react";
import { AppRouter } from "./components/Navigation/AppRouter";
import { Footer } from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100">
        <AppRouter />
      </div>
      <Footer />
    </>
  );
};

export default App;
