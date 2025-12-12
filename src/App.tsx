import React from "react";
import { AppRouter } from "./components/Navigation/AppRouter";
import { Footer } from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-blue-100">
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
