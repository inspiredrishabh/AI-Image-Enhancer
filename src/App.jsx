import React from "react";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center items-center">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              AI Image Enhancer
              <span className="ml-2 text-blue-400">✨</span>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-2">
            Transform your images with AI-powered enhancement
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Home />
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>
            Developed with ❤️ by Rishabh
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
