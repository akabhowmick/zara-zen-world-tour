import React from "react";
import { AppRouter } from "./components/Navigation/AppRouter";
import { Footer } from "./components/Footer/Footer";
import { AuthProvider } from "./context/AuthProvider";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-blue-100">
        <AppRouter />
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
