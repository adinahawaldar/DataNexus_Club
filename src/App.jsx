import React, { useState, useEffect } from "react";

import LandingPage from "./pages/Landing_page";
import AchievementsPage from "./pages/Achievements_page";
import TeamPage from "./pages/Team_page";
import Events from "./pages/Events_page";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const getPath = () => {
    return (window.location.pathname + window.location.hash).toLowerCase();
  };

  const [currentPath, setCurrentPath] = useState(getPath());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getPath());
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const isAchievements = currentPath.includes("achievements");
  const isTeams = currentPath.includes("teams");
  const isEvents = currentPath.includes("events");

  if (isAchievements) {
    return (
      <ThemeProvider>
        <AchievementsPage />
      </ThemeProvider>
    );
  }

  if (currentPath.includes("teams")) {
    return (
      <ThemeProvider>
        <TeamPage />
      </ThemeProvider>
    );
  }

  if (isEvents) {
    return (
      <ThemeProvider>
        <Events />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;