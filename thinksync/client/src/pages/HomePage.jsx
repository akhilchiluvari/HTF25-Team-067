// client/src/pages/HomePage.jsx
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-indigo-700 text-white p-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl">ThinkSync</h1>
        <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg">
          Logout
        </button>
      </nav>

      <main className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Study Rooms</h2>
          <ul className="space-y-2">
            <li className="bg-indigo-100 p-2 rounded-md cursor-pointer hover:bg-indigo-200">
              # General
            </li>
            <li className="p-2 rounded-md cursor-pointer hover:bg-indigo-200">
              # Web Dev
            </li>
            <li className="p-2 rounded-md cursor-pointer hover:bg-indigo-200">
              # AI/ML
            </li>
          </ul>
        </aside>

        {/* Chat Area */}
        <section className="flex-1 flex flex-col p-6">
          <div className="flex-1 bg-white rounded-lg shadow p-4 overflow-y-auto">
            <div className="text-gray-500 text-center mt-10">
              👋 Welcome to ThinkSync! Join a room to start collaborating.
            </div>
          </div>

          <div className="mt-4 flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-r-lg">
              Send
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
