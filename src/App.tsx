// File: src/App.tsx
import React from "react";
import { AppRouter } from "./components/Navigation/AppRouter"; 

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 pb-16">
      <AppRouter />
    </div>
  );
};

export default App;
