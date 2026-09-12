import React from "react";
import LandingPage from "./pages/Landing_page";
import AchievementsPage from "./pages/Achievements_page";

function App() {
  const path = window.location.pathname;

  if (path === "/achievements") {
    return <AchievementsPage />;
  }

  return <LandingPage />;
}

export default App;