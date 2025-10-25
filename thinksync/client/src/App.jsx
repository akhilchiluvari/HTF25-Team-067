// client/src/App.jsx
import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const userLoggedIn = false; // TODO: Replace with real auth check

  return userLoggedIn ? <HomePage /> : <LoginPage />;
}

export default App;
